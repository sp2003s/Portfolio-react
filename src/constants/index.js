import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
  },
  {
    title: "Wild Connect",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.JS", "Express.js"],
  },
  {
    title: "Notes Summarizer",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Django", "openCV", "OCR", "llama"],
  },
  {
    title: "Disinformation Detection",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Flask", "Python", "File Handling"],
  },
  {
    title: "Linked List Visualizer",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Music Recommender",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Streamlit.io", "Python", "Count Vectorization", "Machine Learning"],
  },
];

export const CONTACT = {
  address: "Zeta-I, Greater Noida, Uttar Pradesh",
  phoneNo: "+91 981-872-5398",
  email: "shauryajt3455@gmail.com",
};
