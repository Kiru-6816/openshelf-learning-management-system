import { Link } from 'react-router-dom';
import LibraryNavbar from '../../components/LibraryNavbar';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, Clock, Bookmark, ArrowLeft } from 'lucide-react';

export default function LibraryProfile() {
  const { user } = useAuth();

  const stats = [
    { label: 'Books Read', value: '24', icon: BookOpen },
    { label: 'Reading Time', value: '120h', icon: Clock },
    { label: 'Bookmarks', value: '15', icon: Bookmark }
  ];

  const borrowedBooks = [
    {
      id: 1,
      title: 'Calculus Early Transcendentals',
      author: 'James Stewart',
      dueDate: '2025-12-01',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      dueDate: '2025-11-30',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <LibraryNavbar />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to={`/${user?.role}/dashboard`}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-indigo-600">{user?.name.charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <h1 className="text-gray-900 mb-1">{user?.name}</h1>
              <p className="text-gray-600">{user?.email}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm capitalize">
                {user?.role}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <p className="text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-gray-900 mb-6">Currently Borrowed</h2>
          <div className="space-y-4">
            {borrowedBooks.map((book) => (
              <div key={book.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                <div className="w-16 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                  <p className="text-gray-500 text-sm">Due: {book.dueDate}</p>
                </div>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors self-start">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
