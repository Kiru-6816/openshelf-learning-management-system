import { useState } from 'react';
import LibraryNavbar from '../../components/LibraryNavbar';
import { ChevronLeft, ChevronRight, X, BookOpen, Download } from 'lucide-react';
import { booksDatabase, getBooksByCategory, Book } from '../../data/booksDatabase';

export default function LibraryCategory() {
  const [viewingBook, setViewingBook] = useState<Book | null>(null);

  const categories = [
    { name: 'Academic Books', books: getBooksByCategory('Academic Books') },
    { name: 'Fiction', books: getBooksByCategory('Fiction') },
    { name: 'Non-Fiction', books: getBooksByCategory('Non-Fiction') },
    { name: 'Technology & Applied Science', books: getBooksByCategory('Technology & Applied Science') },
    { name: 'Research', books: getBooksByCategory('Research') },
    { name: 'Religion & Philosophy', books: getBooksByCategory('Religion & Philosophy') },
    { name: 'Reference', books: getBooksByCategory('Reference') },
    { name: 'Media', books: getBooksByCategory('Media') },
    { name: 'Special Collections', books: getBooksByCategory('Special Collections') },
    { name: 'College Application Supplementary', books: getBooksByCategory('College Application Supplementary') }
  ];

  const scrollCarousel = (direction: 'left' | 'right', categoryIndex: number) => {
    const carousel = document.getElementById(`carousel-${categoryIndex}`);
    if (carousel) {
      const scrollAmount = 300;
      carousel.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleBookClick = (book: Book) => {
    setViewingBook(book);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LibraryNavbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-gray-900 mb-8">Browse by Category</h1>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category.name}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-900">{category.name}</h2>
                <span className="text-gray-600">{category.books.length} books</span>
              </div>
              <div className="relative group">
                <button
                  onClick={() => scrollCarousel('left', categoryIndex)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                
                <div
                  id={`carousel-${categoryIndex}`}
                  className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {category.books.map((book) => (
                    <div
                      key={book.id}
                      onClick={() => handleBookClick(book)}
                      className="flex-shrink-0 w-40 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="aspect-[3/4] bg-gray-200 rounded-t-xl overflow-hidden">
                        <img 
                          src={book.cover} 
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="text-gray-900 text-sm line-clamp-2 mb-1">{book.title}</h3>
                        <p className="text-gray-600 text-xs line-clamp-1">{book.author}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollCarousel('right', categoryIndex)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>
              </div>
            </div>
          ))}
        </div>
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
