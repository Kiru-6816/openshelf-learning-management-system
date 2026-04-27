export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  year: number;
  description: string;
  cover: string;
  fullContent?: string;
}

export const booksDatabase: Book[] = [
  // Academic Books
  {
    id: 1,
    title: 'Calculus Early Transcendentals',
    author: 'James Stewart',
    category: 'Academic Books',
    year: 2015,
    description: 'Comprehensive calculus textbook covering limits, derivatives, integrals, and infinite series.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This comprehensive textbook provides an in-depth exploration of calculus concepts. Chapter 1 covers the fundamental concepts of limits and continuity, establishing the foundation for differential and integral calculus...'
  },
  {
    id: 2,
    title: 'Physics Principles and Applications',
    author: 'David Halliday',
    category: 'Academic Books',
    year: 2018,
    description: 'Fundamental physics textbook for undergraduate students covering mechanics, thermodynamics, and electromagnetism.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This textbook provides a comprehensive introduction to physics principles and applications, starting with classical mechanics and progressing through modern physics topics...'
  },
  {
    id: 3,
    title: 'Chemistry: The Central Science',
    author: 'Theodore Brown',
    category: 'Academic Books',
    year: 2020,
    description: 'Authoritative chemistry textbook covering atomic structure, bonding, reactions, and chemical principles.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Chemistry: The Central Science explores the fundamental principles of chemistry, from atomic theory to chemical reactions and thermodynamics...'
  },
  {
    id: 4,
    title: 'Biology Concepts and Connections',
    author: 'Neil Campbell',
    category: 'Academic Books',
    year: 2019,
    description: 'Comprehensive biology textbook covering cell biology, genetics, evolution, and ecology.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This comprehensive biology textbook explores life at all levels, from molecules to ecosystems, providing students with a deep understanding of biological concepts...'
  },
  {
    id: 5,
    title: 'English Grammar in Use',
    author: 'Raymond Murphy',
    category: 'Academic Books',
    year: 2012,
    description: 'Essential grammar reference and practice book for intermediate to advanced English learners.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This comprehensive grammar guide provides clear explanations and practical exercises for mastering English grammar at intermediate and advanced levels...'
  },
  {
    id: 6,
    title: 'Linear Algebra and Its Applications',
    author: 'Gilbert Strang',
    category: 'Academic Books',
    year: 2016,
    description: 'Comprehensive introduction to linear algebra with emphasis on applications in science and engineering.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Linear algebra forms the foundation for much of modern mathematics and its applications. This book covers vector spaces, matrices, eigenvalues, and more...'
  },

  // Fiction
  {
    id: 7,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Fiction',
    year: 1925,
    description: 'Classic American novel set in the Jazz Age exploring themes of wealth, love, and the American Dream.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'In my younger and more vulnerable years my father gave me some advice that I\'ve been turning over in my mind ever since. "Whenever you feel like criticizing anyone," he told me, "just remember that all the people in this world haven\'t had the advantages that you\'ve had..."'
  },
  {
    id: 8,
    title: '1984',
    author: 'George Orwell',
    category: 'Fiction',
    year: 1949,
    description: 'Dystopian novel depicting a totalitarian society under constant surveillance and control.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind...'
  },
  {
    id: 9,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    category: 'Fiction',
    year: 1813,
    description: 'Romantic novel following Elizabeth Bennet as she navigates love, family, and societal expectations.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife...'
  },
  {
    id: 10,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    year: 1960,
    description: 'Powerful story of racial injustice and childhood innocence in the American South.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem\'s fears of never being able to play football were assuaged...'
  },
  {
    id: 11,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    category: 'Fiction',
    year: 1951,
    description: 'Coming-of-age story following teenager Holden Caulfield through New York City.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'If you really want to hear about it, the first thing you\'ll probably want to know is where I was born, and what my lousy childhood was like...'
  },
  {
    id: 12,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Fiction',
    year: 1937,
    description: 'Fantasy adventure of Bilbo Baggins and his unexpected journey with dwarves and a wizard.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell...'
  },

  // Non-Fiction
  {
    id: 13,
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    category: 'Non-Fiction',
    year: 1988,
    description: 'Landmark volume in science writing exploring cosmology and the nature of time.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Stephen Hawking takes readers on a journey through the history of physics, from Aristotle to Einstein and beyond, exploring questions about the universe...'
  },
  {
    id: 14,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    category: 'Non-Fiction',
    year: 2011,
    description: 'Exploration of human history from the Stone Age to the modern age.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'About 13.5 billion years ago, matter, energy, time and space came into being in what is known as the Big Bang. The story of these fundamental features of our universe is called physics...'
  },
  {
    id: 15,
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Non-Fiction',
    year: 2018,
    description: 'Memoir about a woman who grows up in a survivalist family and eventually earns a PhD from Cambridge.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'My strongest memory is not a memory. It\'s something I imagined, then came to remember as if it had happened. The memory was formed when I was five...'
  },
  {
    id: 16,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    category: 'Non-Fiction',
    year: 2011,
    description: 'Exploration of the two systems that drive the way we think and make decisions.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'The premise of this book is that it is easier to recognize other people\'s mistakes than our own...'
  },
  {
    id: 17,
    title: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot',
    category: 'Non-Fiction',
    year: 2010,
    description: 'The story of an African American woman whose cells revolutionized medicine.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'There\'s a photo on my wall of a woman I\'ve never met, its left corner torn and patched together with tape. Her name is Henrietta Lacks...'
  },

  // Technology & Applied Science
  {
    id: 18,
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    category: 'Technology & Applied Science',
    year: 2009,
    description: 'Comprehensive text on algorithm design and analysis, widely used in computer science education.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers...'
  },
  {
    id: 19,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Technology & Applied Science',
    year: 2008,
    description: 'A handbook of agile software craftsmanship focusing on writing clean, maintainable code.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Even bad code can function. But if code isn\'t clean, it can bring a development organization to its knees...'
  },
  {
    id: 20,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    category: 'Technology & Applied Science',
    year: 1999,
    description: 'Classic guide to becoming a better programmer through practical advice and philosophy.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This book is about the programming craft. It covers topics ranging from personal responsibility and career development to architectural techniques...'
  },
  {
    id: 21,
    title: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell',
    category: 'Technology & Applied Science',
    year: 2020,
    description: 'Comprehensive introduction to the theory and practice of artificial intelligence.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Artificial Intelligence (AI) is a big field, and this is a big book. The subtitle of this book is "A Modern Approach"...'
  },
  {
    id: 22,
    title: 'Design Patterns',
    author: 'Erich Gamma',
    category: 'Technology & Applied Science',
    year: 1994,
    description: 'Classic book on reusable object-oriented software design patterns.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Designing object-oriented software is hard, and designing reusable object-oriented software is even harder...'
  },

  // Research
  {
    id: 23,
    title: 'Research Design: Qualitative and Quantitative Approaches',
    author: 'John W. Creswell',
    category: 'Research',
    year: 2014,
    description: 'Comprehensive guide to research methodology covering both qualitative and quantitative approaches.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This book explores research design from the philosophical assumptions through the methods of data collection and analysis...'
  },
  {
    id: 24,
    title: 'The Craft of Research',
    author: 'Wayne C. Booth',
    category: 'Research',
    year: 2016,
    description: 'Essential guide to conducting and presenting research effectively.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Research is a craft that anyone can learn. This book shows you how to develop research questions, find and evaluate sources...'
  },
  {
    id: 25,
    title: 'Statistical Methods for Research Workers',
    author: 'Ronald Fisher',
    category: 'Research',
    year: 1925,
    description: 'Foundational text on statistical methods in scientific research.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'The object of statistical methods is the reduction of data. The methods are concerned with the summarization and description of data...'
  },
  {
    id: 26,
    title: 'Writing for Social Scientists',
    author: 'Howard S. Becker',
    category: 'Research',
    year: 2007,
    description: 'Practical guide to academic writing and overcoming writing blocks.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Most social scientists find writing difficult. This book aims to help them write better and more easily...'
  },

  // Religion & Philosophy
  {
    id: 27,
    title: 'Meditations',
    author: 'Marcus Aurelius',
    category: 'Religion & Philosophy',
    year: 180,
    description: 'Personal writings of the Roman Emperor on Stoic philosophy.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'From my grandfather Verus I learned good morals and the government of my temper. From the reputation and remembrance of my father, modesty and a manly character...'
  },
  {
    id: 28,
    title: 'The Republic',
    author: 'Plato',
    category: 'Religion & Philosophy',
    year: -375,
    description: 'Socratic dialogue concerning justice, the order of the city-state, and the just man.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess...'
  },
  {
    id: 29,
    title: 'The Art of War',
    author: 'Sun Tzu',
    category: 'Religion & Philosophy',
    year: -500,
    description: 'Ancient Chinese military treatise on strategy and tactics.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin...'
  },
  {
    id: 30,
    title: 'Being and Time',
    author: 'Martin Heidegger',
    category: 'Religion & Philosophy',
    year: 1927,
    description: 'Seminal work on existentialism and phenomenology.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Our provisional aim is the Interpretation of time as the possible horizon for any understanding whatsoever of Being...'
  },

  // Reference
  {
    id: 31,
    title: 'Oxford English Dictionary',
    author: 'Oxford University Press',
    category: 'Reference',
    year: 2022,
    description: 'Comprehensive dictionary of the English language with historical usage examples.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'The Oxford English Dictionary is the accepted authority on the evolution of the English language over the last millennium...'
  },
  {
    id: 32,
    title: 'National Geographic World Atlas',
    author: 'National Geographic',
    category: 'Reference',
    year: 2021,
    description: 'Comprehensive atlas featuring detailed maps and geographic information.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This comprehensive atlas provides detailed maps of every region on Earth, along with geographic information and statistics...'
  },
  {
    id: 33,
    title: 'The Chicago Manual of Style',
    author: 'University of Chicago Press',
    category: 'Reference',
    year: 2017,
    description: 'Comprehensive guide to editorial style and manuscript preparation.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'The Chicago Manual of Style is the authoritative guide to editorial style for American English...'
  },
  {
    id: 34,
    title: 'Encyclopedia Britannica',
    author: 'Britannica Group',
    category: 'Reference',
    year: 2023,
    description: 'General knowledge encyclopedia covering a wide range of topics.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Encyclopedia Britannica has been a trusted source of information for over 250 years, providing comprehensive coverage of all major fields of knowledge...'
  },

  // Media
  {
    id: 35,
    title: 'Understanding Media',
    author: 'Marshall McLuhan',
    category: 'Media',
    year: 1964,
    description: 'Groundbreaking work on media theory and its effects on human society.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'The medium is the message. This is merely to say that the personal and social consequences of any medium...'
  },
  {
    id: 36,
    title: 'The Elements of Journalism',
    author: 'Bill Kovach',
    category: 'Media',
    year: 2007,
    description: 'Essential principles of journalism and news reporting in the digital age.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Journalism\'s first obligation is to the truth. Democracy depends on citizens having reliable, accurate facts...'
  },
  {
    id: 37,
    title: 'Digital Media and Society',
    author: 'Simon Lindgren',
    category: 'Media',
    year: 2017,
    description: 'Exploration of how digital media shapes contemporary society and culture.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Digital media have become deeply embedded in our everyday lives, transforming how we communicate, work, and socialize...'
  },
  {
    id: 38,
    title: 'Film Art: An Introduction',
    author: 'David Bordwell',
    category: 'Media',
    year: 2016,
    description: 'Comprehensive introduction to film analysis and cinematic techniques.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Film is an art form with its own language and methods for creating meaning. This book introduces the fundamental techniques of film analysis...'
  },

  // Special Collections
  {
    id: 39,
    title: 'Rare Manuscripts Collection',
    author: 'Various Authors',
    category: 'Special Collections',
    year: 1200,
    description: 'Collection of rare historical manuscripts from medieval period.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This collection contains rare manuscripts from the medieval period, including illuminated texts and historical documents...'
  },
  {
    id: 40,
    title: 'First Editions Archive',
    author: 'Various Authors',
    category: 'Special Collections',
    year: 1800,
    description: 'Archive of first edition books from renowned authors.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Our first editions archive includes original printings of classic works by celebrated authors throughout history...'
  },
  {
    id: 41,
    title: 'Historical Maps Collection',
    author: 'Various Cartographers',
    category: 'Special Collections',
    year: 1500,
    description: 'Collection of historical maps and cartographic materials.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This special collection contains historical maps from various periods, showing the evolution of cartography and geographic understanding...'
  },

  // College Application Supplementary
  {
    id: 42,
    title: 'SAT Preparation Guide',
    author: 'College Board',
    category: 'College Application Supplementary',
    year: 2024,
    description: 'Comprehensive guide to SAT test preparation with practice tests and strategies.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This comprehensive guide includes full-length practice tests, detailed answer explanations, and test-taking strategies for the SAT...'
  },
  {
    id: 43,
    title: 'College Essay Writing Guide',
    author: 'Harry Bauld',
    category: 'College Application Supplementary',
    year: 2012,
    description: 'Expert guidance on writing compelling college application essays.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Writing a college application essay can be daunting. This guide provides practical advice on crafting essays that stand out...'
  },
  {
    id: 44,
    title: 'The Fiske Guide to Colleges',
    author: 'Edward Fiske',
    category: 'College Application Supplementary',
    year: 2024,
    description: 'Comprehensive guide to colleges and universities across the United States.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'The Fiske Guide provides detailed profiles of colleges including academic programs, campus culture, and admission requirements...'
  },
  {
    id: 45,
    title: 'ACT Prep Black Book',
    author: 'Mike Barrett',
    category: 'College Application Supplementary',
    year: 2023,
    description: 'Comprehensive ACT preparation guide with proven strategies.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'This book reveals the ACT\'s patterns and teaches you how to think like the test-makers...'
  },
  {
    id: 46,
    title: 'Common Application Guide',
    author: 'Jennifer Stephan',
    category: 'College Application Supplementary',
    year: 2023,
    description: 'Complete guide to navigating the Common Application process.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNzA1NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    fullContent: 'Navigate the Common Application with confidence. This guide walks you through every section of the application...'
  }
];

// Helper function to get books by category
export function getBooksByCategory(category: string): Book[] {
  return booksDatabase.filter(book => book.category === category);
}

// Helper function to get all categories
export function getAllCategories(): string[] {
  return Array.from(new Set(booksDatabase.map(book => book.category)));
}
