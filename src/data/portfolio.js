export const portfolioData = {
  personalInfo: {
    name: "NARENDRA CHAMARTHI",
    firstName: "Narendra",
    lastName: "Chamarthi",
    title: "Software Developer | Python Full-Stack Developer | Problem Solver",
    roles: [
      "Software Developer",
      "Python Full-Stack Developer",
      "Problem Solver"
    ],
    tagline: "I build practical web applications with Python and modern web technologies while continuously strengthening my problem-solving skills through Data Structures and Algorithms.",
    bio: "I am a B.Tech Artificial Intelligence & Data Science student with a strong foundation in Python, full-stack web development, and problem-solving through Data Structures and Algorithms. Focused on engineering practical, real-world applications with clean code, secure backend APIs, and intuitive visual interfaces.",
    location: "Andhra Pradesh, India",
    email: "narendrachamarthi520@gmail.com",
    github: "https://github.com/Narri520",
    linkedin: "https://www.linkedin.com/in/narendra-chamarthi",
    leetcode: "https://leetcode.com/u/Narri05/",
    targetRoles: [
      "Software Developer Placements",
      "Full-Stack Developer Roles",
      "Python Developer Roles",
      "Graduate / Internship Opportunities"
    ]
  },

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence and Data Science",
    institution: "VVIIT (Vignan's Institute of Information Technology)",
    location: "Andhra Pradesh, India",
    duration: "2023 – 2027",
    cgpa: "8.6 / 10",
    highlights: [
      "Specialization in Artificial Intelligence, Machine Learning & Data Structures",
      "Consistently maintained an academic CGPA of 8.6 / 10",
      "Active participant in technical coding challenges and hackathons"
    ]
  },

  skills: [
    {
      category: "PROGRAMMING",
      description: "Core languages for logic building and backend development",
      icon: "Code",
      items: [
        { name: "Python", level: 90, tag: "Primary" },
        { name: "SQL", level: 85, tag: "Database" }
      ]
    },
    {
      category: "WEB",
      description: "Frontend and full-stack web application frameworks",
      icon: "Globe",
      items: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88, tag: "ES6+" },
        { name: "React.js", level: 85, tag: "Frontend" },
        { name: "Node.js", level: 80, tag: "Backend" },
        { name: "Express.js", level: 80, tag: "REST API" }
      ]
    },
    {
      category: "DATABASE",
      description: "Relational and document-oriented database systems",
      icon: "Database",
      items: [
        { name: "MySQL", level: 85, tag: "Relational" },
        { name: "MongoDB", level: 80, tag: "NoSQL" }
      ]
    },
    {
      category: "CORE CS",
      description: "Fundamental computer science principles and algorithms",
      icon: "Cpu",
      items: [
        { name: "Data Structures & Algorithms", level: 88, tag: "Core" },
        { name: "Object-Oriented Programming (OOP)", level: 85 },
        { name: "Database Management Systems (DBMS)", level: 85 },
        { name: "Computer Networks", level: 80 }
      ]
    },
    {
      category: "TOOLS & DEVOPS",
      description: "Version control, containerization and development environment",
      icon: "Wrench",
      items: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 90 },
        { name: "Docker", level: 75, tag: "DevOps" },
        { name: "FastAPI", level: 80, tag: "Python Backend" },
        { name: "REST APIs", level: 88 }
      ]
    }
  ],

  projects: [
    {
      id: "smarttask",
      name: "SmartTask – Location-Based Smart Reminder & Accountability System",
      shortDescription: "A location-aware reminder and accountability platform with automated alert mechanisms and missed-task penalty triggers.",
      fullDescription: "SmartTask (CommitGuard) is a full-stack accountability platform designed to bridge the gap between task scheduling and actual execution. Using location-based triggers and automated verification, the system detects missed deadlines and dispatches alerts to emergency contacts or accountability partners.",
      techStack: [
        "Python",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Geolocation APIs",
        "Twilio SMS API",
        "FastAPI"
      ],
      features: [
        "Location-based task triggers using browser Geolocation APIs",
        "Missed-task detection engine with deadline monitoring",
        "Automatic SMS & alert dispatches to predefined emergency contacts / buddies",
        "Accountability stake mechanism with automated penalty tracking",
        "Visual & textual proof analysis via Python microservice",
        "Comprehensive dashboard displaying completion streaks, active tasks, and status logs"
      ],
      github: "https://github.com/Narri520/commitguard",
      liveDemo: null,
      featured: true,
      badge: "Featured Resume & GitHub Project"
    },
    {
      id: "greenlink",
      name: "Green Link – Empowering Farmers Digitally",
      shortDescription: "A web platform engineered to connect farmers with essential agricultural resources, market trends, and expert guidance.",
      fullDescription: "Green Link is a responsive web application built with React.js that aims to bridge the digital gap for farmers. Designed specifically with simplicity and high accessibility in mind, it allows agricultural users with limited technical background to easily navigate and discover vital resources.",
      techStack: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript"
      ],
      features: [
        "Accessible, high-contrast user interface designed for non-technical users",
        "Resource aggregation directory for crop information, fertilizers, and equipment",
        "Responsive grid layout optimized for mobile smartphones and low-bandwidth connections",
        "Intuitive category navigation and instant search"
      ],
      github: "https://github.com/Narri520",
      liveDemo: null,
      featured: true,
      badge: "Resume Project"
    },
    {
      id: "resumaid",
      name: "Resumaid – Resume Builder & ATS Scanner",
      shortDescription: "A MERN stack resume generator and docx ATS scanner built with OWASP security practices and Docker containerization.",
      fullDescription: "Resumaid is a production-grade resume management application that parses uploaded docx resumes to calculate ATS compatibility scores while offering field-level AES-256 database encryption and MFA authentication.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "AES-256 Encryption",
        "Winston Logging"
      ],
      features: [
        "ATS resume scanning and score calculation from uploaded docx files",
        "Field-level AES-256-CBC database encryption for user privacy",
        "Multi-factor authentication (MFA) using Google Authenticator secrets",
        "Multi-container Docker & Docker Compose setup for backend, frontend, and database",
        "Structured logging & audit trails using Winston & Morgan"
      ],
      github: "https://github.com/Narri520/resumaid",
      liveDemo: null,
      featured: true,
      badge: "GitHub Verified Project"
    },
    {
      id: "food-discovery",
      name: "Food Discovery & Party Menu App",
      shortDescription: "Interactive food menu discovery and event catering planning application with dynamic cost calculations.",
      fullDescription: "Food Discovery App is a live web application that allows users to discover food menus, curate party selection lists, filter by dietary choices, and view real-time catering cost estimates.",
      techStack: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Vite"
      ],
      features: [
        "Dynamic menu filtering by categories and food preferences",
        "Interactive party menu builder with automated total guest & price estimation",
        "Responsive mobile-first user experience hosted live on Vercel"
      ],
      github: "https://github.com/Narri520/Food-Discovery-App",
      liveDemo: "https://food-discovery-app-t68y-five.vercel.app/",
      featured: false,
      badge: "Live Web App"
    },
    {
      id: "business-go",
      name: "Business-Go Directory Platform",
      shortDescription: "A business directory and service showcase application built for fast discovery and categorization.",
      fullDescription: "Business-Go is a web application providing a centralized portal for business listings, service highlights, and fast location-based category filtering.",
      techStack: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Vercel"
      ],
      features: [
        "Fast client-side search and multi-category business indexing",
        "Minimalist modern UI layout optimized for fast loading",
        "Deployed live on Vercel for public access"
      ],
      github: "https://github.com/Narri520/Business-Go",
      liveDemo: "https://business-go.vercel.app",
      featured: false,
      badge: "Live Web App"
    }
  ],

  learningAndDevelopment: {
    title: "Learning & Development",
    subtitle: "Hands-on Technical Growth & Practice",
    areas: [
      {
        title: "Full-Stack Web Development",
        description: "Building responsive frontend UIs using React.js and robust backend REST APIs using Python FastAPI, Node.js, and Express.js with MySQL & MongoDB databases.",
        icon: "Layers"
      },
      {
        title: "DSA & Problem Solving",
        description: "Solving algorithmic problems daily in Python on LeetCode and competitive programming platforms, strengthening data structures, time complexity, and edge-case analysis.",
        icon: "Terminal"
      },
      {
        title: "Systems & Security Architecture",
        description: "Implementing field-level encryption (AES-256), JWT session security, input validation, and containerizing web services with Docker.",
        icon: "ShieldCheck"
      },
      {
        title: "Project Engineering & Git Workflow",
        description: "Managing software version control via Git/GitHub, writing structured README documentation, and deploying projects to cloud hosting environments.",
        icon: "GitBranch"
      }
    ]
  },

  certifications: [
    {
      name: "Python Programming",
      issuer: "Nxtwave",
      description: "Comprehensive certification covering Python syntax, data structures, object-oriented concepts, and functional programming.",
      badge: "Verified Certificate"
    },
    {
      name: "Data Base – My SQL",
      issuer: "Nxtwave",
      description: "Mastery of relational database design, complex SQL queries, indexing, joins, schema normalization, and database administration.",
      badge: "Verified Certificate"
    },
    {
      name: "Web Development – HTML, CSS, JS, REACT",
      issuer: "Nxtwave",
      description: "End-to-end full-stack frontend development certification focusing on semantic HTML5, modern CSS layouts, JavaScript ES6+, and React state management.",
      badge: "Verified Certificate"
    },
    {
      name: "Competitive Programming",
      issuer: "NPTEL",
      description: "National-level competitive programming course covering advanced data structures, dynamic programming, graph algorithms, and problem-solving techniques.",
      badge: "NPTEL Certified"
    }
  ],

  dsaStats: {
    resumeAchievement: "300+ Problems Solved",
    resumeNote: "Solved 300+ problems on LeetCode and other coding platforms (GeeksforGeeks, NPTEL, HackerRank)",
    leetcodeUsername: "Narri05",
    leetcodeProfileUrl: "https://leetcode.com/u/Narri05/",
    liveData: {
      totalSolved: 103,
      easySolved: 77,
      mediumSolved: 25,
      hardSolved: 1,
      topLanguage: "Python 3",
      globalRanking: "1.6M+",
      topicsCovered: [
        "Arrays & Matrices",
        "Strings & Hashing",
        "Binary Search",
        "Two Pointers & Sliding Window",
        "Trees & Binary Trees",
        "Stack & Queue",
        "Greedy & Mathematics"
      ]
    }
  },

  achievements: [
    {
      title: "300+ Problems Solved",
      description: "Solved 300+ algorithmic problems across LeetCode, GeeksforGeeks, and competitive programming platforms.",
      icon: "Award"
    },
    {
      title: "Coding Contests & Hackathons",
      description: "Participated in coding contests and hackathons, demonstrating analytical thinking under time constraints.",
      icon: "Trophy"
    },
    {
      title: "Strong DSA Foundation",
      description: "Developed deep understanding of Data Structures and Algorithms including Arrays, Trees, Graphs, and Dynamic Programming.",
      icon: "Brain"
    },
    {
      title: "Consistent Problem Solving",
      description: "Consistently practiced competitive programming in Python, writing efficient algorithms with low space-time complexity.",
      icon: "Zap"
    }
  ]
};
