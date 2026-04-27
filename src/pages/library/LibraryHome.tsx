import { Link } from 'react-router-dom';
import LibraryNavbar from '../../components/LibraryNavbar';
import { BookOpen, Search, Grid, TrendingUp } from 'lucide-react';

export default function LibraryHome() {
  const stats = [
    { label: 'Total Books', value: '10,000+', icon: BookOpen },
    { label: 'Categories', value: '10', icon: Grid },
    { label: 'Popular Today', value: '156', icon: TrendingUp }
  ];

  const featuredBooks = [
    {
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      category: 'Technology & Applied Science',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      category: 'Non-Fiction',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Calculus Early Transcendentals',
      author: 'James Stewart',
      category: 'Academic Books',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <LibraryNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white mb-6">Welcome to OpenShelf Digital Library</h1>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Access thousands of books, research papers, and educational resources across 10 comprehensive categories.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                to="/library/search"
                className="flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                <Search className="w-5 h-5" />
                Search Books
              </Link>
              <Link 
                to="/library/category"
                className="flex items-center gap-2 px-8 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition-colors"
              >
                <Grid className="w-5 h-5" />
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <p className="text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Featured Books</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredBooks.map((book, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer">
                <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                  <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">
                    {book.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-gray-900">Explore by Category</h2>
            <Link to="/library/category" className="text-indigo-600 hover:text-indigo-700">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Academic Books', 'Fiction', 'Non-Fiction', 'Technology', 'Research'].map((category) => (
              <Link
                key={category}
                to="/library/category"
                className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <BookOpen className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <p className="text-gray-900">{category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
