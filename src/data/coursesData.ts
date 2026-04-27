export const coursesData = {
  '1': {
    id: '1',
    title: 'Advanced Mathematics',
    teacher: 'Dr. Sarah Johnson',
    description: 'This course covers advanced topics in mathematics including calculus, differential equations, and linear algebra.',
    units: [
      {
        id: 1,
        title: 'Unit 1: Calculus Fundamentals',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Limits and Continuity',
            sublessons: [
              {
                id: 1,
                title: 'Introduction to Limits',
                content: 'In mathematics, a limit is the value that a function approaches as the input approaches some value. Limits are essential to calculus and mathematical analysis.\n\nKey Concepts:\n• Definition of a limit\n• One-sided limits\n• Infinite limits\n• Limits at infinity\n\nThe formal definition states that for a function f(x), the limit as x approaches a is L if for every ε > 0, there exists a δ > 0 such that |f(x) - L| < ε whenever 0 < |x - a| < δ.',
                video: 'https://www.youtube.com/embed/riXcZT2ICjA',
                reference: { book: 'Calculus Early Transcendentals', chapter: 2, page: 45 }
              },
              {
                id: 2,
                title: 'One-Sided Limits',
                content: 'A one-sided limit is a value the function approaches as the input approaches a specified value from one side (left or right).\n\nLeft-hand limit: lim(x→a⁻) f(x)\nRight-hand limit: lim(x→a⁺) f(x)\n\nA limit exists at a point if and only if both one-sided limits exist and are equal.',
                video: null,
                reference: { book: 'Calculus Early Transcendentals', chapter: 2, page: 52 }
              }
            ]
          },
          {
            id: 2,
            title: 'Lesson 2: Derivatives',
            sublessons: [
              {
                id: 3,
                title: 'Introduction to Derivatives',
                content: 'The derivative of a function represents the rate at which the function is changing at any given point.\n\nThe derivative f\'(x) is defined as:\nf\'(x) = lim(h→0) [f(x+h) - f(x)] / h',
                video: 'https://www.youtube.com/embed/5yfh5cf4-0w',
                reference: { book: 'Calculus Early Transcendentals', chapter: 3, page: 89 }
              }
            ]
          }
        ]
      }
    ]
  },
  '2': {
    id: '2',
    title: 'Physics',
    teacher: 'Prof. Michael Chen',
    description: 'Explore the fundamental principles of physics including mechanics, thermodynamics, and electromagnetism.',
    units: [
      {
        id: 1,
        title: 'Unit 1: Classical Mechanics',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Newton\'s Laws of Motion',
            sublessons: [
              {
                id: 1,
                title: 'First Law: Law of Inertia',
                content: 'Newton\'s First Law states that an object at rest stays at rest and an object in motion stays in motion with the same speed and direction unless acted upon by an external force.\n\nKey Points:\n• Inertia is the tendency of objects to resist changes in their state of motion\n• Mass is a measure of inertia\n• This law defines the concept of force',
                video: 'https://www.youtube.com/embed/kKKM8Y-u7ds',
                reference: { book: 'Physics: Principles with Applications', chapter: 4, page: 78 }
              },
              {
                id: 2,
                title: 'Second Law: F = ma',
                content: 'Newton\'s Second Law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.\n\nF = ma\n\nWhere:\nF = Net force (Newtons)\nm = mass (kg)\na = acceleration (m/s²)',
                video: null,
                reference: { book: 'Physics: Principles with Applications', chapter: 4, page: 82 }
              }
            ]
          },
          {
            id: 2,
            title: 'Lesson 2: Energy and Work',
            sublessons: [
              {
                id: 3,
                title: 'Work-Energy Theorem',
                content: 'The work-energy theorem states that the work done on an object equals the change in its kinetic energy.\n\nW = ΔKE = KEf - KEi\n\nWork is defined as: W = F × d × cos(θ)',
                video: 'https://www.youtube.com/embed/w4QFJb9a8vo',
                reference: { book: 'Physics: Principles with Applications', chapter: 6, page: 134 }
              }
            ]
          }
        ]
      }
    ]
  },
  '3': {
    id: '3',
    title: 'Chemistry',
    teacher: 'Dr. Emily Wilson',
    description: 'Study the composition, structure, properties, and reactions of matter.',
    units: [
      {
        id: 1,
        title: 'Unit 1: Atomic Structure',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: The Atom',
            sublessons: [
              {
                id: 1,
                title: 'Subatomic Particles',
                content: 'Atoms are made up of three main subatomic particles:\n\n1. Protons: Positively charged, located in the nucleus\n   - Mass: ~1 amu\n   - Charge: +1\n\n2. Neutrons: No charge, located in the nucleus\n   - Mass: ~1 amu\n   - Charge: 0\n\n3. Electrons: Negatively charged, orbit the nucleus\n   - Mass: ~0.0005 amu\n   - Charge: -1',
                video: 'https://www.youtube.com/embed/W2Xb2GFK2yc',
                reference: { book: 'Chemistry: The Central Science', chapter: 2, page: 42 }
              },
              {
                id: 2,
                title: 'Electron Configuration',
                content: 'Electron configuration describes the distribution of electrons in an atom\'s orbitals.\n\nOrbitals fill in order of increasing energy:\n1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d...\n\nExample: Carbon (C)\n1s² 2s² 2p²',
                video: null,
                reference: { book: 'Chemistry: The Central Science', chapter: 6, page: 223 }
              }
            ]
          },
          {
            id: 2,
            title: 'Lesson 2: Chemical Bonding',
            sublessons: [
              {
                id: 3,
                title: 'Ionic and Covalent Bonds',
                content: 'Chemical bonds form when atoms share or transfer electrons.\n\nIonic Bonds:\n• Transfer of electrons\n• Between metals and nonmetals\n• Form ionic compounds (salts)\n\nCovalent Bonds:\n• Sharing of electrons\n• Between nonmetals\n• Form molecules',
                video: 'https://www.youtube.com/embed/CGA8sRwqIFg',
                reference: { book: 'Chemistry: The Central Science', chapter: 8, page: 298 }
              }
            ]
          }
        ]
      }
    ]
  },
  '4': {
    id: '4',
    title: 'English Literature',
    teacher: 'Prof. David Brown',
    description: 'Explore classic and contemporary literature through critical analysis and discussion.',
    units: [
      {
        id: 1,
        title: 'Unit 1: Shakespeare',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1: Hamlet',
            sublessons: [
              {
                id: 1,
                title: 'Introduction to Hamlet',
                content: 'Hamlet is one of Shakespeare\'s most famous tragedies, written around 1600.\n\nMain Themes:\n• Revenge and justice\n• Madness (real vs. feigned)\n• Mortality and the afterlife\n• Corruption and decay\n\nThe play follows Prince Hamlet as he seeks to avenge his father\'s murder.',
                video: 'https://www.youtube.com/embed/6OU4CJnHKlw',
                reference: { book: 'The Norton Shakespeare', chapter: null, page: 1696 }
              },
              {
                id: 2,
                title: 'Character Analysis: Hamlet',
                content: 'Prince Hamlet is a complex character known for his:\n\n• Philosophical nature\n• Tendency toward introspection\n• Famous soliloquies (\"To be or not to be\")\n• Relationship with his mother Gertrude\n• Conflict with his uncle Claudius\n\nHamlet\'s character embodies the Renaissance ideal of the thoughtful, educated man.',
                video: null,
                reference: { book: 'The Norton Shakespeare', chapter: null, page: 1702 }
              }
            ]
          },
          {
            id: 2,
            title: 'Lesson 2: Macbeth',
            sublessons: [
              {
                id: 3,
                title: 'Themes of Ambition and Power',
                content: 'Macbeth explores the corrupting influence of unchecked ambition.\n\nKey Themes:\n• Ambition and its consequences\n• Guilt and conscience\n• Fate vs. free will\n• Appearance vs. reality\n\nThe play shows how Macbeth\'s ambition leads to his downfall.',
                video: 'https://www.youtube.com/embed/7hAIKAw4r1Y',
                reference: { book: 'The Norton Shakespeare', chapter: null, page: 2555 }
              }
            ]
          }
        ]
      }
    ]
  }
};
