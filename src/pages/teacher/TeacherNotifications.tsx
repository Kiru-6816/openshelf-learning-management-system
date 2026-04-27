import { useState } from 'react';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

interface Notification {
  id: number;
  type: string;
  title: string;
  message: string;
  date: string;
}

export default function TeacherNotifications() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingNotification, setEditingNotification] = useState<Notification | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'announcement',
      title: 'Class Cancelled Tomorrow',
      message: 'Due to unforeseen circumstances, tomorrow\'s lab session is cancelled. It will be rescheduled to next week.',
      date: '2025-11-21'
    },
    {
      id: 2,
      type: 'assignment',
      title: 'New Assignment Posted',
      message: 'Calculus Problem Set has been assigned. Please complete problems 1-15 from Chapter 5. Due in 7 days.',
      date: '2025-11-20'
    }
  ]);

  const [newNotification, setNewNotification] = useState({
    type: 'announcement',
    title: '',
    message: ''
  });

  const handleCreate = () => {
    if (!newNotification.title || !newNotification.message) {
      alert('Please fill in all fields');
      return;
    }

    setNotifications([
      {
        id: notifications.length + 1,
        ...newNotification,
        date: new Date().toISOString().split('T')[0]
      },
      ...notifications
    ]);
    setNewNotification({ type: 'announcement', title: '', message: '' });
    setShowCreateModal(false);
  };

  const handleEdit = (notification: Notification) => {
    setEditingNotification(notification);
    setShowEditModal(true);
  };

  const handleUpdate = () => {
    if (!editingNotification) return;

    setNotifications(notifications.map(n =>
      n.id === editingNotification.id ? editingNotification : n
    ));
    setShowEditModal(false);
    setEditingNotification(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this notification?')) {
      setNotifications(notifications.filter(n => n.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-gray-900">Manage Notifications</h1>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Create Notification
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-gray-900">{notification.title}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs capitalize">
                            {notification.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{notification.message}</p>
                        <p className="text-gray-500 text-sm">{notification.date}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(notification)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(notification.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-12 text-center">
                  <p className="text-gray-500">No notifications yet. Create one to get started.</p>
                </div>
              )}
            </div>
          </div>

          {/* Create Modal */}
          {showCreateModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-2xl w-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Create Notification</h2>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Type</label>
                    <select
                      value={newNotification.type}
                      onChange={(e) => setNewNotification({ ...newNotification, type: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="announcement">Announcement</option>
                      <option value="assignment">Assignment</option>
                      <option value="grade">Grade Update</option>
                      <option value="reminder">Reminder</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={newNotification.title}
                      onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter notification title"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      value={newNotification.message}
                      onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                      className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                      placeholder="Enter notification message"
                    />
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
                    Create
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Edit Modal */}
          {showEditModal && editingNotification && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-2xl w-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Edit Notification</h2>
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingNotification(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Type</label>
                    <select
                      value={editingNotification.type}
                      onChange={(e) => setEditingNotification({ ...editingNotification, type: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="announcement">Announcement</option>
                      <option value="assignment">Assignment</option>
                      <option value="grade">Grade Update</option>
                      <option value="reminder">Reminder</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={editingNotification.title}
                      onChange={(e) => setEditingNotification({ ...editingNotification, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter notification title"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      value={editingNotification.message}
                      onChange={(e) => setEditingNotification({ ...editingNotification, message: e.target.value })}
                      className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                      placeholder="Enter notification message"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingNotification(null);
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Update
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
