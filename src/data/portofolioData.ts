import type { Project, StatItem, ExperienceItem, TechCategory } from '../types';

export const projects: Project[] = [
  {
    title: "Dutch Villa",
    description: {
      en: "Console-based CRUD booking villa application built with C and Windows API. Developed as a final project for Logic & Algorithm Programming training at PUB - implementing file-based data persistence, input validation, and interactive console UI within a 10-day sprint.",
      id: "Aplikasi CRUD booking villa berbasis console yang dibangun dengan C dan Windows API. Dikembangkan sebagai proyek akhir pelatihan Logic & Algorithm Programming di PUB - mengimplementasikan penyimpanan data berbasis file, validasi input, dan UI console interaktif dalam sprint 10 hari.",
    },
    techStack: ["C", "MinGW GCC", "Windows API"],
    githubUrl: "https://github.com/azhmido/DUCTH-VILLA",
    image: "/images/dutch-villa.jpg",
    problem: {
      en: "Final project for the Logic & Algorithm Programming training at PUB - required building a CRUD villa booking application in pure C, without any frameworks, within a 10-day deadline.",
      id: "Proyek akhir pelatihan Logic & Algorithm Programming di PUB - perlu membangun aplikasi CRUD booking villa dengan bahasa C murni, tanpa framework, dalam batas waktu 10 hari.",
    },
    approach: {
      en: "Implemented file-based data persistence for booking storage, input validation to prevent invalid entries, and an interactive console UI using the Windows API for intuitive navigation.",
      id: "Menerapkan penyimpanan data berbasis file untuk menyimpan data booking, validasi input untuk mencegah entri tidak valid, dan UI console interaktif menggunakan Windows API untuk navigasi yang intuitif.",
    },
    results: {
      en: "A fully functional CRUD application delivered on time, featuring a clear console navigation system, reliable booking data management, and strict input validation.",
      id: "Aplikasi CRUD fungsional yang selesai tepat waktu dengan sistem navigasi console yang jelas, manajemen data booking yang andal, dan validasi input yang ketat.",
    },
    highlights: ["10-day sprint", "File-based persistence", "Input validation", "Windows API"],
  },
  {
    title: "LAZADO",
    description: {
      en: "Fictional e-commerce web app built purely with vanilla HTML5, CSS, and JavaScript - no frameworks or libraries. Features data fetching from Fake Store API, cart state management, dark mode toggle, modal popups, and animated toast notifications. A deliberate exercise in mastering browser fundamentals.",
      id: "Aplikasi web e-commerce fiktif yang dibangun murni dengan vanilla HTML5, CSS, dan JavaScript - tanpa framework atau library. Fitur meliputi pengambilan data dari Fake Store API, manajemen state keranjang, toggle mode gelap, popup modal, dan notifikasi toast animasi. Latihan yang disengaja dalam menguasai fundamental browser.",
    },
    techStack: ["HTML5", "CSS Vanilla", "JavaScript Vanilla", "Fake Store API"],
    githubUrl: "https://github.com/azhmido/LAZADO",
    image: "/images/lazado.jpg",
    problem: {
      en: "A web development fundamentals exploration - needed to build a functional e-commerce web app using only vanilla HTML, CSS, and JavaScript without any frameworks or external libraries.",
      id: "Eksplorasi fundamental web development - perlu membangun aplikasi web e-commerce fungsional hanya dengan vanilla HTML, CSS, dan JavaScript tanpa framework atau library eksternal.",
    },
    approach: {
      en: "Implemented data fetching from the Fake Store API, manual cart state management, dark mode toggle with CSS custom properties, product detail modal popups, and animated toast notifications - all built from scratch.",
      id: "Mengimplementasikan pengambilan data dari Fake Store API, manajemen state keranjang secara manual, toggle mode gelap dengan CSS custom properties, popup modal detail produk, dan notifikasi toast animasi - semuanya dibangun dari nol.",
    },
    results: {
      en: "A fully functional e-commerce web app with zero dependencies - demonstrating deep mastery of DOM manipulation, API integration, and browser fundamentals.",
      id: "Aplikasi web e-commerce yang sepenuhnya fungsional dengan nol dependensi - menunjukkan penguasaan mendalam manipulasi DOM, integrasi API, dan fundamental browser.",
    },
    highlights: ["Zero dependencies", "Fake Store API", "Dark mode", "Toast notifications"],
  },
  {
    title: "Stokura",
    description: {
      en: "Inventory & supply chain management system built with React during the React Fundamental training. Manages products, orders, and suppliers with CRUD operations, a purchase order workflow that auto-adjusts stock, and protected routes with login/register. Data persists in localStorage with a dark industrial theme and Framer Motion animations.",
      id: "Sistem manajemen inventaris & supply chain yang dibangun dengan React selama pelatihan React Fundamental. Mengelola produk, pesanan, dan pemasok dengan operasi CRUD, alur purchase order yang menyesuaikan stok secara otomatis, serta rute terproteksi dengan login/register. Data tersimpan di localStorage dengan tema industrial gelap dan animasi Framer Motion.",
    },
    techStack: ["React", "React Router", "Tailwind CSS", "Framer Motion", "localStorage"],
    githubUrl: "https://github.com/azhmido/Stokura",
    demoUrl: "https://stokura.vercel.app/",
    image: "/images/stokura.jpg",
    problem: {
      en: "React Fundamental training - required building an inventory & supply chain system within a 10-day deadline, integrating multiple React concepts including routing, protected routes, CRUD state management, and data persistence.",
      id: "Pelatihan React Fundamental - perlu membangun sistem inventaris & supply chain dalam batas waktu 10 hari yang mengintegrasikan berbagai konsep React termasuk routing, rute terproteksi, manajemen state CRUD, dan persistensi data.",
    },
    approach: {
      en: "Used React Router for page navigation and protected routes, implemented CRUD for inventory, orders, and suppliers, built a purchase order workflow that automatically adjusts stock levels, and persisted all data in localStorage with demo data loading.",
      id: "Menggunakan React Router untuk navigasi halaman dan rute terproteksi, menerapkan CRUD untuk inventaris, pesanan, dan pemasok, membangun alur purchase order yang menyesuaikan level stok secara otomatis, serta menyimpan semua data di localStorage dengan pemuatan data demo.",
    },
    results: {
      en: "A functional inventory & supply chain system with CRUD management, automatic stock adjustments on received POs, protected routes, and reliable localStorage persistence with a polished dark UI and smooth animations.",
      id: "Sistem inventaris & supply chain yang fungsional dengan manajemen CRUD, penyesuaian stok otomatis pada PO yang diterima, rute terproteksi, dan persistensi localStorage yang andal dengan UI gelap yang rapi serta animasi halus.",
    },
    highlights: ["Protected routes", "CRUD inventory + suppliers", "Purchase order workflow", "localStorage persistence"],
  },
  {
    title: "ExternaWear",
    description: {
      en: "Modern men's outerwear e-commerce platform with a monorepo architecture - separate React frontend and Express.js backend. Features JWT authentication, Xendit payment gateway integration, PostgreSQL database management, and responsive UI with Tailwind CSS.",
      id: "Platform e-commerce outerwear pria modern dengan arsitektur monorepo - frontend React dan backend Express.js terpisah. Fitur autentikasi JWT, integrasi gateway pembayaran Xendit, manajemen database PostgreSQL, dan UI responsif dengan Tailwind CSS.",
    },
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Xendit API"],
    githubUrl: "https://github.com/azhmido/ExternaWear-Frontend",
    demoUrl: "https://externawear.vercel.app/",
    image: "/images/externawear.jpg",
    problem: {
      en: "Monorepo architecture challenge - required building a complete e-commerce platform with authentication, payment gateway integration, and robust database management.",
      id: "Tantangan arsitektur monorepo - perlu membangun platform e-commerce lengkap dengan autentikasi, integrasi gateway pembayaran, dan manajemen database yang kokoh.",
    },
    approach: {
      en: "Separated frontend (React + Tailwind) and backend (Express.js + PostgreSQL) within a monorepo. Implemented JWT authentication, Xendit payment gateway integration for transactions, and a responsive UI with Tailwind CSS.",
      id: "Memisahkan frontend (React + Tailwind) dan backend (Express.js + PostgreSQL) dalam monorepo. Menerapkan autentikasi JWT, integrasi gateway pembayaran Xendit untuk transaksi, dan UI responsif dengan Tailwind CSS.",
    },
    results: {
      en: "A functional e-commerce platform with secure user authentication, payment processing via Xendit, a structured PostgreSQL database, and a responsive layout across all devices.",
      id: "Platform e-commerce fungsional dengan autentikasi pengguna yang aman, pemrosesan pembayaran via Xendit, database PostgreSQL yang terstruktur, dan tata letak responsif di semua perangkat.",
    },
    highlights: ["Monorepo architecture", "JWT authentication", "Xendit payment", "PostgreSQL"],
  },
];

export const stats: StatItem[] = [
  { label: { en: "Projects Built", id: "Proyek Dibangun" }, value: { en: "4", id: "4" } },
  { label: { en: "Technologies", id: "Teknologi" }, value: { en: "15+", id: "15+" } },
  { label: { en: "Experience", id: "Pengalaman" }, value: { en: "2 Years", id: "2 Tahun" } },
  { label: { en: "Certifications", id: "Sertifikasi" }, value: { en: "5+", id: "5+" } },
];

export const experiences: ExperienceItem[] = [
  {
    period: { en: "2024 - Present", id: "2024 - Sekarang" },
    title: { en: "Diploma III in Information Management", id: "Diploma III Manajemen Informatika" },
    org: { en: "Universitas Nasional Pasim", id: "Universitas Nasional Pasim" },
    description: {
      en: "PUB (Pemberdayaan Ummat Berkelanjutan) scholarship student with an accelerated 3-to-2-year program through short semesters at the end of each even semester. Following an intensive programming training program that includes weekly quizzes, assignments, midterms, and final exams consisting of a 10-day project plus presentation.",
      id: "Mahasiswa beasiswa PUB (Pemberdayaan Ummat Berkelanjutan) dengan program akselerasi 3-ke-2 tahun melalui semester pendek di akhir setiap semester genap. Menjalani program pelatihan pemrograman intensif yang mencakup kuis mingguan, tugas, ujian tengah semester, dan ujian akhir berupa proyek 10 hari plus presentasi.",
    },
    type: "education",
  },
  {
    period: { en: "Sep - Dec 2024", id: "Sep - Des 2024" },
    title: { en: "Logic & Algorithm Programming", id: "Pemrograman Logika & Algoritma" },
    org: { en: "PUB Training", id: "Pelatihan PUB" },
    description: {
      en: "Learned algorithmic logic using the C language. Weekly quizzes, assignments, midterms, and a 10-day final project - building a CRUD villa booking application (Dutch Villa) with file-based data persistence and Windows API console UI.",
      id: "Mempelajari logika algoritmik menggunakan bahasa C. Kuis mingguan, tugas, ujian tengah semester, dan proyek akhir 10 hari - membangun aplikasi CRUD booking villa (Dutch Villa) dengan penyimpanan data berbasis file dan UI console Windows API.",
    },
    type: "training",
  },
  {
    period: { en: "Jan - May 2025", id: "Jan - Mei 2025" },
    title: { en: "Data Structure & Database", id: "Struktur Data & Database" },
    org: { en: "PUB Training", id: "Pelatihan PUB" },
    description: {
      en: "Studied data structures using C (linked lists, stacks, queues, trees) and database management using MySQL. Each session includes quizzes and assignments, with a written midterm exam and a written final exam.",
      id: "Mempelajari struktur data menggunakan C (linked list, stack, queue, tree) dan manajemen database menggunakan MySQL. Setiap sesi mencakup kuis dan tugas, dengan ujian tengah semester tertulis dan ujian akhir tertulis.",
    },
    type: "training",
  },
  {
    period: { en: "Jun - Aug 2025", id: "Jun - Agu 2025" },
    title: { en: "Web Fundamentals", id: "Fundamental Web" },
    org: { en: "PUB Training", id: "Pelatihan PUB" },
    description: {
      en: "Learned vanilla HTML5, CSS3, and JavaScript fundamentals without any frameworks. 10-day final project building an e-commerce web app (LAZADO) with Fake Store API, dark mode, modal popups, and toast notifications - all built from scratch with zero dependencies.",
      id: "Mempelajari fundamental HTML5, CSS3, dan JavaScript vanilla tanpa framework. Proyek akhir 10 hari membangun aplikasi web e-commerce (LAZADO) dengan Fake Store API, mode gelap, popup modal, dan notifikasi toast - semuanya dibangun dari awal dengan nol dependensi.",
    },
    type: "training",
  },
  {
    period: { en: "Aug 2025", id: "Agu 2025" },
    title: { en: "Git & GitHub", id: "Git & GitHub" },
    org: { en: "PUB Training", id: "Pelatihan PUB" },
    description: {
      en: "Intensive 1-month training on version control using Git and GitHub. Covered branching, merging, pull requests, and team collaboration. No midterm exam. Includes quizzes, assignments, and a written final exam.",
      id: "Pelatihan intensif 1 bulan tentang version control menggunakan Git dan GitHub. Mencakup branching, merging, pull request, dan kolaborasi tim. Tidak ada ujian tengah semester. Termasuk kuis, tugas, dan ujian akhir tertulis.",
    },
    type: "training",
  },
  {
    period: { en: "Sep - Dec 2025", id: "Sep - Des 2025" },
    title: { en: "React Fundamental", id: "React Fundamental" },
    org: { en: "PUB Training", id: "Pelatihan PUB" },
    description: {
      en: "Learned core React concepts including components, props, state, React Router, and Context API. Weekly quizzes, assignments, midterms, and a 10-day final project - building an inventory & supply chain management system (Stokura) with protected routes and localStorage persistence.",
      id: "Mempelajari konsep inti React termasuk components, props, state, React Router, dan Context API. Kuis mingguan, tugas, ujian tengah semester, dan proyek akhir 10 hari - membangun sistem manajemen inventaris & supply chain (Stokura) dengan rute terproteksi dan persistensi localStorage.",
    },
    type: "training",
  },
  {
    period: { en: "Jan - Jun 2026", id: "Jan - Jun 2026" },
    title: { en: "React Advanced", id: "React Lanjutan" },
    org: { en: "PUB Training", id: "Pelatihan PUB" },
    description: {
      en: "Deep-dive into advanced React topics including custom hooks, performance optimization, testing, and large-scale application architecture. Weekly quizzes, assignments, midterms, and a 10-day final project (UAS) - building an e-commerce platform (ExternaWear) with a monorepo architecture, JWT authentication, Xendit payment gateway, and PostgreSQL database.",
      id: "Mendalami topik React lanjutan termasuk custom hooks, optimasi performa, pengujian, dan arsitektur aplikasi skala besar. Kuis mingguan, tugas, ujian tengah semester, dan proyek akhir 10 hari (UAS) - membangun platform e-commerce (ExternaWear) dengan arsitektur monorepo, autentikasi JWT, gateway pembayaran Xendit, dan database PostgreSQL.",
    },
    type: "training",
  },
  {
    period: { en: "May - Sep 2026", id: "Mei - Sep 2026" },
    title: { en: "Java Fundamental", id: "Java Fundamental" },
    org: { en: "PUB Training", id: "Pelatihan PUB" },
    description: {
      en: "Learning Java fundamentals including OOP, exception handling, collections, and basic GUI. Each session includes quizzes and assignments. Midterm exam completed; the final exam will be a 10-day project plus presentation. (Currently ongoing)",
      id: "Mempelajari fundamental Java termasuk OOP, exception handling, collections, dan GUI dasar. Setiap sesi mencakup kuis dan tugas. Ujian tengah semester selesai; ujian akhir akan berupa proyek 10 hari plus presentasi. (Sedang berlangsung)",
    },
    type: "training",
  },
];

export const personalInfo = {
  name: "Ahmad Zaki Hossam Mido",
  nickname: "Mido",
  role: {
    en: "Full-Stack Developer · Java Spring Boot & React.js Enthusiast",
    id: "Full-Stack Developer · Antusias Java Spring Boot & React.js",
  },
  tagline: {
    en: "Building performant, clean, and structured web applications with a strong algorithmic foundation.",
    id: "Membangun aplikasi web yang performan, bersih, dan terstruktur dengan fondasi algoritmik yang kuat.",
  },
  about: [
    {
      en: "I am an Informatics student with a deep passion for software engineering, particularly full-stack web development. I enjoy solving complex problems through strong algorithmic logic and writing efficient, maintainable code.",
      id: "Saya adalah mahasiswa Informatika dengan minat mendalam pada rekayasa perangkat lunak, khususnya pengembangan web full-stack. Saya senang memecahkan masalah kompleks melalui logika algoritmik yang kuat dan menulis kode yang efisien serta mudah dirawat.",
    },
    {
      en: "Through a combination of academic coursework and self-directed projects, I continuously deepen my understanding of modern system architecture, relational database management, and application performance optimization.",
      id: "Melalui kombinasi perkuliahan akademik dan proyek mandiri, saya terus memperdalam pemahaman tentang arsitektur sistem modern, manajemen database relasional, dan optimasi performa aplikasi.",
    },
  ],
  technologies: [
    { category: { en: "Languages", id: "Bahasa Pemrograman" }, items: ["Java", "JavaScript", "TypeScript", "PHP", "C", "HTML", "CSS"] },
    { category: { en: "Frontend", id: "Frontend" }, items: ["React", "Tailwind CSS"] },
    { category: { en: "Backend", id: "Backend" }, items: ["Express.js", "Node.js"] },
    { category: { en: "Database", id: "Database" }, items: ["PostgreSQL", "MySQL", "Supabase"] },
    { category: { en: "DevOps & Tools", id: "DevOps & Tools" }, items: ["Git", "GitHub", "Docker", "Postman", "Vercel"] },
    { category: { en: "APIs & Payments", id: "API & Pembayaran" }, items: ["Xendit API"] },
  ] as TechCategory[],
  contact: {
    email: "az.hossammido@gmail.com",
  },
  social: {
    github: "https://github.com/azhmido",
    linkedin: "https://www.linkedin.com/in/azhmido/",
  },
};
