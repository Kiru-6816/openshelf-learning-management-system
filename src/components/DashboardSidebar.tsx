import { Link, useLocation } from 'react-router-dom';
import { Home, Bell, BookOpen, FileText, MessageSquare, Settings } from 'lucide-react';

interface SidebarProps {
  role: 'student' | 'teacher';
}

export default function DashboardSidebar({ role }: SidebarProps) {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Home', path: `/${role}/dashboard` },
    { icon: Bell, label: 'Notification', path: `/${role}/notifications` },
    { icon: BookOpen, label: 'Course', path: `/${role}/courses` },
    { icon: FileText, label: 'Assignment', path: `/${role}/assignments` },
    { icon: MessageSquare, label: 'Chatroom', path: `/${role}/chatroom` },
    { icon: Settings, label: 'Settings', path: `/${role}/settings` },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
