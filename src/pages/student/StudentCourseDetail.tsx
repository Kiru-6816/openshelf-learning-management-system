import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { ChevronRight, ChevronDown, PlayCircle, FileText, BookOpen, ArrowLeft } from 'lucide-react';
import { coursesData } from '../../data/coursesData';

export default function StudentCourseDetail() {
  const { courseId } = useParams();
  const [expandedUnits, setExpandedUnits] = useState<number[]>([1]);
  const [expandedLessons, setExpandedLessons] = useState<number[]>([1]);
  const [selectedSublesson, setSelectedSublesson] = useState<any>(null);

  const course = coursesData[courseId as keyof typeof coursesData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <DashboardNavbar />
        <div className="flex">
          <DashboardSidebar role="student" />
          <main className="flex-1 p-8">
            <div className="max-w-7xl mx-auto">
              <p className="text-gray-600">Course not found</p>
              <Link to="/student/courses" className="text-blue-600 hover:text-blue-700">
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

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/student/courses"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Courses
            </Link>

            <div className="mb-6">
              <h1 className="text-gray-900 mb-2">{course.title}</h1>
              <p className="text-gray-600 mb-1">Taught by {course.teacher}</p>
              <p className="text-gray-600">{course.description}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Course Structure */}
              <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6 h-fit sticky top-8">
                <h2 className="text-gray-900 mb-4">Course Content</h2>
                <div className="space-y-2">
                  {course.units.map((unit) => (
                    <div key={unit.id}>
                      <button
                        onClick={() => toggleUnit(unit.id)}
                        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                      >
                        <span className="text-gray-900">{unit.title}</span>
                        {expandedUnits.includes(unit.id) ? (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      {expandedUnits.includes(unit.id) && (
                        <div className="ml-4 space-y-1 mt-1">
                          {unit.lessons.map((lesson) => (
                            <div key={lesson.id}>
                              <button
                                onClick={() => toggleLesson(lesson.id)}
                                className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors text-left"
                              >
                                <span className="text-gray-700 text-sm">{lesson.title}</span>
                                {expandedLessons.includes(lesson.id) ? (
                                  <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                ) : (
                                  <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                )}
                              </button>
                              {expandedLessons.includes(lesson.id) && (
                                <div className="ml-4 space-y-1 mt-1">
                                  {lesson.sublessons.map((sublesson) => (
                                    <button
                                      key={sublesson.id}
                                      onClick={() => setSelectedSublesson(sublesson)}
                                      className={`w-full text-left p-2 rounded-lg transition-colors text-sm ${
                                        selectedSublesson?.id === sublesson.id
                                          ? 'bg-blue-50 text-blue-600'
                                          : 'text-gray-600 hover:bg-gray-50'
                                      }`}
                                    >
                                      {sublesson.title}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lesson Content */}
              <div className="lg:col-span-2 space-y-6">
                {selectedSublesson ? (
                  <>
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h2 className="text-gray-900 mb-6">{selectedSublesson.title}</h2>
                      
                      {selectedSublesson.content && (
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-4">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <h3 className="text-gray-900">Lesson Notes</h3>
                          </div>
                          <div className="prose max-w-none">
                            <pre className="whitespace-pre-wrap text-gray-700 bg-gray-50 p-4 rounded-lg leading-relaxed">
{selectedSublesson.content}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>

                    {selectedSublesson.video && (
                      <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <PlayCircle className="w-5 h-5 text-blue-600" />
                          <h3 className="text-gray-900">Video Lesson</h3>
                        </div>
                        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                          <iframe
                            src={selectedSublesson.video}
                            className="w-full h-full"
                            allowFullScreen
                            title={selectedSublesson.title}
                          />
                        </div>
                      </div>
                    )}

                    {selectedSublesson.reference && (
                      <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                          <h3 className="text-gray-900">Reference Material</h3>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-gray-900 mb-2">{selectedSublesson.reference.book}</p>
                          {selectedSublesson.reference.chapter && (
                            <p className="text-gray-600">
                              Chapter {selectedSublesson.reference.chapter}, Page {selectedSublesson.reference.page}
                            </p>
                          )}
                          {!selectedSublesson.reference.chapter && (
                            <p className="text-gray-600">
                              Page {selectedSublesson.reference.page}
                            </p>
                          )}
                          <Link 
                            to="/library/search"
                            className="inline-block mt-3 text-blue-600 hover:text-blue-700"
                          >
                            View in Digital Library →
                          </Link>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                    <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-gray-900 mb-2">Select a Lesson</h3>
                    <p className="text-gray-600">Choose a sublesson from the course content to view materials</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
