import { useState, useMemo } from 'react';
import LibraryNavbar from '../../components/LibraryNavbar';
import { Search, Filter, X, BookOpen, Download } from 'lucide-react';
import { booksDatabase, Book } from '../../data/booksDatabase';

export default function LibrarySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewingBook, setViewingBook] = useState<Book | null>(null);

  const categories = [
    'All Categories',
    'Academic Books',
    'Fiction',
    'Non-Fiction',
    'Media',
    'Research',
    'Religion & Philosophy',
    'Reference',
    'Technology & Applied Science',
    'Special Collections',
    'College Application Supplementary'
  ];

  // Filter books based on search query and filters
  const filteredBooks = useMemo(() => {
    return booksDatabase.filter(book => {
      // Search query filter
      const matchesSearch = searchQuery === '' || 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategory === 'all' || 
        selectedCategory === 'all-categories' ||
        book.category.toLowerCase() === selectedCategory.replace(/-/g, ' ');

      // Year filter
      let matchesYear = true;
      if (selectedYear !== 'all') {
        if (selectedYear === '2020s') matchesYear = book.year >= 2020;
        else if (selectedYear === '2010s') matchesYear = book.year >= 2010 && book.year < 2020;
        else if (selectedYear === '2000s') matchesYear = book.year >= 2000 && book.year < 2010;
        else if (selectedYear === 'older') matchesYear = book.year < 2000;
      }

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedYear('all');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LibraryNavbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-gray-900 mb-8">Search Library</h1>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, author, or keyword..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Publication Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                >
                  <option value="all">All Years</option>
                  <option value="2020s">2020s</option>
                  <option value="2010s">2010s</option>
                  <option value="2000s">2000s</option>
                  <option value="older">Before 2000</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-600">{filteredBooks.length} results found</p>
          {(searchQuery || selectedCategory !== 'all' || selectedYear !== 'all') && (
            <button 
              onClick={handleClearFilters}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          )}
        </div>

        {filteredBooks.length > 0 ? (
          <div className="space-y-4">
            {filteredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  <div className="w-32 h-40 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={book.cover} 
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-gray-900 mb-1">{book.title}</h3>
                        <p className="text-gray-600 mb-2">by {book.author}</p>
                      </div>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded text-sm whitespace-nowrap">
                        {book.category}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{book.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-sm">Published: {book.year > 0 ? book.year : `${Math.abs(book.year)} BCE`}</p>
                      <button 
                        onClick={() => setViewingBook(book)}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        View Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <p className="text-gray-500 mb-2">No books found matching your criteria.</p>
            <button 
              onClick={handleClearFilters}
              className="text-indigo-600 hover:text-indigo-700"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      {/* Book Viewing Modal */}
      {viewingBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-6">
                <div className="w-40 h-52 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={viewingBook.cover} 
                    alt={viewingBook.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-gray-900 mb-2">{viewingBook.title}</h2>
                  <p className="text-gray-600 mb-2">by {viewingBook.author}</p>
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded text-sm mb-3">
                    {viewingBook.category}
                  </span>
                  <p className="text-gray-500 text-sm mb-4">Published: {viewingBook.year > 0 ? viewingBook.year : `${Math.abs(viewingBook.year)} BCE`}</p>
                  <p className="text-gray-700">{viewingBook.description}</p>
                </div>
              </div>
              <button
                onClick={() => setViewingBook(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                Book Content
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {viewingBook.fullContent || 'Full content preview not available. Please download or borrow the book to access the complete content.'}
                </p>
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <BookOpen className="w-5 h-5" />
                  Borrow Book
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6 pt-6 border-t">
              <button
                onClick={() => setViewingBook(null)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
