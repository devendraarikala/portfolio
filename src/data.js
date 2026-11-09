// Single source of truth for all portfolio content. Edit here.
// Placeholder URLs are marked TODO — replace them with your real links.
export const profile = {
  name: "Arikala Devendra Kumar Reddy",
  title:
    "B.Tech CSE '28 | Full-Stack Developer | JavaScript | React.js | Node.js | Java | Python Basics",
  roles: [
    "Full Stack Developer",
    "Java Developer",
    "React.js Developer",
    "Software Engineering Enthusiast",
  ],
  location: "Kadapa, Andhra Pradesh, India",
  address:
    "Busi Reddy Palli, Chinta Komma Dinne, Kadapa, Andhra Pradesh, India",
  email: "devendraarikala@gmail.com",
  phone: "+91 8919167299",
  intro:
    "B.Tech Computer Science student building a strong foundation in web development, Java and problem solving — looking for a Full Stack Developer internship.",
};
export const links = {
  github: "https://github.com/devendraarikala", // TODO
  linkedin: "https://www.linkedin.com/in/devendraarikala",
  codechef: "https://www.codechef.com/users/devendra_a", // TODO
  leetcode: "https://leetcode.com/u/devendraarikala", // TODO
  hackerrank: "https://www.hackerrank.com/profile/devendraarikala", // TODO
};
export const about = [
  "I am a passionate Computer Science and Engineering student pursuing my B.Tech at Sri Venkateswara College of Engineering and Technology (SVCET), with a strong interest in Full Stack Development, Java programming, Data Structures and Algorithms, and problem-solving.",
  "I have a foundational understanding of frontend development, Java, JavaScript, React.js, Node.js, SQL, and web technologies, and I keep improving through coding practice and hands-on projects.",
  "I am eager to apply my technical knowledge, build real-world applications, gain industry experience, and contribute to innovative software solutions.",
];
export const aboutCards = [
  {
    title: "Education",
    text: "B.Tech CSE (2024–2028), CGPA 8.00/10 at SVCET.",
  },
  {
    title: "Coding Interests",
    text: "Java, DSA, competitive programming, full-stack web apps.",
  },
  {
    title: "Career Goal",
    text: "A Full Stack Developer internship to learn from real-world engineering teams.",
  },
];
// level: Foundational | Intermediate | Proficient — adjust honestly as you grow.
export const skills = [
  {
    category: "Programming Languages",
    icon: "code",
    items: [
      { name: "Java", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Python", level: "Foundational" },
    ],
  },
  {
    category: "Frontend Development",
    icon: "layout",
    items: [
      { name: "HTML5", level: "Intermediate" },
      { name: "CSS3", level: "Intermediate" },
      { name: "React.js", level: "Foundational" },
    ],
  },
  {
    category: "Backend Development",
    icon: "server",
    items: [
      { name: "Node.js", level: "Foundational" },
      { name: "Express.js", level: "Foundational" },
    ],
  },
  {
    category: "Database",
    icon: "db",
    items: [
      { name: "SQL", level: "Intermediate" },
      { name: "MySQL", level: "Foundational" },
      { name: "NoSQL", level: "Foundational" },
    ],
  },
  {
    category: "Core Computer Science",
    icon: "cpu",
    items: [
      { name: "Data Structures & Algorithms", level: "Intermediate" },
      { name: "Computer Networks", level: "Intermediate" },
      { name: "Operating Systems", level: "Intermediate" },
      { name: "Object-Oriented Programming", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "tool",
    items: [
      { name: "Git", level: "Foundational" },
      { name: "GitHub", level: "Foundational" },
      { name: "VS Code", level: "Intermediate" },
    ],
  },
];
export const levelPct = { Foundational: 40, Intermediate: 65, Proficient: 85 };
// No repos/demos exist yet: leave github/demo as null until real links are available.
export const projects = [
  {
    title: "Personal Expense Tracker",
    status: "Suggested project — in development",
    description:
      "A full-stack expense management application that helps users track income, expenses, and financial activities.",
    features: [
      "Add, edit, and delete transactions",
      "Income and expense categorization",
      "Monthly expense summaries",
      "Interactive charts and reports",
      "Dashboard with financial statistics",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    github: null,
    demo: null,
  },
  {
    title: "Student Management System",
    status: "Suggested project — in development",
    description:
      "A web-based application for managing student information and academic records.",
    features: [
      "Student registration and login",
      "Add, update, and delete student records",
      "Search and filter students",
      "Academic performance tracking",
      "Responsive admin dashboard",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MySQL"],
    github: null,
    demo: null,
  },
  {
    title: "Weather Forecast Application",
    status: "Suggested project — in development",
    description:
      "A responsive weather application that provides real-time weather information based on the user's selected city.",
    features: [
      "Search weather by city",
      "Temperature and weather conditions",
      "Humidity and wind speed",
      "Weather icons",
      "Responsive interface",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Weather API"],
    github: null,
    demo: null,
  },
];
export const experience = [
  {
    role: "AWS Cloud Computing Virtual Internship",
    org: "The SmartBridge",
    period: "Jan 2026 – Mar 2026",
    points: [
      "Gained hands-on exposure to AWS EC2, Amazon S3, DynamoDB, and Amazon VPC.",
      "Learned cloud computing, architecture, storage, databases, and networking.",
      "Understood cloud deployment concepts and AWS core services.",
    ],
    certUrl: `${import.meta.env.BASE_URL}certificates/aws-cloud.jpg`,
    badgeUrl:
      "https://www.credly.com/badges/09040592-5977-4d63-9ada-964c4b227835/public_url",
  },
  {
    role: "Cisco Cybersecurity Virtual Internship",
    org: "NIIT Foundation",
    period: "Aug 2026 – Sep 2026",
    points: [
      "Gained practical knowledge of TCP/IP, networking, cybersecurity fundamentals, and network attacks.",
      "Worked with concepts of network security, threats, vulnerabilities, and defensive techniques.",
      "Completed cybersecurity-focused training and virtual lab activities.",
    ],
    certUrl: `${import.meta.env.BASE_URL}certificates/cisco-cybersecurity.jpg`,
  },
];
export const education = [
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
    org: "Sri Venkateswara College of Engineering and Technology",
    period: "2024 – 2028",
    score: "CGPA: 8.00 / 10",
    location: "https://maps.google.com/?cid=12803784295745019202",
  },
  {
    degree: "Intermediate (MPC)",
    org: "Narayana Junior College",
    period: "2022 – 2024",
    score: "Percentage: 96.10%",
    location: "https://maps.google.com/?cid=745424551743196543",
  },
  {
    degree: "SSC (Secondary School)",
    org: "Sai Baba High School",
    period: "2021 – 2022",
    score: "Percentage: 87.60%",
    location: "https://maps.google.com/?cid=17039422236961470315",
  },
];
export const certifications = [
  {
    title: "Google Generative AI Foundations & Anti Gravity Workshop",
    org: "The SmartBridge",
    date: "Jul 2026",
    certUrl: `${import.meta.env.BASE_URL}certificates/google-antigravity.jpg`,
    badgeUrl:
      "https://www.credly.com/badges/09040592-5977-4d63-9ada-964c4b227835/public_url",
  },
  {
    title: "Python for Data Science",
    org: "IBM",
    date: "Mar 2026",
    certUrl:
      "https://courses.cognitiveclass.ai/certificates/c949cced861146b59bd2884131d177b4",
  },
  {
    title: "Java Problem Solving",
    org: "CodeChef",
    date: "May 2026",
    certUrl: "https://www.codechef.com/certificates/public/3dba41f",
  },
  {
    title: "Marketing Intern",
    org: "Bleep",
    date: "Nov 2026",
    certUrl: `${import.meta.env.BASE_URL}certificates/bleep-marketing-intern.pdf`,
  },
];

export const achievements = [
  { big: "100+", text: "Programming problems solved on CodeChef using Java" },
  {
    big: "DSA",
    text: "Actively practicing Data Structures & Algorithms in CodeChef & LeetCode",
  },
  {
    big: "Contests",
    text: "Participated in college-level coding rounds and competitions",
  },
  {
    big: "Lead",
    text: "Volunteered in college events and served as a team leader",
  },
];
export const languages = [
  { name: "Telugu", level: "Native / Bilingual" },
  { name: "English", level: "Professional Working Proficiency" },
];
// Gmail compose link: Gmail app on phones, Gmail website on computers.
const enc = encodeURIComponent;
const MAIL_SUBJECT = "Portfolio enquiry";
const MAIL_BODY = "Hi Devendra,\n\n";

export const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(profile.email)}&su=${enc(MAIL_SUBJECT)}&body=${enc(MAIL_BODY)}`;

export function openGmail(e) {
  const ua = navigator.userAgent;
  const isAndroid = /Android/i.test(ua);
  const isIOS =
    /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isAndroid) {
    e.preventDefault();
    window.location.href =
      `intent:mailto:${profile.email}?subject=${enc(MAIL_SUBJECT)}&body=${enc(MAIL_BODY)}` +
      `#Intent;scheme=mailto;package=com.google.android.gm;S.browser_fallback_url=${enc(gmailUrl)};end`;
  } else if (isIOS) {
    e.preventDefault();
    window.location.href = `googlegmail:///co?to=${enc(profile.email)}&subject=${enc(MAIL_SUBJECT)}&body=${enc(MAIL_BODY)}`;
    setTimeout(() => {
      if (!document.hidden) window.location.href = gmailUrl;
    }, 1200);
  }
  // Computers: the normal link opens Gmail compose in a new tab.
}
