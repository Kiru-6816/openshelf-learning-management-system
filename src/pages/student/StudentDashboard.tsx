import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, FileText, MessageSquare, TrendingUp } from 'lucide-react';

export default function StudentDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Active Courses', value: '4', icon: BookOpen, color: 'blue' },
    { label: 'Pending Assignments', value: '3', icon: FileText, color: 'orange' },
    { label: 'Unread Messages', value: '12', icon: MessageSquare, color: 'green' },
    { label: 'Overall Progress', value: '78%', icon: TrendingUp, color: 'purple' },
  ];

  const recentActivity = [
    { title: 'New assignment posted in Mathematics', time: '2 hours ago', type: 'assignment' },
    { title: 'Grade updated for Physics Quiz', time: '5 hours ago', type: 'grade' },
    { title: 'New announcement in Chemistry', time: '1 day ago', type: 'announcement' },
    { title: 'Deadline reminder: English Essay', time: '2 days ago', type: 'reminder' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-900 mb-2">Welcome back, {user?.name}!</h1>
            <p className="text-gray-600 mb-8">Here's what's happening with your courses today.</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => {
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

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'assignment' ? 'bg-orange-500' :
                      activity.type === 'grade' ? 'bg-green-500' :
                      activity.type === 'announcement' ? 'bg-blue-500' :
                      'bg-purple-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-gray-900">{activity.title}</p>
                      <p className="text-gray-500 text-sm">{activity.time}</p>
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
