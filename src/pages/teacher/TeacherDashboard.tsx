import { useState } from 'react';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, FileText, MessageSquare, Users } from 'lucide-react';

export default function TeacherDashboard() {
  const { user } = useAuth();
  const [selectedClass, setSelectedClass] = useState('class-a');

  const classes = [
    { id: 'class-a', name: 'Section A - Advanced Mathematics' },
    { id: 'class-b', name: 'Section B - Basic Calculus' }
  ];

  const classData = {
    'class-a': {
      stats: [
        { label: 'Active Classes', value: '2', icon: BookOpen, color: 'blue' },
        { label: 'Total Students', value: '34', icon: Users, color: 'green' },
        { label: 'Pending Assignments', value: '5', icon: FileText, color: 'orange' },
        { label: 'Unread Messages', value: '8', icon: MessageSquare, color: 'purple' },
      ],
      recentActivity: [
        { student: 'John Smith', assignment: 'Calculus Problem Set', time: '2 hours ago' },
        { student: 'Sarah Johnson', assignment: 'Derivatives Worksheet', time: '4 hours ago' },
        { student: 'Michael Chen', assignment: 'Limits Quiz', time: '1 day ago' }
      ]
    },
    'class-b': {
      stats: [
        { label: 'Active Classes', value: '2', icon: BookOpen, color: 'blue' },
        { label: 'Total Students', value: '28', icon: Users, color: 'green' },
        { label: 'Pending Assignments', value: '7', icon: FileText, color: 'orange' },
        { label: 'Unread Messages', value: '4', icon: MessageSquare, color: 'purple' },
      ],
      recentActivity: [
        { student: 'Emma Davis', assignment: 'Basic Functions Test', time: '1 hour ago' },
        { student: 'James Wilson', assignment: 'Algebra Review', time: '3 hours ago' },
        { student: 'Olivia Brown', assignment: 'Graphing Exercise', time: '6 hours ago' }
      ]
    }
  };

  const currentData = classData[selectedClass as keyof typeof classData];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-gray-900 mb-2">Welcome back, {user?.name}!</h1>
                <p className="text-gray-600">Here's an overview of your classes.</p>
              </div>
              
              {/* Class Selector */}
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {currentData.stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                    <p className="text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-gray-900">{stat.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Recent Submissions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-gray-900 mb-6">Recent Submissions - {classes.find(c => c.id === selectedClass)?.name}</h2>
              <div className="space-y-4">
                {currentData.recentActivity.map((submission, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div>
                      <p className="text-gray-900">{submission.student}</p>
                      <p className="text-gray-600 text-sm">{submission.assignment}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">{submission.time}</p>
                      <button className="text-blue-600 hover:text-blue-700 text-sm">Review</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
