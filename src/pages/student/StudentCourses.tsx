import { Link } from 'react-router-dom';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { BookOpen, Calculator, Atom, Beaker, BookMarked } from 'lucide-react';

export default function StudentCourses() {
  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      teacher: 'Dr. Sarah Johnson',
      progress: 75,
      color: 'blue',
      units: 8,
      nextLesson: 'Calculus II',
      icon: 'calculator'
    },
    {
      id: 2,
      title: 'Physics',
      teacher: 'Prof. Michael Chen',
      progress: 60,
      color: 'green',
      units: 6,
      nextLesson: 'Quantum Mechanics',
      icon: 'atom'
    },
    {
      id: 3,
      title: 'Chemistry',
      teacher: 'Dr. Emily Wilson',
      progress: 85,
      color: 'purple',
      units: 7,
      nextLesson: 'Organic Chemistry',
      icon: 'beaker'
    },
    {
      id: 4,
      title: 'English Literature',
      teacher: 'Prof. David Brown',
      progress: 50,
      color: 'orange',
      units: 10,
      nextLesson: 'Shakespeare Studies',
      icon: 'bookmarked'
    }
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-12 h-12 text-white";
    switch (iconName) {
      case 'calculator':
        return <Calculator className={iconClass} />;
      case 'atom':
        return <Atom className={iconClass} />;
      case 'beaker':
        return <Beaker className={iconClass} />;
      case 'bookmarked':
        return <BookMarked className={iconClass} />;
      default:
        return <BookOpen className={iconClass} />;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-gradient-to-br from-blue-400 to-blue-600';
      case 'green':
        return 'bg-gradient-to-br from-green-400 to-green-600';
      case 'purple':
        return 'bg-gradient-to-br from-purple-400 to-purple-600';
      case 'orange':
        return 'bg-gradient-to-br from-orange-400 to-orange-600';
      default:
        return 'bg-gradient-to-br from-gray-400 to-gray-600';
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-600';
      case 'green':
        return 'bg-green-600';
      case 'purple':
        return 'bg-purple-600';
      case 'orange':
        return 'bg-orange-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="student" />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-900 mb-8">My Courses</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/student/courses/${course.id}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className={`h-32 ${getColorClasses(course.color)} p-6 flex items-center justify-center`}>
                    {getIcon(course.icon)}
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.teacher}</p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-gray-900">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${getProgressColor(course.color)} h-2 rounded-full`}
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{course.units} Units</span>
                        <span className="text-gray-600">Next: {course.nextLesson}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
