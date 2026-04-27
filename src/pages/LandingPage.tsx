import LandingNavbar from '../components/LandingNavbar';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookOpen, Users, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  const teamMembers = [
    {
      name: 'Godoleyas Solomon',
      role: 'Backend Developer, Project Lead',
      image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzY2OTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Melat Gebrehiwot',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzY2OTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Kirubel Fikade',
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzY2OTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Dawit Genanaw',
      role: 'Librarian',
      image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzY2OTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Ezana Samuel',
      role: 'Librarian',
      image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzY2OTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNavbar />
      
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-gray-900 mb-6">
              OpenShelf: Your Learning Command Center
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the future of education with our integrated Learning Management System and Digital Library. 
              Empowering students and teachers with seamless access to knowledge.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#about" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </a>
              <a href="/signup" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">
            Revolutionizing How to Teach & Learn
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-3">
                Comprehensive LMS
              </h3>
              <p className="text-gray-600">
                Complete learning management with courses, assignments, notifications, and real-time collaboration.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-gray-900 mb-3">
                Digital Library Access
              </h3>
              <p className="text-gray-600">
                Extensive collection of resources across 10 categories, seamlessly integrated with your coursework.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-3">
                Enhance Learning with Powerful Insights
              </h3>
              <p className="text-gray-600">
                Track progress, manage assignments, and collaborate effectively with intuitive tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Meet our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate. Proactive. Expert.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 OpenShelf. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}