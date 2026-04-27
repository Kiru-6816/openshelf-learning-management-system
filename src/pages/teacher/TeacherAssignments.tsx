import { useState } from 'react';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { Plus, Edit2, Trash2, Calendar, Users, X, FileText, Award, Download, Eye } from 'lucide-react';

interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  description: string;
  submissions: number;
  totalStudents: number;
}

interface Submission {
  id: number;
  studentName: string;
  submittedAt: string;
  status: string;
  grade: string | null;
  fileUrl?: string;
  feedback?: string;
}

export default function TeacherAssignments() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSubmissionsModal, setShowSubmissionsModal] = useState(false);
  const [showSubmissionDetailModal, setShowSubmissionDetailModal] = useState(false);
  const [selectedAssignmentForSubmissions, setSelectedAssignmentForSubmissions] = useState<Assignment | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [editingAssignment, setEditingAssignment] = useState<Assignment | null>(null);
  
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      title: 'Calculus Problem Set',
      course: 'Advanced Mathematics - Section A',
      dueDate: '2025-11-28',
      description: 'Complete problems 1-15 from Chapter 5. Show all work and provide detailed explanations for each solution.',
      submissions: 12,
      totalStudents: 34
    },
    {
      id: 2,
      title: 'Lab Report: Motion and Forces',
      course: 'Advanced Mathematics - Section A',
      dueDate: '2025-11-25',
      description: 'Write a comprehensive lab report based on our recent experiment. Include hypothesis, methodology, results, and conclusion.',
      submissions: 28,
      totalStudents: 34
    }
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    course: 'Advanced Mathematics - Section A'
  });

  // Mock student submissions
  const [studentSubmissions, setStudentSubmissions] = useState<Submission[]>([
    { 
      id: 1, 
      studentName: 'John Smith', 
      submittedAt: '2025-11-20 10:30 AM', 
      status: 'submitted', 
      grade: null,
      fileUrl: 'submission_john_smith.pdf',
      feedback: ''
    },
    { 
      id: 2, 
      studentName: 'Sarah Johnson', 
      submittedAt: '2025-11-20 02:15 PM', 
      status: 'submitted', 
      grade: '95',
      fileUrl: 'submission_sarah_johnson.pdf',
      feedback: 'Excellent work! Your analysis was thorough and well-structured.'
    },
    { 
      id: 3, 
      studentName: 'Michael Chen', 
      submittedAt: '2025-11-21 09:00 AM', 
      status: 'submitted', 
      grade: '87',
      fileUrl: 'submission_michael_chen.pdf',
      feedback: 'Good effort. Pay more attention to the methodology section.'
    },
    { 
      id: 4, 
      studentName: 'Emma Davis', 
      submittedAt: '2025-11-19 04:20 PM', 
      status: 'submitted', 
      grade: '92',
      fileUrl: 'submission_emma_davis.pdf',
      feedback: 'Very good work! Minor improvements needed in the conclusion.'
    },
    { 
      id: 5, 
      studentName: 'James Wilson', 
      submittedAt: '2025-11-21 11:45 AM', 
      status: 'submitted', 
      grade: null,
      fileUrl: 'submission_james_wilson.pdf',
      feedback: ''
    },
  ]);

  const handleCreate = () => {
    if (!newAssignment.title || !newAssignment.description || !newAssignment.dueDate) {
      alert('Please fill in all required fields');
      return;
    }

    setAssignments([
      {
        id: assignments.length + 1,
        ...newAssignment,
        submissions: 0,
        totalStudents: 34
      },
      ...assignments
    ]);
    setNewAssignment({ title: '', description: '', dueDate: '', course: 'Advanced Mathematics - Section A' });
    setShowCreateModal(false);
  };

  const handleEdit = (assignment: Assignment) => {
    setEditingAssignment(assignment);
    setShowEditModal(true);
  };

  const handleUpdate = () => {
    if (!editingAssignment) return;

    if (!editingAssignment.title || !editingAssignment.description || !editingAssignment.dueDate) {
      alert('Please fill in all required fields');
      return;
    }

    setAssignments(assignments.map(a =>
      a.id === editingAssignment.id ? editingAssignment : a
    ));
    setShowEditModal(false);
    setEditingAssignment(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this assignment? This action cannot be undone.')) {
      setAssignments(assignments.filter(a => a.id !== id));
    }
  };

  const getSubmissionProgress = (assignment: Assignment) => {
    const percentage = (assignment.submissions / assignment.totalStudents) * 100;
    return Math.round(percentage);
  };

  const handleViewSubmission = (submission: Submission) => {
    setSelectedSubmission(submission);
    setShowSubmissionDetailModal(true);
  };

  const handleGradeSubmission = (submissionId: number, grade: string, feedback: string) => {
    setStudentSubmissions(prev => prev.map(sub => 
      sub.id === submissionId ? { ...sub, grade, feedback } : sub
    ));
  };

  const handleQuickGrade = (submissionId: number) => {
    const grade = prompt('Enter grade (0-100):');
    if (grade && !isNaN(Number(grade)) && Number(grade) >= 0 && Number(grade) <= 100) {
      setStudentSubmissions(prev => prev.map(sub => 
        sub.id === submissionId ? { ...sub, grade } : sub
      ));
    } else if (grade) {
      alert('Please enter a valid grade between 0 and 100');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-gray-900">Manage Assignments</h1>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Create Assignment
              </button>
            </div>

            {assignments.length > 0 ? (
              <div className="grid gap-6">
                {assignments.map((assignment) => {
                  const progress = getSubmissionProgress(assignment);
                  const isOverdue = new Date(assignment.dueDate) < new Date();
                  
                  return (
                    <div key={assignment.id} className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-gray-900">{assignment.title}</h3>
                            {isOverdue && (
                              <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                                Overdue
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{assignment.course}</p>
                          <p className="text-gray-700 mb-4">{assignment.description}</p>
                          
                          <div className="flex items-center gap-6 text-sm mb-4">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>Due: {assignment.dueDate}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>
                                {assignment.submissions}/{assignment.totalStudents} submitted ({progress}%)
                              </span>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div
                              className={`h-2 rounded-full ${
                                progress === 100 ? 'bg-green-600' : 
                                progress >= 50 ? 'bg-blue-600' : 
                                'bg-orange-600'
                              }`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>

                          <button
                            onClick={() => {
                              setSelectedAssignmentForSubmissions(assignment);
                              setShowSubmissionsModal(true);
                            }}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            View Submissions ({assignment.submissions})
                          </button>
                        </div>
                        
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEdit(assignment)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit Assignment"
                          >
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(assignment.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Assignment"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <p className="text-gray-500 mb-4">No assignments yet.</p>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Create your first assignment
                </button>
              </div>
            )}
          </div>

          {/* Create Modal */}
          {showCreateModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-2xl w-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Create Assignment</h2>
                  <button
                    onClick={() => setShowCreateModal(false)}
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
                      value={newAssignment.title}
                      onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter assignment title"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Description *</label>
                    <textarea
                      value={newAssignment.description}
                      onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                      className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                      placeholder="Enter assignment description and instructions"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Due Date *</label>
                    <input
                      type="date"
                      value={newAssignment.dueDate}
                      onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Course</label>
                    <select
                      value={newAssignment.course}
                      onChange={(e) => setNewAssignment({ ...newAssignment, course: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="Advanced Mathematics - Section A">Advanced Mathematics - Section A</option>
                      <option value="Basic Calculus - Section B">Basic Calculus - Section B</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreate}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create Assignment
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Edit Modal */}
          {showEditModal && editingAssignment && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-2xl w-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Edit Assignment</h2>
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingAssignment(null);
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
                      value={editingAssignment.title}
                      onChange={(e) => setEditingAssignment({ ...editingAssignment, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter assignment title"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Description *</label>
                    <textarea
                      value={editingAssignment.description}
                      onChange={(e) => setEditingAssignment({ ...editingAssignment, description: e.target.value })}
                      className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                      placeholder="Enter assignment description and instructions"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Due Date *</label>
                    <input
                      type="date"
                      value={editingAssignment.dueDate}
                      onChange={(e) => setEditingAssignment({ ...editingAssignment, dueDate: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingAssignment(null);
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Update Assignment
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Submissions Modal */}
          {showSubmissionsModal && selectedAssignmentForSubmissions && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Submissions for {selectedAssignmentForSubmissions.title}</h2>
                  <button
                    onClick={() => {
                      setShowSubmissionsModal(false);
                      setSelectedAssignmentForSubmissions(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700">
                    Submissions: {selectedAssignmentForSubmissions.submissions}/{selectedAssignmentForSubmissions.totalStudents}
                    <span className="ml-4 text-gray-600">
                      ({Math.round((selectedAssignmentForSubmissions.submissions / selectedAssignmentForSubmissions.totalStudents) * 100)}% completed)
                    </span>
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 border border-gray-300 text-left">Student Name</th>
                        <th className="px-4 py-3 border border-gray-300 text-left">Submitted At</th>
                        <th className="px-4 py-3 border border-gray-300 text-center">Status</th>
                        <th className="px-4 py-3 border border-gray-300 text-center">Grade</th>
                        <th className="px-4 py-3 border border-gray-300 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentSubmissions.map(submission => (
                        <tr key={submission.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 border border-gray-300">{submission.studentName}</td>
                          <td className="px-4 py-3 border border-gray-300">{submission.submittedAt}</td>
                          <td className="px-4 py-3 border border-gray-300 text-center">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                              {submission.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 border border-gray-300 text-center">
                            {submission.grade ? (
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded">
                                <Award className="w-3 h-3" />
                                {submission.grade}
                              </span>
                            ) : (
                              <span className="text-gray-500">Not graded</span>
                            )}
                          </td>
                          <td className="px-4 py-3 border border-gray-300">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleViewSubmission(submission)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                title="View Submission"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleQuickGrade(submission.id)}
                                className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                                title="Grade"
                              >
                                <Award className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setShowSubmissionsModal(false);
                      setSelectedAssignmentForSubmissions(null);
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Submission Detail Modal */}
          {showSubmissionDetailModal && selectedSubmission && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Submission by {selectedSubmission.studentName}</h2>
                  <button
                    onClick={() => {
                      setShowSubmissionDetailModal(false);
                      setSelectedSubmission(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Submission Info */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Student</p>
                      <p className="text-gray-900">{selectedSubmission.studentName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Submitted At</p>
                      <p className="text-gray-900">{selectedSubmission.submittedAt}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Status</p>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                        {selectedSubmission.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Current Grade</p>
                      <p className="text-gray-900">{selectedSubmission.grade || 'Not graded'}</p>
                    </div>
                  </div>

                  {/* File Preview */}
                  <div>
                    <h3 className="text-gray-900 mb-3">Submitted File</h3>
                    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="w-8 h-8 text-blue-600" />
                        <div>
                          <p className="text-gray-900">{selectedSubmission.fileUrl}</p>
                          <p className="text-sm text-gray-600">PDF Document</p>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Download className="w-4 h-4" />
                        Download Submission
                      </button>
                    </div>
                  </div>

                  {/* Grading Section */}
                  <div>
                    <h3 className="text-gray-900 mb-3">Grading</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Grade (0-100)</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={selectedSubmission.grade || ''}
                          onChange={(e) => {
                            const newGrade = e.target.value;
                            setSelectedSubmission({ ...selectedSubmission, grade: newGrade });
                          }}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          placeholder="Enter grade"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Feedback</label>
                        <textarea
                          value={selectedSubmission.feedback || ''}
                          onChange={(e) => {
                            setSelectedSubmission({ ...selectedSubmission, feedback: e.target.value });
                          }}
                          className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                          placeholder="Provide feedback to the student..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Previous Feedback (if exists) */}
                  {selectedSubmission.feedback && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="text-gray-900 mb-2">Previous Feedback</h3>
                      <p className="text-gray-700">{selectedSubmission.feedback}</p>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setShowSubmissionDetailModal(false);
                      setSelectedSubmission(null);
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (selectedSubmission.grade) {
                        handleGradeSubmission(
                          selectedSubmission.id, 
                          selectedSubmission.grade, 
                          selectedSubmission.feedback || ''
                        );
                        setShowSubmissionDetailModal(false);
                        setSelectedSubmission(null);
                      } else {
                        alert('Please enter a grade');
                      }
                    }}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Save Grade & Feedback
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
