import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from 'figma:asset/4a4358252bbee43c1ed4ccce09caa58077b05629.png';

export default function LandingNavbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLibraryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      // User is logged in, go directly to library
      navigate('/library');
    } else {
      // User not logged in, redirect to login with library intent
      navigate('/login', { state: { redirectTo: '/library' } });
    }
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

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={handleLibraryClick} className="text-gray-700 hover:text-gray-900 transition-colors">
              Library
            </button>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}