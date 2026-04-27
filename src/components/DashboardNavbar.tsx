import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';
import logo from 'figma:asset/4a4358252bbee43c1ed4ccce09caa58077b05629.png';

export default function DashboardNavbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="OpenShelf Logo" className="h-10 w-10" />
            <span className="text-gray-900">OpenShelf</span>
          </Link>

          {/* Center - Library Link */}
          <div className="flex items-center">
            <Link 
              to="/library" 
              className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              Digital Library
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link 
              to={`/${user?.role}/settings`}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
