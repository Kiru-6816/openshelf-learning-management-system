import { Link } from 'react-router-dom';
import DashboardNavbar from '../../components/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardSidebar';
import { BookOpen, Users, Calculator, Sigma } from 'lucide-react';

export default function TeacherCourses() {
  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics - Section A',
      students: 34,
      units: 8,
      color: 'blue',
      icon: 'calculator'
    },
    {
      id: 2,
      title: 'Basic Calculus - Section B',
      students: 28,
      units: 6,
      color: 'green',
      icon: 'sigma'
    }
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-12 h-12 text-white";
    switch (iconName) {
      case 'calculator':
        return <Calculator className={iconClass} />;
      case 'sigma':
        return <Sigma className={iconClass} />;
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
      default:
        return 'bg-gradient-to-br from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar role="teacher" />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-900 mb-8">My Courses</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/teacher/courses/${course.id}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className={`h-32 ${getColorClasses(course.color)} p-6 flex items-center justify-center`}>
                    {getIcon(course.icon)}
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-900 mb-4">{course.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{course.students} Students</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.units} Units</span>
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
