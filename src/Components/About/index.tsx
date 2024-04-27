import Skills from "./Skills";
import JS from "../../Assets/tech/javascript.png";
import CSS from "../../Assets/tech/css.png";
import HTML from "../../Assets/tech/html.png";
import REACTJS from "../../Assets/tech/reactjs.png";
import GIT from "../../Assets/tech/git.png";
import GITHUB from "../../Assets/tech/github.png";
import REDUX from "../../Assets/tech/redux.png";
import TAILWIND from "../../Assets/tech/tailwind.png";
import MONGODB from "../../Assets/tech/mongodb.png";
import FIREBASE from "../../Assets/tech/firebase-logo.png";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";

const skills = [
  REACTJS,
  JS,
  REDUX,
  FIREBASE,
  MONGODB,
  GIT,
  GITHUB,
  TAILWIND,
  CSS,
  HTML,
];

function About() {
  return (
    <div className="flex flex-col w-full lg:w-1/3 justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full md:pt-48">
        <div className="text-4xl tracking-wide whitespace-nowrap md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-serif text-shadows-100 text-center lg:text-left relative lg:bottom-24 bottom-0 w-full">
          <TypeAnimation
            sequence={[
              ".",
              200,
              "..",
              200,
              "...",
              200,
              "Hi!",
              1000,
              "Hi! I am",
              500,
              "Hi! I'm Ersin",
              2000,
              "Hi! I'm Ersin a fron",
              500, // Waits 1s
              "Hi! I'm Ersin",
            ]}
            wrapper="h1"
            cursor={false}
            repeat={0}
            style={{ height: "1em" }}
          />
          {/* Hi! I'm Ersin */}
          <div className=" text-2xl md:text-3xl tracking-wide font-bold font-serif text-shadows-100">
            <TypeAnimation
              sequence={[7500, "a web dev", 500, "a Frontend Developer"]}
              wrapper="p"
              cursor={false}
              repeat={0}
            />
            {/* a Front-End Developer */}
          </div>
        </div>
        <p className="lg:w-full w-9/12 mt-24 lg:mt-12 lg:text-left tracking-widest px-6 md:px-0 text-xl text-shadows-100 font-bold relative lg:bottom-24">
          Self learner and passionate about web development. I love to learn
          about new technologies and improve myself. I am a team player and
          always ready to learn new things. I am currently looking for a
          full-time job opportunity.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-12 lg:mt-0 mt-8 lg:w-full w-11/12">
        <Fade cascade direction="up" delay={0.1} triggerOnce>
          {skills.map((item, key) => {
            return (
              <div key={`skill${key}`}>
                <Skills skill={item} />
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
}

export default About;
