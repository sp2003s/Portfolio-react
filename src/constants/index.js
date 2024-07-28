import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I am a dedicated and enthusiastic Software Engineer with a strong foundation in both front-end and back-end technologies. With hands-on experience gained through internships and academic projects, I have developed a solid skill set in technologies like React, Django, Node.js, MySQL, and MongoDB, as well as expertise in AI and machine learning. My education at Vellore Institute of Technology has further honed my abilities in various programming languages and tools.`;

export const ABOUT_TEXT = `I am Shaurya Pratap Singh, an Information Technology student at Vellore Institute of Technology with a strong academic record (CGPA: 9.11). Proficient in languages like C++, Java, and Python. My experience includes a Python and Django internship at BlackBox IP and creating innovative projects like a travel companion matching platform and a music recommender system. With certifications in Python and Machine Learning, I am passionate about solving real-world problems through technology and continuous learning. Additionally, I have a keen interest in machine learning, data science, and cyber forensics, where I have successfully applied my skills in various hackathons and research initiatives. My goal is to leverage my technical expertise and problem-solving abilities to contribute to cutting-edge technological advancements and impactful solutions.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Sept 2023",
    role: "Python Programmer and Django Developer",
    company: "BlackBox IP, Noida",
    description: `Developed advanced OCR solutions to extract structured data from image PDFs, with more than 98% accuracy and reducing manual data entry. 
    Created algorithm for efficient data extraction, processing and storage, enhancing accuracy and saving time and resources. 
    Led API development integrating secure access via JWT Web Token and deploying the
    application using elastic IP for streamlined workflow efficiency`,
    technologies: ["Python", "PyTesseract(OCR)", "OpenCV", "Django", "JWT Web Token"],
  },
  {
    year: "Feb 2023 - Mar 2024",
    role: "Core Committee Members",
    company: "IEEE-IAS",
    description: `Worked on minor projects to brush-up skills.
      I worked closely with other members to brainstorm and develop new ideas and work on them for hackathons 
      organized by the chapter. We focused on creating feasible and innovative ideas
      I contributed to various projects that were a part of chapter events`,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Web Development"],
  },
];

export const PROJECTS = [
  {
    title: "Travel Buddy Finder",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["EJS", "CSS", "Node.js", "MongoDB", "Express.JS", "mySQL", "Passport.js"],
    link: "https://github.com/sp2003s/TravelBuddyFinder",
  },
  {
    title: "Wild Connect",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.JS", "Express.js"],
    link: "https://github.com/sp2003s/Wild-Connect",
  },
  {
    title: "Notes Summarizer",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Django", "openCV", "OCR", "llama"],
    link: "https://github.com/sp2003s/Notes-Summarizer",
  },
  {
    title: "Disinformation Detection",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Flask", "Python", "File Handling"],
    link: "https://github.com/sp2003s/detecting-disinformation",
  },
  {
    title: "Linked List Visualizer",
    image: project5,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://github.com/sp2003s/ll-visualizer",
  },
  {
    title: "Music Recommender",
    image: project6,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Streamlit.io", "Python", "Count Vectorization", "Machine Learning"],
    link: "https://github.com/sp2003s/music-recommendation-system-using-vectorization",
  },
];

export const CONTACT = {
  intro: "I would love to hear from you."
};
