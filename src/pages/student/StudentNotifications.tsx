import { useState } from 'react';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { FileText, Bell, Award, Clock, X, ArrowLeft } from 'lucide-react';

export default function StudentNotifications() {
  const [selectedNotification, setSelectedNotification] = useState<number | null>(null);
  const [readNotifications, setReadNotifications] = useState<number[]>([3]); // Some notifications already read

  const notifications = [
    {
      id: 1,
      type: 'assignment',
      title: 'New Assignment: Calculus Problem Set',
      subject: 'Mathematics',
      description: 'Complete problems 1-15 from Chapter 5. Due in 3 days.',
      fullMessage: 'Hello Students,\n\nI have posted a new assignment for this week. Please complete problems 1-15 from Chapter 5 of your textbook. This assignment covers limits and continuity, which we discussed in class this week.\n\nMake sure to:\n- Show all your work\n- Explain your reasoning for each problem\n- Submit by the due date\n\nThe assignment is due in 3 days. If you have any questions, please reach out during office hours or post in the class chatroom.\n\nGood luck!\nDr. Johnson',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      type: 'grade',
      title: 'Grade Updated: Physics Midterm',
      subject: 'Physics',
      description: 'Your grade for the midterm exam has been posted: 87/100',
      fullMessage: 'Dear Student,\n\nYour grade for the Physics Midterm Exam has been posted.\n\nScore: 87/100 (87%)\nGrade: B+\n\nYou performed well overall. Here are some areas for improvement:\n- Review the concepts of momentum and collision\n- Practice more problems on energy conservation\n\nDetailed feedback is available in the assignment portal. Great job!\n\nBest regards,\nProf. Chen',
      time: '5 hours ago',
      unread: true
    },
    {
      id: 3,
      type: 'announcement',
      title: 'Class Cancelled Tomorrow',
      subject: 'Chemistry',
      description: 'Due to unforeseen circumstances, tomorrow\'s lab session is cancelled.',
      fullMessage: 'Dear Students,\n\nI wanted to inform you that tomorrow\'s Chemistry lab session (November 22, 2025) has been cancelled due to unforeseen circumstances.\n\nThe lab will be rescheduled to next week. I will send out an updated schedule by end of day today.\n\nPlease use this time to review the lab manual for the upcoming experiment on Chemical Equilibrium. We will proceed with the lab next week as planned.\n\nApologies for any inconvenience.\n\nDr. Wilson',
      time: '1 day ago',
      unread: false
    },
    {
      id: 4,
      type: 'deadline',
      title: 'Reminder: English Essay Due Soon',
      subject: 'English Literature',
      description: 'Your essay on Shakespeare\'s Hamlet is due in 2 days.',
      fullMessage: 'Hello Class,\n\nThis is a friendly reminder that your essay on Shakespeare\'s Hamlet is due in 2 days (November 23, 2025 at 11:59 PM).\n\nEssay Requirements:\n- 5 pages minimum\n- Topic: The theme of revenge in Hamlet\n- At least 5 scholarly sources\n- MLA format\n\nMake sure to:\n- Proofread your work\n- Check your citations\n- Submit through the assignment portal\n\nLate submissions will be penalized 10% per day.\n\nProf. Brown',
      time: '2 days ago',
      unread: false
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'assignment':
        return <FileText className="w-5 h-5 text-orange-600" />;
      case 'grade':
        return <Award className="w-5 h-5 text-green-600" />;
      case 'announcement':
        return <Bell className="w-5 h-5 text-blue-600" />;
      case 'deadline':
        return <Clock className="w-5 h-5 text-purple-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const selectedNotif = notifications.find(n => n.id === selectedNotification);

  const handleOpenNotification = (id: number) => {
    setSelectedNotification(id);
    if (!readNotifications.includes(id)) {
      setReadNotifications([...readNotifications, id]);
    }
  };

  const isUnread = (id: number) => {
    return !readNotifications.includes(id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            {selectedNotif ? (
              // Full Message View
              <div>
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Notifications
                </button>

                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b">
                    <div className="flex-shrink-0 mt-1">
                      {getIcon(selectedNotif.type)}
                    </div>
                    <div className="flex-1">
                      <h1 className="text-gray-900 mb-2">{selectedNotif.title}</h1>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                          {selectedNotif.subject}
                        </span>
                        <span>{selectedNotif.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {selectedNotif.fullMessage}
                    </pre>
                  </div>
                </div>
              </div>
            ) : (
              // Notifications List
              <div>
                <h1 className="text-gray-900 mb-8">Notifications</h1>

                <div className="bg-white rounded-xl shadow-sm">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => handleOpenNotification(notification.id)}
                      className={`p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer ${
                        isUnread(notification.id) ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          {getIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-gray-900 mb-1 flex items-center gap-2">
                                {notification.title}
                                {isUnread(notification.id) && (
                                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                )}
                              </h3>
                              <span className="text-blue-600 text-sm">
                                {notification.subject}
                              </span>
                            </div>
                            <span className="text-gray-500 text-sm whitespace-nowrap ml-4">
                              {notification.time}
                            </span>
                          </div>
                          <p className="text-gray-600">
                            {notification.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}