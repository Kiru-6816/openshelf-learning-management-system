import { useState } from 'react';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Bell, Lock } from 'lucide-react';

export default function TeacherSettings() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState({
    submissions: true,
    messages: true,
    announcements: false
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-gray-900 mb-8">Settings & Profile</h1>

            {/* Profile Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-gray-900 mb-6">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.name}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Update Profile
                </button>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-gray-900 mb-6 flex items-center gap-2">
                <Bell className="w-6 h-6" />
                Notification Preferences
              </h2>
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <label key={key} className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700 capitalize">{key}</span>
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => setNotifications({ ...notifications, [key]: !value })}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-gray-900 mb-6 flex items-center gap-2">
                <Lock className="w-6 h-6" />
                Change Password
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
