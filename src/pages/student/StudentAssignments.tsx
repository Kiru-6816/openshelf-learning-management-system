import { useState } from 'react';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { Calendar, FileText, Upload, Save } from 'lucide-react';

export default function StudentAssignments() {
  const [selectedAssignment, setSelectedAssignment] = useState<number | null>(null);
  const [submissions, setSubmissions] = useState<{ [key: number]: { text: string; file: string | null } }>({});

  const assignments = [
    {
      id: 1,
      title: 'Calculus Problem Set',
      course: 'Advanced Mathematics',
      dueDate: '2025-11-28',
      description: 'Complete problems 1-15 from Chapter 5. Show all work and provide detailed explanations for each solution.',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Lab Report: Motion and Forces',
      course: 'Physics',
      dueDate: '2025-11-25',
      description: 'Write a comprehensive lab report based on our recent experiment. Include hypothesis, methodology, results, and conclusion.',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Essay: Shakespeare\'s Hamlet',
      course: 'English Literature',
      dueDate: '2025-11-30',
      description: 'Write a 5-page essay analyzing the theme of revenge in Hamlet. Use at least 5 scholarly sources.',
      status: 'draft'
    }
  ];

  const handleTextChange = (assignmentId: number, text: string) => {
    setSubmissions(prev => ({
      ...prev,
      [assignmentId]: { ...prev[assignmentId], text, file: prev[assignmentId]?.file || null }
    }));
  };

  const handleSaveDraft = (assignmentId: number) => {
    alert('Draft saved successfully!');
  };

  const handleSubmit = (assignmentId: number) => {
    alert('Assignment submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-900 mb-8">Assignments</h1>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Assignment List */}
              <div className="lg:col-span-1 space-y-4">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    onClick={() => setSelectedAssignment(assignment.id)}
                    className={`bg-white rounded-xl shadow-sm p-4 cursor-pointer transition-all ${
                      selectedAssignment === assignment.id ? 'ring-2 ring-blue-600' : 'hover:shadow-md'
                    }`}
                  >
                    <h3 className="text-gray-900 mb-2">{assignment.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{assignment.course}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Due: {assignment.dueDate}</span>
                    </div>
                    {assignment.status === 'draft' && (
                      <span className="inline-block mt-2 px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                        Draft Saved
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Assignment Details */}
              <div className="lg:col-span-2">
                {selectedAssignment ? (
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    {(() => {
                      const assignment = assignments.find(a => a.id === selectedAssignment)!;
                      return (
                        <>
                          <h2 className="text-gray-900 mb-4">{assignment.title}</h2>
                          <div className="mb-6 pb-6 border-b">
                            <p className="text-gray-600 mb-2">{assignment.course}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>Due: {assignment.dueDate}</span>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h3 className="text-gray-900 mb-2">Description</h3>
                            <p className="text-gray-700">{assignment.description}</p>
                          </div>

                          <div className="mb-6">
                            <h3 className="text-gray-900 mb-2">Your Submission</h3>
                            <textarea
                              value={submissions[assignment.id]?.text || ''}
                              onChange={(e) => handleTextChange(assignment.id, e.target.value)}
                              placeholder="Type your answer here..."
                              className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                            />
                          </div>

                          <div className="mb-6">
                            <h3 className="text-gray-900 mb-2">Attach Files</h3>
                            <label className="flex items-center justify-center gap-2 px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer">
                              <Upload className="w-5 h-5 text-gray-400" />
                              <span className="text-gray-600">Click to upload files</span>
                              <input type="file" className="hidden" />
                            </label>
                          </div>

                          <div className="flex gap-4">
                            <button
                              onClick={() => handleSaveDraft(assignment.id)}
                              className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <Save className="w-5 h-5" />
                              Save Draft
                            </button>
                            <button
                              onClick={() => handleSubmit(assignment.id)}
                              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              <FileText className="w-5 h-5" />
                              Submit Assignment
                            </button>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-gray-900 mb-2">Select an Assignment</h3>
                    <p className="text-gray-600">Choose an assignment from the list to view details and submit</p>
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
