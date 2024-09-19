import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import image8 from  "../assets/projects/image8.jpg";

export const HERO_CONTENT = `I am a dedicated and enthusiastic Software Engineer with a strong foundation in both front-end and back-end technologies. With hands-on experience gained through internships and academic projects, I have developed a solid skill set in technologies like React, Django, Node.js, MySQL, and MongoDB, as well as expertise in AI and machine learning.`;

export const ABOUT_TEXT = `I am Shaurya Pratap Singh, an Information Technology student at Vellore Institute of Technology. Proficient in languages like C++, Java, and Python. My experience includes a Python and Django internship at BlackBox IP and creating innovative projects like a travel companion matching platform and a music recommender system. I am passionate about solving real-world problems through technology and continuous learning. Additionally, I have a keen interest in machine learning and data science, where I have successfully applied my skills in various hackathons and research initiatives.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Sept 2023",
    role: "Python Programmer and Django Developer",
    company: "BlackBox IP",
    description: `Developed advanced OCR solutions to extract structured data from image PDFs, with more than 98% accuracy and reducing manual data entry. 
    Created algorithm for efficient data extraction, processing and storage, enhancing accuracy and saving time and resources. 
    Led API development integrating secure access via JWT Web Token and deploying the
    application using elastic IP for streamlined workflow efficiency.`,
    technologies: ["Python", "PyTesseract(OCR)", "OpenCV", "Django", "JWT Web Token"],
  },
  {
    year: "Feb 2023 - Mar 2024",
    role: "Core Committee Members",
    company: "IEEE-IAS",
    description: `Worked on minor projects to brush-up skills.
      I worked closely with other members to brainstorm and develop new ideas and work on them for hackathons 
      organized by the chapter. We focused on creating feasible and innovative ideas
      I contributed to various projects that were a part of chapter events.`,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Web Development"],
  },
];

export const PROJECTS = [
  {
    title: "Travel Buddy Finder",
    image: project1,
    description:
      "A fully functional website to address the challenges of solo travel, high costs, and missed opportunities for meaningful connections.",
    technologies: ["EJS", "CSS", "Node.js", "MongoDB", "Express.JS", "mySQL", "Passport.js"],
    link: "https://github.com/sp2003s/TravelBuddyFinder",
  },
  {
    title: "Spotify Clone",
    image: image8,
    description:
      "A MERN stack project, tried cloning Spotify",
    technologies: ["React", "MongoDB", "Tailwind CSS", "Cloudinary", "NodeJS", "ExpressJS"],
    link: "https://github.com/sp2003s/spotify-clone-react",
  },
  {
    title: "Wild Connect",
    image: project3,
    description:
      "A website to connect poeple willing to volunteer to protect and preserve wildlife. Allows posting such events, jobs and materials.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.JS", "Express.js"],
    link: "https://github.com/sp2003s/Wild-Connect",
  },
  {
    title: "Notes Summarizer",
    image: project4,
    description:
      "A Django Web Application to summarize notes. Be it text or image PDF, the application can summarize it and return a PDF.",
    technologies: ["HTML", "CSS", "Django", "openCV", "OCR", "llama"],
    link: "https://github.com/sp2003s/Notes-Summarizer",
  },
  {
    title: "Disinformation Detection",
    image: project2,
    description:
      "A webapp to detect disinformation and its sensitivity. Includes Python algorithm to verify news",
    technologies: ["HTML", "CSS", "Flask", "Python", "File Handling"],
    link: "https://github.com/sp2003s/detecting-disinformation",
  },
  {
    title: "Linked List Visualizer",
    image: project5,
    description:
      "A visual representation of linked list data structure, allowing users to interact with and manipulate the list by adding, modifying, and deleting nodes",
    technologies: ["HTML", "CSS", "React"],
    link: "https://github.com/sp2003s/ll-visualizer",
  },
  {
    title: "Music Recommender",
    image: project6,
    description:
      "Built a music recommender using ML vectorization on a Kaggle dataset, with a Streamlit.io frontend.",
    technologies: ["Streamlit.io", "Python", "Count Vectorization", "Machine Learning"],
    link: "https://github.com/sp2003s/music-recommendation-system-using-vectorization",
  },
  {
    title: "Tic Tac Toe",
    image: project7,
    description:
      "A small Tic Tac Toe game made using React.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/sp2003s/tic-tac-toe-react",
  },
];

export const CONTACT = {
  intro: "I would love to hear from you."
};

export const CERTIFICATES = [
  {
    title: "Python3: From Beginner to Pro",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1nmb_iDlHzX1hQecdWV8g5iWD0HS5YBzH/view",
  },
  {
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT[2023]",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1A5n1cIJ1BTVJYk9s3LKCaAOK5sVy1ejR/view",
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/XTU7DSPKB388",
  },
];
