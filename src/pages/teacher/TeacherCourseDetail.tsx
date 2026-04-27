import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { Plus, Edit2, Trash2, ChevronRight, ChevronDown, ArrowLeft, X, Eye, Book, Video } from 'lucide-react';
import { coursesData } from '../../data/coursesData';

interface Sublesson {
  id: number;
  title: string;
  content?: string;
  video?: string | null;
  reference?: {
    book: string;
    chapter: number | null;
    page: number;
  } | null;
}

interface Lesson {
  id: number;
  title: string;
  sublessons: Sublesson[];
}

interface Unit {
  id: number;
  title: string;
  lessons: Lesson[];
}

export default function TeacherCourseDetail() {
  const { courseId } = useParams();
  const [expandedUnits, setExpandedUnits] = useState<number[]>([1]);
  const [expandedLessons, setExpandedLessons] = useState<number[]>([1]);
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [addType, setAddType] = useState<'unit' | 'lesson' | 'sublesson'>('unit');
  const [editType, setEditType] = useState<'unit' | 'lesson' | 'sublesson'>('unit');
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
  const [viewingSublesson, setViewingSublesson] = useState<Sublesson | null>(null);

  // Get initial course data
  const initialCourse = coursesData[courseId as keyof typeof coursesData];
  
  const [course, setCourse] = useState(initialCourse ? {
    id: initialCourse.id,
    title: initialCourse.title,
    teacher: initialCourse.teacher,
    units: initialCourse.units as Unit[]
  } : null);

  const [newItem, setNewItem] = useState({
    title: '',
    content: '',
    video: '',
    referenceBook: '',
    referenceChapter: '',
    referencePage: ''
  });

  const [editingItem, setEditingItem] = useState<any>(null);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <DashboardNavbar />
        <div className="flex">
          <DashboardSidebar role="teacher" />
          <main className="flex-1 p-8">
            <div className="max-w-7xl mx-auto">
              <p className="text-gray-600">Course not found</p>
              <Link to="/teacher/courses" className="text-blue-600 hover:text-blue-700">
                Back to Courses
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const toggleUnit = (unitId: number) => {
    setExpandedUnits(prev =>
      prev.includes(unitId) ? prev.filter(id => id !== unitId) : [...prev, unitId]
    );
  };

  const toggleLesson = (lessonId: number) => {
    setExpandedLessons(prev =>
      prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
    );
  };

  const openAddModal = (type: 'unit' | 'lesson' | 'sublesson', unitId?: number, lessonId?: number) => {
    setAddType(type);
    setSelectedUnitId(unitId || null);
    setSelectedLessonId(lessonId || null);
    setShowAddModal(true);
  };

  const openEditModal = (type: 'unit' | 'lesson' | 'sublesson', item: any, unitId?: number, lessonId?: number) => {
    setEditType(type);
    setEditingItem(item);
    setSelectedUnitId(unitId || null);
    setSelectedLessonId(lessonId || null);
    
    if (type === 'sublesson') {
      setNewItem({
        title: item.title,
        content: item.content || '',
        video: item.video || '',
        referenceBook: item.reference?.book || '',
        referenceChapter: item.reference?.chapter?.toString() || '',
        referencePage: item.reference?.page?.toString() || ''
      });
    } else {
      setNewItem({
        title: item.title,
        content: '',
        video: '',
        referenceBook: '',
        referenceChapter: '',
        referencePage: ''
      });
    }
    setShowEditModal(true);
  };

  const handleAdd = () => {
    if (!newItem.title) {
      alert('Please enter a title');
      return;
    }

    if (addType === 'unit') {
      const newUnit: Unit = {
        id: Math.max(0, ...course.units.map(u => u.id)) + 1,
        title: newItem.title,
        lessons: []
      };
      setCourse({ ...course, units: [...course.units, newUnit] });
    } else if (addType === 'lesson' && selectedUnitId) {
      setCourse({
        ...course,
        units: course.units.map(unit => {
          if (unit.id === selectedUnitId) {
            const newLesson: Lesson = {
              id: Math.max(0, ...unit.lessons.map(l => l.id)) + 1,
              title: newItem.title,
              sublessons: []
            };
            return { ...unit, lessons: [...unit.lessons, newLesson] };
          }
          return unit;
        })
      });
    } else if (addType === 'sublesson' && selectedUnitId && selectedLessonId) {
      setCourse({
        ...course,
        units: course.units.map(unit => {
          if (unit.id === selectedUnitId) {
            return {
              ...unit,
              lessons: unit.lessons.map(lesson => {
                if (lesson.id === selectedLessonId) {
                  const newSublesson: Sublesson = {
                    id: Math.max(0, ...lesson.sublessons.map(s => s.id)) + 1,
                    title: newItem.title,
                    content: newItem.content || undefined,
                    video: newItem.video || null,
                    reference: (newItem.referenceBook && newItem.referencePage) ? {
                      book: newItem.referenceBook,
                      chapter: newItem.referenceChapter ? parseInt(newItem.referenceChapter) : null,
                      page: parseInt(newItem.referencePage)
                    } : null
                  };
                  return { ...lesson, sublessons: [...lesson.sublessons, newSublesson] };
                }
                return lesson;
              })
            };
          }
          return unit;
        })
      });
    }

    setNewItem({
      title: '',
      content: '',
      video: '',
      referenceBook: '',
      referenceChapter: '',
      referencePage: ''
    });
    setShowAddModal(false);
  };

  const handleEdit = () => {
    if (!newItem.title || !editingItem) {
      alert('Please enter a title');
      return;
    }

    if (editType === 'unit') {
      setCourse({
        ...course,
        units: course.units.map(unit => 
          unit.id === editingItem.id ? { ...unit, title: newItem.title } : unit
        )
      });
    } else if (editType === 'lesson' && selectedUnitId) {
      setCourse({
        ...course,
        units: course.units.map(unit => {
          if (unit.id === selectedUnitId) {
            return {
              ...unit,
              lessons: unit.lessons.map(lesson =>
                lesson.id === editingItem.id ? { ...lesson, title: newItem.title } : lesson
              )
            };
          }
          return unit;
        })
      });
    } else if (editType === 'sublesson' && selectedUnitId && selectedLessonId) {
      setCourse({
        ...course,
        units: course.units.map(unit => {
          if (unit.id === selectedUnitId) {
            return {
              ...unit,
              lessons: unit.lessons.map(lesson => {
                if (lesson.id === selectedLessonId) {
                  return {
                    ...lesson,
                    sublessons: lesson.sublessons.map(sublesson =>
                      sublesson.id === editingItem.id ? {
                        ...sublesson,
                        title: newItem.title,
                        content: newItem.content || undefined,
                        video: newItem.video || null,
                        reference: (newItem.referenceBook && newItem.referencePage) ? {
                          book: newItem.referenceBook,
                          chapter: newItem.referenceChapter ? parseInt(newItem.referenceChapter) : null,
                          page: parseInt(newItem.referencePage)
                        } : null
                      } : sublesson
                    )
                  };
                }
                return lesson;
              })
            };
          }
          return unit;
        })
      });
    }

    setNewItem({
      title: '',
      content: '',
      video: '',
      referenceBook: '',
      referenceChapter: '',
      referencePage: ''
    });
    setEditingItem(null);
    setShowEditModal(false);
  };

  const handleDeleteUnit = (unitId: number) => {
    if (confirm('Are you sure you want to delete this unit and all its contents?')) {
      setCourse({
        ...course,
        units: course.units.filter(u => u.id !== unitId)
      });
    }
  };

  const handleDeleteLesson = (unitId: number, lessonId: number) => {
    if (confirm('Are you sure you want to delete this lesson and all its contents?')) {
      setCourse({
        ...course,
        units: course.units.map(unit => {
          if (unit.id === unitId) {
            return {
              ...unit,
              lessons: unit.lessons.filter(l => l.id !== lessonId)
            };
          }
          return unit;
        })
      });
    }
  };

  const handleDeleteSublesson = (unitId: number, lessonId: number, sublessonId: number) => {
    if (confirm('Are you sure you want to delete this sublesson?')) {
      setCourse({
        ...course,
        units: course.units.map(unit => {
          if (unit.id === unitId) {
            return {
              ...unit,
              lessons: unit.lessons.map(lesson => {
                if (lesson.id === lessonId) {
                  return {
                    ...lesson,
                    sublessons: lesson.sublessons.filter(s => s.id !== sublessonId)
                  };
                }
                return lesson;
              })
            };
          }
          return unit;
        })
      });
    }
  };

  const handleViewSublesson = (sublesson: Sublesson) => {
    setViewingSublesson(sublesson);
    setShowViewModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/teacher/courses"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Courses
            </Link>

            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-gray-900">{course.title}</h1>
                <p className="text-gray-600">Taught by {course.teacher}</p>
              </div>
              <button
                onClick={() => openAddModal('unit')}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Unit
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-gray-900 mb-6">Course Structure</h2>
              
              {course.units.length > 0 ? (
                <div className="space-y-4">
                  {course.units.map((unit) => (
                    <div key={unit.id} className="border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-t-lg">
                        <button
                          onClick={() => toggleUnit(unit.id)}
                          className="flex items-center gap-3 flex-1 text-left"
                        >
                          {expandedUnits.includes(unit.id) ? (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-500" />
                          )}
                          <span className="text-gray-900">{unit.title}</span>
                        </button>
                        <div className="flex gap-2">
                          <button
                            onClick={() => openAddModal('lesson', unit.id)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Add Lesson"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => openEditModal('unit', unit)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Edit Unit"
                          >
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteUnit(unit.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Unit"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {expandedUnits.includes(unit.id) && (
                        <div className="p-4 space-y-2">
                          {unit.lessons.length > 0 ? (
                            unit.lessons.map((lesson) => (
                              <div key={lesson.id} className="border border-gray-200 rounded-lg">
                                <div className="flex items-center justify-between p-3 bg-white">
                                  <button
                                    onClick={() => toggleLesson(lesson.id)}
                                    className="flex items-center gap-2 flex-1 text-left"
                                  >
                                    {expandedLessons.includes(lesson.id) ? (
                                      <ChevronDown className="w-4 h-4 text-gray-500" />
                                    ) : (
                                      <ChevronRight className="w-4 h-4 text-gray-500" />
                                    )}
                                    <span className="text-gray-900">{lesson.title}</span>
                                  </button>
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => openAddModal('sublesson', unit.id, lesson.id)}
                                      className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                      title="Add Sublesson"
                                    >
                                      <Plus className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => openEditModal('lesson', lesson, unit.id)}
                                      className="p-1 text-green-600 hover:bg-green-50 rounded transition-colors"
                                      title="Edit Lesson"
                                    >
                                      <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleDeleteLesson(unit.id, lesson.id)}
                                      className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                                      title="Delete Lesson"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                                
                                {expandedLessons.includes(lesson.id) && lesson.sublessons.length > 0 && (
                                  <div className="px-8 py-2 space-y-1">
                                    {lesson.sublessons.map((sublesson) => (
                                      <div key={sublesson.id} className="flex items-center justify-between p-2 text-sm hover:bg-gray-50 rounded">
                                        <span className="text-gray-700">{sublesson.title}</span>
                                        <div className="flex gap-1">
                                          <button
                                            onClick={() => handleViewSublesson(sublesson)}
                                            className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                            title="View Content"
                                          >
                                            <Eye className="w-3 h-3" />
                                          </button>
                                          <button
                                            onClick={() => openEditModal('sublesson', sublesson, unit.id, lesson.id)}
                                            className="p-1 text-green-600 hover:bg-green-50 rounded transition-colors"
                                            title="Edit Sublesson"
                                          >
                                            <Edit2 className="w-3 h-3" />
                                          </button>
                                          <button
                                            onClick={() => handleDeleteSublesson(unit.id, lesson.id, sublesson.id)}
                                            className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                                            title="Delete Sublesson"
                                          >
                                            <Trash2 className="w-3 h-3" />
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-500 text-sm p-4">No lessons yet. Click + to add a lesson.</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No units yet. Click "Add Unit" to get started.</p>
              )}
            </div>
          </div>

          {/* Add Content Modal */}
          {showAddModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">
                    Add {addType.charAt(0).toUpperCase() + addType.slice(1)}
                  </h2>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Title *</label>
                    <input
                      type="text"
                      value={newItem.title}
                      onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter title"
                    />
                  </div>

                  {addType === 'sublesson' && (
                    <>
                      <div>
                        <label className="block text-gray-700 mb-2">Lesson Content (Optional)</label>
                        <textarea
                          value={newItem.content}
                          onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                          className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                          placeholder="Enter lesson notes and content"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Video URL (Optional)</label>
                        <input
                          type="text"
                          value={newItem.video}
                          onChange={(e) => setNewItem({ ...newItem, video: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          placeholder="Enter YouTube embed URL"
                        />
                      </div>
                      <div className="border-t pt-4">
                        <h3 className="text-gray-900 mb-3">Reference Material (Optional)</h3>
                        <div className="space-y-3">
                          <input
                            type="text"
                            value={newItem.referenceBook}
                            onChange={(e) => setNewItem({ ...newItem, referenceBook: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            placeholder="Book title"
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="text"
                              value={newItem.referenceChapter}
                              onChange={(e) => setNewItem({ ...newItem, referenceChapter: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                              placeholder="Chapter (optional)"
                            />
                            <input
                              type="text"
                              value={newItem.referencePage}
                              onChange={(e) => setNewItem({ ...newItem, referencePage: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                              placeholder="Page"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAdd}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add {addType.charAt(0).toUpperCase() + addType.slice(1)}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Edit Content Modal */}
          {showEditModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">
                    Edit {editType.charAt(0).toUpperCase() + editType.slice(1)}
                  </h2>
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingItem(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Title *</label>
                    <input
                      type="text"
                      value={newItem.title}
                      onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter title"
                    />
                  </div>

                  {editType === 'sublesson' && (
                    <>
                      <div>
                        <label className="block text-gray-700 mb-2">Lesson Content (Optional)</label>
                        <textarea
                          value={newItem.content}
                          onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                          className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                          placeholder="Enter lesson notes and content"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Video URL (Optional)</label>
                        <input
                          type="text"
                          value={newItem.video}
                          onChange={(e) => setNewItem({ ...newItem, video: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          placeholder="Enter YouTube embed URL"
                        />
                      </div>
                      <div className="border-t pt-4">
                        <h3 className="text-gray-900 mb-3">Reference Material (Optional)</h3>
                        <div className="space-y-3">
                          <input
                            type="text"
                            value={newItem.referenceBook}
                            onChange={(e) => setNewItem({ ...newItem, referenceBook: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            placeholder="Book title"
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="text"
                              value={newItem.referenceChapter}
                              onChange={(e) => setNewItem({ ...newItem, referenceChapter: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                              placeholder="Chapter (optional)"
                            />
                            <input
                              type="text"
                              value={newItem.referencePage}
                              onChange={(e) => setNewItem({ ...newItem, referencePage: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                              placeholder="Page"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingItem(null);
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEdit}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Update {editType.charAt(0).toUpperCase() + editType.slice(1)}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* View Sublesson Modal */}
          {showViewModal && viewingSublesson && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">{viewingSublesson.title}</h2>
                  <button
                    onClick={() => {
                      setShowViewModal(false);
                      setViewingSublesson(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {viewingSublesson.content && (
                    <div>
                      <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                        <Book className="w-5 h-5 text-blue-600" />
                        Lesson Content
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 whitespace-pre-wrap">{viewingSublesson.content}</p>
                      </div>
                    </div>
                  )}

                  {viewingSublesson.video && (
                    <div>
                      <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                        <Video className="w-5 h-5 text-red-600" />
                        Video
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <a 
                          href={viewingSublesson.video} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 underline"
                        >
                          {viewingSublesson.video}
                        </a>
                      </div>
                    </div>
                  )}

                  {viewingSublesson.reference && (
                    <div>
                      <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                        <Book className="w-5 h-5 text-green-600" />
                        Reference Material
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <p className="text-gray-700">
                          <span className="font-medium">Book:</span> {viewingSublesson.reference.book}
                        </p>
                        {viewingSublesson.reference.chapter && (
                          <p className="text-gray-700">
                            <span className="font-medium">Chapter:</span> {viewingSublesson.reference.chapter}
                          </p>
                        )}
                        <p className="text-gray-700">
                          <span className="font-medium">Page:</span> {viewingSublesson.reference.page}
                        </p>
                      </div>
                    </div>
                  )}

                  {!viewingSublesson.content && !viewingSublesson.video && !viewingSublesson.reference && (
                    <p className="text-gray-500 text-center py-8">No content available for this sublesson.</p>
                  )}
                </div>
                
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setShowViewModal(false);
                      setViewingSublesson(null);
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
