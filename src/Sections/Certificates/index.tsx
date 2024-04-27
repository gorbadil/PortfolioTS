import "./styles.css";

import CS from "../../Assets/certificates/CS50x.png";
import CertificateCard from "../../Components/CertificateCard";
import { Fade } from "react-awesome-reveal";
// import algo from "../../Assets/certificates/freeCodeCamp JSAlgo.png";
import metaFront from "../../Assets/certificates/meta-front.png";
// import patDjango from "../../Assets/certificates/patDjango.png";
import patFront from "../../Assets/certificates/patFront.png";
import patInter from "../../Assets/certificates/patFrontInter.png";
// import resDes from "../../Assets/certificates/freeCodeCamp-ResDes.png";
import CSW from "../../Assets/certificates/CS50W.png";

type certificate = {
  certificate: string;
  from: string;
  name: string;
  link: string;
};

const certificates: certificate[] = [
  {
    certificate: CS,
    from: "Harvard CS50X",
    name: "Introduction to Computer Science",
    link: "https://cs50.harvard.edu/certificates/2deece42-bfdd-4169-8a61-35bfe248eec6",
  },
  {
    certificate: CSW,
    from: "Harvard CS50W",
    name: "Web Programming with Python and JavaScript",
    link: "https://certificates.cs50.io/48324a35-3349-466b-b776-34f9048ed111.pdf?size=letter",
  },
  {
    certificate: metaFront,
    from: "Meta",
    name: "Front-End Developer",
    link: "https://coursera.org/verify/professional-cert/C7HSRM88Q529",
  },
  {
    certificate: patFront,
    from: "Patika.Dev",
    name: "Advanced Frontend Web Dev. Path",
    link: "https://academy.patika.dev/certificates/2787ec02",
  },
  {
    certificate: patInter,
    from: "Patika.Dev",
    name: "Intermediate Frontend Web Dev. Path",
    link: "https://academy.patika.dev/certificates/242974e5",
  },
  {
    certificate: patFront,
    from: "Patika.Dev",
    name: "Beginner Frontend Web Dev. Path",
    link: "https://academy.patika.dev/certificates/9f09961d",
  },
];

function Certificates() {
  return (
    <Fade cascade triggerOnce>
      <div
        className=" relative py-36 flex flex-wrap justify-center items-center mx-auto"
        id="certificates"
      >
        <h1 className="w-screen text-center text-4xl text-shadows-100 font-bold pb-3">
          Certificates
        </h1>
        <div className="flex flex-row justify-start items-start container overflow-y-hidden pt-48 cards-div pl-40">
          {certificates.map((item, key) => {
            return (
              <CertificateCard
                key={key}
                certificate={item.certificate}
                from={item.from}
                name={item.name}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}

export default Certificates;
