import type { Project, ExperienceItem, TechCategory } from '../types';

export const projects: Project[] = [
  {
    title: "CatatCuan",
    description: {
      en: "Full-stack multi-tenant SaaS invoicing & billing management system built for MSMEs and freelancers. Engineered with React 19, Vite, and Tailwind CSS on the frontend, and Java Spring Boot 3 on the backend following layered architecture and OOP principles. Features JWT authentication with multi-tenant data isolation, client & invoice CRUD with automated numbering, invoice status lifecycle, and PDF invoice generation via iText.",
      id: "Aplikasi SaaS invoicing & billing multi-tenant end-to-end untuk UMKM dan freelancer: frontend React 19 + Vite + Tailwind CSS, backend Java Spring Boot 3 dengan arsitektur berlapis dan prinsip OOP. Mengimplementasikan autentikasi JWT dengan isolasi data multi-tenant, CRUD klien & invoice dengan penomoran otomatis, siklus status invoice, serta cetak faktur PDF via iText.",
    },
    techStack: ["Java Spring Boot 3", "React 19", "PostgreSQL", "JWT", "Docker", "Tailwind CSS", "Vite", "iText"],
    githubUrl: "https://github.com/azhmido/CatatCuan",
    demoUrl: "https://catatcuan-by-azhmido.vercel.app",
    image: "/images/catatcuan.jpg",
    problem: {
      en: "MSMEs and freelancers frequently face disorganized billing and manual invoice tracking, lacking secure multi-tenant data isolation, automated invoice numbering, and instant exportable PDF invoices.",
      id: "Pelaku UMKM dan freelancer kerap mengalami kesulitan mengelola faktur, penagihan, dan piutang tanpa adanya isolasi data multi-tenant yang aman, penomoran invoice otomatis, serta cetak faktur instan.",
    },
    approach: {
      en: "Designed and implemented a layered REST API (controller-service-repository) with Spring Boot 3 and OOP principles. Built JWT authentication & authorization with strict tenant data isolation, automated invoice numbering (INV-YYYY-XXXX), dynamic multi-item cost calculations, invoice status lifecycle (DRAFT/SENT/PAID/OVERDUE), PDF invoice printing via iText, 26 unit & integration tests, Postman API documentation, and containerized Docker deployment on Render with Supabase PostgreSQL.",
      id: "Merancang dan membangun REST API dengan Spring Boot 3 berarsitektur berlapis (controller-service-repository) dan prinsip OOP. Mengimplementasikan autentikasi & otorisasi JWT dengan isolasi data penuh antar-tenant, penomoran invoice otomatis (INV-YYYY-XXXX), kalkulasi item dinamis, siklus status invoice, cetak faktur PDF via iText, 26 unit/integration test, dokumentasi Postman, dan deploy backend kontainer Docker di Render dengan Supabase PostgreSQL.",
    },
    results: {
      en: "A production-ready full-stack application live on Vercel (frontend) and Render (backend) with Supabase PostgreSQL, verified by 26 automated tests and complete Postman collection documentation.",
      id: "Aplikasi production-ready yang sudah live di Vercel (frontend) dan Render (backend) dengan database PostgreSQL di Supabase, dilengkapi 26 unit/integration test serta koleksi Postman lengkap.",
    },
    highlights: ["Spring Boot 3", "Multi-Tenancy", "JWT Auth", "iText PDF Generator", "26 Tests", "Docker & Supabase"],
  },
  {
    title: "ExternaWear",
    description: {
      en: "Modern men's outerwear e-commerce platform built end-to-end with a polyrepo architecture (cleanly separated React frontend and Express.js backend). Features custom JWT authentication from scratch, Xendit payment gateway integration (sandbox mode) for realistic checkout workflows, structured PostgreSQL database, and a responsive Tailwind CSS interface.",
      id: "Platform e-commerce outerwear pria modern end-to-end: frontend React + Tailwind CSS, backend Express.js + PostgreSQL, dipisahkan bersih dalam arsitektur polyrepo (repository backend & frontend terpisah). Dilengkapi autentikasi JWT dari nol dan integrasi payment gateway Xendit (mode sandbox) agar alur checkout terasa senyata mungkin.",
    },
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Xendit API"],
    githubUrl: "https://github.com/azhmido/ExternaWear-Frontend",
    demoUrl: "https://externawear.vercel.app/",
    image: "/images/externawear.jpg",
    problem: {
      en: "Building a full-featured e-commerce platform requiring clean separation of frontend and backend in a polyrepo architecture, secure custom authentication, and realistic payment transaction workflows rather than static UI mockups.",
      id: "Tantangan arsitektur polyrepo — membangun platform e-commerce outerwear pria lengkap dengan pemisahan rapi repository frontend dan backend, autentikasi aman, dan simulasi transaksi checkout senyata mungkin.",
    },
    approach: {
      en: "Separated the frontend (React + Tailwind) and backend (Express.js + PostgreSQL) into dedicated repositories. Designed RESTful API endpoints with Express.js, implemented custom JWT authentication, and integrated the Xendit payment gateway API (sandbox mode) to process realistic transactions.",
      id: "Memisahkan frontend (React + Tailwind) dan backend (Express.js + PostgreSQL) dalam arsitektur polyrepo. Merancang REST API dengan Express.js, menerapkan autentikasi JWT dari nol, dan mengintegrasikan gateway pembayaran Xendit (mode sandbox) untuk simulasi transaksi yang aman.",
    },
    results: {
      en: "A fully functional e-commerce platform with responsive UI across all devices, structured PostgreSQL database management, verified Xendit checkout transactions, and live deployment on Vercel.",
      id: "Platform e-commerce fungsional dengan UI responsif di semua perangkat, skema database PostgreSQL yang terstruktur, integrasi checkout Xendit yang realistis, dan platform stabil yang sudah live di Vercel.",
    },
    highlights: ["Polyrepo architecture", "JWT authentication", "Xendit payment gateway", "PostgreSQL", "Live on Vercel"],
  },
  {
    title: "Stokura",
    description: {
      en: "Inventory & supply chain management system built with React during a 10-day sprint as the final project for React Fundamental training. Manages products, orders, and suppliers with CRUD operations, an automated purchase order workflow that dynamically recalculates stock levels, protected routes with login/register authentication, and localStorage persistence with an industrial dark theme and Framer Motion animations.",
      id: "Sistem manajemen inventaris & supply chain yang dibangun dengan React dalam 10 hari sebagai proyek akhir pelatihan React Fundamental. Mengelola produk, pesanan, dan pemasok dengan operasi CRUD, alur purchase order yang otomatis menyesuaikan stok, serta rute terproteksi dengan autentikasi login/register. Data tersimpan di localStorage dengan tema industrial gelap dan animasi Framer Motion.",
    },
    techStack: ["React", "React Router", "Tailwind CSS", "Framer Motion", "localStorage"],
    githubUrl: "https://github.com/azhmido/Stokura",
    demoUrl: "https://stokura.vercel.app/",
    image: "/images/stokura.jpg",
    problem: {
      en: "React Fundamental training final project — tasked with delivering a complete inventory & supply chain system within a strict 10-day deadline, integrating core React component state, client-side routing, protected routes, and data persistence.",
      id: "Pelatihan React Fundamental — membangun sistem inventaris & supply chain dengan React dalam batas waktu 10 hari sebagai proyek akhir (UAS), mengintegrasikan routing, rute terproteksi, manajemen state CRUD, dan persistensi data.",
    },
    approach: {
      en: "Architected client-side routing and protected routes using React Router, built CRUD modules for inventory, orders, and suppliers, implemented an automated purchase order workflow adjusting stock on receipt, and persisted all state to localStorage with preloaded demo data.",
      id: "Menggunakan React Router untuk navigasi dan rute terproteksi, merancang alur purchase order yang otomatis menyesuaikan level stok saat barang diterima, mengelola state CRUD produk & pemasok, serta menyimpan data di localStorage dengan pemuatan data demo.",
    },
    results: {
      en: "A highly functional and visually polished inventory management application with automated stock adjustments, protected navigation, reliable localStorage persistence, and live deployment on Vercel.",
      id: "Sistem manajemen inventaris & supply chain fungsional sekaligus enak dilihat dengan penyesuaian stok otomatis pada PO yang diterima, rute terproteksi, dan persistensi localStorage yang andal, live di Vercel.",
    },
    highlights: ["10-day sprint", "Protected routes", "Purchase order workflow", "localStorage persistence", "Live on Vercel"],
  },
  {
    title: "LAZADO",
    description: {
      en: "Fictional e-commerce web application built purely with vanilla HTML5, CSS, and JavaScript — no frameworks, no shortcuts. Features catalog data fetching from Fake Store API, manual cart state management, dark mode toggle using CSS custom properties, product detail modals, and custom animated toast notifications.",
      id: "Aplikasi e-commerce fiktif murni dengan vanilla HTML5, CSS, dan JavaScript — tanpa framework, tanpa jalan pintas. Mengambil data dari Fake Store API, mengelola state keranjang secara manual, serta membangun modal detail produk, dark mode toggle, dan notifikasi toast dari nol.",
    },
    techStack: ["HTML5", "CSS Vanilla", "JavaScript Vanilla", "Fake Store API"],
    githubUrl: "https://github.com/azhmido/LAZADO",
    image: "/images/lazado.jpg",
    problem: {
      en: "Web development fundamentals exploration — required building an interactive, production-grade e-commerce application solely with vanilla HTML5, CSS, and JavaScript without external libraries or frameworks.",
      id: "Eksplorasi fundamental web development — perlu membangun aplikasi web e-commerce fungsional hanya dengan vanilla HTML, CSS, dan JavaScript tanpa framework atau library eksternal.",
    },
    approach: {
      en: "Implemented asynchronous data fetching from Fake Store API, built custom cart state management in vanilla JS, created a dark mode toggle with CSS custom properties, and coded accessible modal popups and animated toast notifications from scratch.",
      id: "Mengambil data dari Fake Store API, mengelola state keranjang secara manual, serta membangun modal detail produk, toggle mode gelap dengan CSS custom properties, dan notifikasi toast animasi — semuanya dibangun dari nol.",
    },
    results: {
      en: "Deep mastery of DOM manipulation, browser APIs, and asynchronous programming often bypassed when jumping directly to modern frameworks, delivering a lightweight web app with zero dependencies.",
      id: "Hasilnya: pemahaman mendalam soal manipulasi DOM dan fundamental browser yang sering terlewat bila langsung loncat ke framework, menghasilkan aplikasi web tanpa dependensi yang cepat dan tangguh.",
    },
    highlights: ["Zero dependencies", "Pure DOM manipulation", "Fake Store API", "Dark mode & Toast notifications"],
  },
  {
    title: "Dutch Villa",
    description: {
      en: "Console-based CRUD villa booking application built with pure C and Windows API. Developed as the final project for Logic & Algorithm Programming training at PUB — featuring file-based data persistence, strict input validation, and an interactive console UI within a 10-day sprint.",
      id: "Aplikasi CRUD booking villa berbasis console dengan bahasa C murni dan Windows API, sebagai proyek akhir pelatihan Logika & Algoritma. Mengimplementasikan penyimpanan data berbasis file, validasi input ketat, dan UI console interaktif dalam batas waktu 10 hari.",
    },
    techStack: ["C", "MinGW GCC", "Windows API"],
    githubUrl: "https://github.com/azhmido/DUCTH-VILLA",
    image: "/images/dutch-villa.jpg",
    problem: {
      en: "Final project for Logic & Algorithm Programming training at PUB — tasked with building a full-featured CRUD villa booking system in pure C without modern frameworks within a strict 10-day deadline.",
      id: "Proyek akhir pelatihan Logika & Algoritma di PUB — membangun aplikasi CRUD booking villa berbasis console dengan bahasa C murni dan Windows API tanpa framework modern dalam batas waktu 10 hari.",
    },
    approach: {
      en: "Implemented file-based data persistence (file I/O) for booking records, built strict input validation routines to prevent invalid entries, and crafted an interactive console UI leveraging the Windows API for intuitive navigation.",
      id: "Merancang penyimpanan data berbasis file dan validasi input ketat untuk mencegah entri tidak valid, serta UI console interaktif menggunakan Windows API untuk navigasi yang jelas.",
    },
    results: {
      en: "Delivered on schedule within 10 days, featuring a clear console navigation flow, reliable booking data management, and resilient error handling without third-party frameworks.",
      id: "Diselesaikan tepat waktu dalam tenggat 10 hari, dengan navigasi console yang jelas dan sistem yang tetap andal tanpa framework modern.",
    },
    highlights: ["10-day sprint", "Pure C", "File-based persistence", "Windows API console UI"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: { en: "Jun - Aug 2026", id: "Jun - Agu 2026" },
    title: {
      en: "Student Mentor: Web Fundamentals (HTML, CSS, JavaScript)",
      id: "Mentor Pelatihan Web Dasar (HTML, CSS, JavaScript)",
    },
    org: {
      en: "PUB Scholarship Program, Universitas Nasional PASIM Bandung",
      id: "Program Beasiswa PUB, Universitas Nasional PASIM Bandung",
    },
    description: {
      en: "Mentored training participants in foundational web application development using semantic HTML5, modern CSS, and vanilla JavaScript DOM manipulation.",
      id: "Membimbing peserta pelatihan dalam pengembangan aplikasi web dasar menggunakan HTML, CSS, dan JavaScript.",
    },
    type: "experience",
  },
  {
    period: { en: "May - Sep 2026", id: "Mei - Sep 2026" },
    title: { en: "Java Fundamental (Ongoing)", id: "Java Fundamental (Sedang Berjalan)" },
    org: { en: "PUB Intensive Training", id: "Pelatihan Beasiswa PUB" },
    description: {
      en: "Mastering Java fundamentals including Object-Oriented Programming (OOP), exception handling, collections framework, and desktop GUI. Evaluated through quizzes, assignments, written midterm, and a 10-day final project presentation.",
      id: "Mempelajari fundamental Java termasuk OOP, exception handling, collections, dan GUI dasar. Setiap sesi mencakup kuis dan tugas; ujian tengah semester selesai, dan ujian akhir berupa proyek 10 hari plus presentasi. (Sedang berjalan)",
    },
    type: "training",
  },
  {
    period: { en: "Jan - Apr 2026", id: "Jan - Apr 2026" },
    title: {
      en: "Student Mentor: Data Structures & Databases",
      id: "Mentor Pelatihan Struktur Data dan Basis Data",
    },
    org: {
      en: "PUB Scholarship Program, Universitas Nasional PASIM Bandung",
      id: "Program Beasiswa PUB, Universitas Nasional PASIM Bandung",
    },
    description: {
      en: "Assisted participants in mastering complex data structures (linked lists, stacks, queues, trees) and relational database schema design with MySQL.",
      id: "Mendampingi peserta pelatihan dalam mempelajari konsep struktur data serta perancangan basis data.",
    },
    type: "experience",
  },
  {
    period: { en: "Jan - Apr 2026", id: "Jan - Apr 2026" },
    title: { en: "Advanced React", id: "React Lanjutan" },
    org: { en: "PUB Intensive Training", id: "Pelatihan Beasiswa PUB" },
    description: {
      en: "Deep dive into advanced React concepts: custom hooks, performance optimization, testing, and polyrepo architecture. Delivered ExternaWear as the 10-day final project (UAS) featuring JWT authentication, Xendit payment gateway, and PostgreSQL.",
      id: "Mendalami topik React lanjutan termasuk custom hooks, optimasi performa, pengujian, dan arsitektur aplikasi skala besar. Kuis mingguan, tugas, UTS, dan UAS berupa proyek implementasi 10 hari (ExternaWear) dengan arsitektur polyrepo, autentikasi JWT, gateway pembayaran Xendit, dan database PostgreSQL.",
    },
    type: "training",
  },
  {
    period: { en: "Sep - Dec 2025", id: "Sep - Des 2025" },
    title: {
      en: "Student Mentor: Logic & Algorithm Programming (C)",
      id: "Mentor Pelatihan Logika & Algoritma Pemrograman (Bahasa C)",
    },
    org: {
      en: "PUB Scholarship Program, Universitas Nasional PASIM Bandung",
      id: "Program Beasiswa PUB, Universitas Nasional PASIM Bandung",
    },
    description: {
      en: "Guided junior scholarship recipients in grasping foundational programming logic, memory pointers, and algorithmic problem-solving in pure C.",
      id: "Membimbing adik tingkat penerima Beasiswa PUB dalam memahami konsep dasar logika pemrograman dan algoritma menggunakan bahasa C.",
    },
    type: "experience",
  },
  {
    period: { en: "Sep - Dec 2025", id: "Sep - Des 2025" },
    title: { en: "React Fundamental", id: "React Fundamental" },
    org: { en: "PUB Intensive Training", id: "Pelatihan Beasiswa PUB" },
    description: {
      en: "Learned core React architecture: functional components, hooks, React Router, and Context API. Delivered Stokura as the 10-day final project featuring protected routes, purchase order workflows, and localStorage persistence.",
      id: "Mempelajari konsep inti React termasuk components, props, state, React Router, dan Context API. Kuis mingguan, tugas, UTS, dan UAS berupa proyek implementasi 10 hari — membangun sistem manajemen inventaris & supply chain (Stokura) dengan rute terproteksi dan persistensi localStorage.",
    },
    type: "training",
  },
  {
    period: { en: "Aug 2025", id: "Agu 2025" },
    title: { en: "Git & GitHub", id: "Git & GitHub" },
    org: { en: "PUB Intensive Training", id: "Pelatihan Beasiswa PUB" },
    description: {
      en: "Intensive 1-month training on version control workflows using Git and GitHub. Covered branching strategies, merge conflict resolution, pull requests, and collaborative agile workflows.",
      id: "Pelatihan intensif 1 bulan tentang version control menggunakan Git dan GitHub. Mencakup branching, merging, pull request, dan kolaborasi tim. Termasuk kuis, tugas, dan ujian akhir tertulis.",
    },
    type: "training",
  },
  {
    period: { en: "Jun - Aug 2025", id: "Jun - Agu 2025" },
    title: { en: "Web Fundamentals (HTML5, CSS3, JavaScript)", id: "Web Dasar (HTML5, CSS3, JavaScript)" },
    org: { en: "PUB Intensive Training", id: "Pelatihan Beasiswa PUB" },
    description: {
      en: "Mastered browser fundamentals and modern DOM manipulation without third-party frameworks. Delivered LAZADO as a 10-day final project e-commerce web app using Fake Store API, dark mode, modals, and toasts with zero dependencies.",
      id: "Mempelajari fundamental HTML5, CSS3, dan JavaScript vanilla tanpa framework. UAS berupa proyek implementasi 10 hari membangun aplikasi web e-commerce (LAZADO) dengan Fake Store API, mode gelap, popup modal, dan notifikasi toast — semuanya dibangun dari nol dengan nol dependensi.",
    },
    type: "training",
  },
  {
    period: { en: "Jan - May 2025", id: "Jan - Mei 2025" },
    title: { en: "Data Structures (C) & Databases (MySQL)", id: "Struktur Data (Bahasa C) & Basis Data (MySQL)" },
    org: { en: "PUB Intensive Training", id: "Pelatihan Beasiswa PUB" },
    description: {
      en: "Implemented fundamental data structures (linked lists, stacks, queues, binary trees) in C and studied relational database modeling and SQL queries with MySQL. Evaluated via regular quizzes, assignments, and written midterm/final exams.",
      id: "Mempelajari struktur data menggunakan C (linked list, stack, queue, tree) dan perancangan basis data relasional menggunakan MySQL. Setiap sesi mencakup kuis dan tugas, dengan ujian tengah semester tertulis dan ujian akhir tertulis.",
    },
    type: "training",
  },
  {
    period: { en: "Sep - Dec 2024", id: "Sep - Des 2024" },
    title: { en: "Logic & Algorithm Programming (C)", id: "Logika & Algoritma Pemrograman (Bahasa C)" },
    org: { en: "PUB Intensive Training", id: "Pelatihan Beasiswa PUB" },
    description: {
      en: "Mastered algorithmic thinking, pointer arithmetic, and data types using pure C. Delivered Dutch Villa as the 10-day final project — a console CRUD villa booking application with file-based persistence and Windows API.",
      id: "Mempelajari logika algoritmik menggunakan bahasa C. Kuis mingguan, tugas, ujian tengah semester, dan UAS berupa proyek implementasi 10 hari — membangun aplikasi CRUD booking villa (Dutch Villa) dengan penyimpanan data berbasis file dan UI console Windows API.",
    },
    type: "training",
  },
  {
    period: { en: "Sept 2024 - Present", id: "Sept 2024 – Sekarang" },
    title: { en: "Diploma III in Informatics Management (GPA 3.78 / 4.00)", id: "D3 Manajemen Informatika (IPK 3.78 / 4.00)" },
    org: { en: "Universitas Nasional PASIM Bandung", id: "Universitas Nasional PASIM Bandung" },
    description: {
      en: "Recipient of the prestigious Pemberdayaan Ummat Berkelanjutan (PUB) scholarship. Enrolled in an accelerated 3-to-2-year program through intensive short semesters at the end of each even semester, combining high academic achievement with hands-on software engineering.",
      id: "IPK 3.78 / 4.00. Penerima Beasiswa Pemberdayaan Ummat Berkelanjutan (PUB) dengan program akselerasi studi dari 3 menjadi 2 tahun melalui semester pendek di setiap akhir semester genap. Menjalani kurikulum akademik unggul bersamaan dengan pelatihan pemrograman intensif berkelanjutan.",
    },
    type: "education",
  },
];

export const personalInfo = {
  name: "Ahmad Zaki Hossam Mido",
  nickname: "Mido",
  role: {
    en: "Full-Stack & Backend Developer · Java Spring Boot, Node.js & React.js",
    id: "Full-Stack & Backend Developer · Java Spring Boot, Node.js & React.js",
  },
  tagline: {
    en: "Building reliable, scalable, and high-performance web applications with a strong foundation in OOP and database architecture.",
    id: "Membangun aplikasi web yang andal, scalable, dan berkinerja tinggi dengan fondasi kuat pada OOP dan arsitektur database.",
  },
  about: [
    {
      en: "Full-Stack and Backend Developer with 2 years of experience building end-to-end web applications using Java Spring Boot, Node.js/Express, and React. Demonstrating a strong track record in designing reliable RESTful APIs, payment gateway integrations, and live production deployments. Skilled in collaborating within agile teams as well as working independently with a solid foundation in Object-Oriented Programming (OOP) and database architecture.",
      id: "Full-Stack dan Backend Developer dengan pengalaman 2 tahun membangun aplikasi web end-to-end menggunakan Java Spring Boot, Node.js/Express, dan React. Memiliki rekam jejak kuat dalam merancang RESTful API yang andal, integrasi payment gateway, hingga deployment live pada produksi. Terampil berkolaborasi dalam tim maupun bekerja mandiri dengan fondasi kuat pada OOP dan arsitektur database.",
    },
    {
      en: "Currently pursuing a Diploma III in Informatics Management at Universitas Nasional PASIM Bandung (GPA 3.78 / 4.00) under the Pemberdayaan Ummat Berkelanjutan (PUB) 2-year accelerated scholarship. Actively entrusted as a Student Mentor guiding junior peers in Logic & Algorithms (C), Data Structures & Databases, and Web Fundamentals.",
      id: "Mahasiswa D3 Manajemen Informatika di Universitas Nasional PASIM Bandung (IPK 3.78 / 4.00) penerima Beasiswa Pemberdayaan Ummat Berkelanjutan (PUB) program akselerasi 2 tahun. Aktif dipercaya menjadi Mentor Pelatihan adik tingkat dalam mata kuliah Logika Algoritma (C), Struktur Data & Basis Data, dan Web Dasar.",
    },
  ],
  technologies: [
    {
      category: { en: "Programming Languages", id: "Bahasa Pemrograman" },
      items: ["Java", "JavaScript", "TypeScript", "SQL", "HTML5 & CSS3", "PHP", "C", "C++"],
    },
    {
      category: { en: "Frameworks & Libraries", id: "Framework & Library" },
      items: [
        "Spring Boot",
        "Spring Data JPA",
        "Spring Security",
        "Hibernate/JPA",
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "React",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "Thymeleaf",
      ],
    },
    {
      category: { en: "Databases", id: "Basis Data" },
      items: ["PostgreSQL", "MySQL", "Supabase"],
    },
    {
      category: { en: "Tools, DevOps & Deployment", id: "Tools & Teknologi" },
      items: ["Docker", "Git & GitHub", "Postman", "Render", "Vercel"],
    },
    {
      category: { en: "APIs & Integrations", id: "API & Integrasi" },
      items: ["RESTful API", "Xendit API", "iText PDF API"],
    },
    {
      category: { en: "Concepts & Architecture", id: "Konsep & Metodologi" },
      items: [
        "Desain RESTful API",
        "Object-Oriented Programming (OOP)",
        "Arsitektur Berlapis",
        "Arsitektur Polyrepo",
        "Arsitektur Monorepo",
        "Multi-Tenancy",
        "JWT Authentication",
        "RBAC",
        "Agile / Git Workflow",
      ],
    },
  ] as TechCategory[],
  contact: {
    email: "az.hossammido@gmail.com",
    phone: "+62 812-6377-1546",
    location: "Bandung, Jawa Barat, Indonesia",
  },
  social: {
    github: "https://github.com/azhmido",
    linkedin: "https://www.linkedin.com/in/azhmido/",
  },
};
