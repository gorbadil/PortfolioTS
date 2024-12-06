import PP from "./../../Assets/wallpapers/Ersin Mutlu Background Removed.png";
import "./styles.css";

function AboutMe() {
  return (
    <div id="about-me" className=" xl:p-0">
      <h3 className="w-screen text-center text-4xl text-shadows-100 pt-24 font-bold pb-4">
        About Me
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-36 p-12">
        <img
          src={PP}
          alt="Profile"
          className=" w-72 max-w-full drop-shadow-2xl profile"
        />
        <div className="max-w-2xl flex flex-col gap-4 pb-20">
          <h3 className="text-3xl text-shadows-100 font-bold">Ersin Mutlu</h3>
          <p className="text-justify text-shadows-100 text-xl">
            After working as a Mechanical Engineer for almost 10 years, I've
            decided to switch gears and pursue a career as a Web Developer.
            During this process, I've learned essential skills like HTML, CSS,
            and JavaScript, and I've also delved deeper into the{" "}
            <span className="font-bold">React </span>
            framework. I've even completed projects related to{" "}
            <span className="font-bold"> Chat App </span>,
            <span className="font-bold">e-Commerce</span> and{" "}
            <span className="font-bold">Sports Centers</span>, which you can
            check out on{" "}
            <a href="#projects" className="underline font-bold">
              Project Section
            </a>
            .
          </p>
          <h4 className="text-2xl text-shadows-100 font-bold">
            My Technical Skills
          </h4>
          <ol className="flex gap-4 lg:gap-x-8 lg:gap-y-2 justify-start items-center flex-wrap">
            <li className="text-shadows-100 bullet">React</li>
            <li className="text-shadows-100 bullet">Angular</li>
            <li className="text-shadows-100 bullet">Django</li>
            <li className="text-shadows-100 bullet">Python</li>
            <li className="text-shadows-100 bullet">JavaScript</li>
            <li className="text-shadows-100 bullet">Redux</li>
            <li className="text-shadows-100 bullet">Firebase</li>
            <li className="text-shadows-100 bullet">Mongo DB</li>
            <li className="text-shadows-100 bullet">Git</li>
            <li className="text-shadows-100 bullet">Tailwind Css</li>
            <li className="text-shadows-100 bullet">Bootstrap</li>
            <li className="text-shadows-100 bullet">HTML</li>
            <li className="text-shadows-100 bullet">CSS</li>
          </ol>
          <h4 className="text-2xl text-shadows-100 font-bold">
            My Soft Skills
          </h4>
          <ol className="flex gap-4 lg:gap-x-8 lg:gap-y-2 justify-start items-center flex-wrap">
            <li className="text-shadows-100 bullet">Problem Solving</li>
            <li className="text-shadows-100 bullet">Teamwork</li>
            <li className="text-shadows-100 bullet">Effective Communication</li>
            <li className="text-shadows-100 bullet">Creative Thinking</li>
            <li className="text-shadows-100 bullet">Decision Maker</li>
            <li className="text-shadows-100 bullet">Self Learning</li>
            <li className="text-shadows-100 bullet">Self Motivation</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
