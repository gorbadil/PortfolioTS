import "react-vertical-timeline-component/style.min.css";
import "./styles.css";

import ProjectCard from "../../Components/ProjectCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import eCommerce from "../../Assets/projects/eCommerce.png";
// import powerfull from "../../Assests/projects/powerfull.png";
import survey from "../../Assets/projects/survey.png";
import techDoc from "../../Assets/projects/techDoc.png";
import chatApp from "../../Assets/projects/chat-app.png";

const projects = [
  {
    image: chatApp,
    title: "Chat App",
    description: `No authentication is needed, so everyone can try the page without providing any information. 
    I use Redux for state management, integrate with Firebase for database and real-time functionality,
    and utilize Tailwind CSS for styling.`,
    link: "https://chatapp.ersinm.com",
    gitLink: "https://github.com/gorbadil/ReactChatApp",
    tech: ["React", "Redux", "Firebase", "Tailwind Css"],
  },
  {
    image: eCommerce,
    title: "eCommerce",
    description: `I have developed an eCommerce website with integration of a dummy API using React Query.
    I have used React Context Hook for state management. React Router is employed for page routing, and styling is done using
    ChakraUI styled components.`,
    link: "https://ecommerce.ersinm.com",
    gitLink: "https://github.com/gorbadil/eCommerce",
    tech: ["React", "React Query", "React Router", "ChakraUI"],
  },
  // {
  //   image: powerfull,
  //   title: "PowerFull",
  //   description: `I have created a landing web page for a sports center using Bootstrap and JavaScript.
  //   The web page includes a fully functional BMI calculator and integration with Google Maps.`,
  //   link: "https://powerfull.ersinm.com",
  //   gitLink: "https://github.com/gorbadil/powerfull-sport-center",
  //   tech: ["JavaScript", "Bootstrap"],
  // },
  {
    image: techDoc,
    title: "Technical Documentation Page",
    description: `I built a responsive and visually engaging technical
      documentation page using HTML and CSS. JavaScript only for Dark Mode.`,
    link: "https://technical.ersinm.com",
    gitLink: "https://github.com/gorbadil/fCCTechDocPage",
    tech: ["HTML", "CSS"],
  },
  {
    image: survey,
    title: "Simple Survey Form",
    description: `I built a responsive and visually engaging survey form
          using HTML and CSS.`,
    link: "https://survey.ersinm.com",
    gitLink: "https://github.com/gorbadil/fCCSurveyForm",
    tech: ["HTML", "CSS"],
  },
];

function Projects() {
  return (
    <div id="projects" className="pr-12 xl:p-0">
      <h1 className="w-screen text-center text-4xl text-shadows-100 pt-24 pb-12 font-bold ">
        Projects
      </h1>
      <VerticalTimeline lineColor="#595DE5" className="">
        {projects.map((item, key) => (
          <ProjectCard key={key} props={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Projects;
