import { MainCardPresentation } from "./MainCardPresentation";
import { AboutMe } from "./AboutMe";
import { ProfessionalSkills } from "./ProfessionalSkills";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Portafolio } from "./Portafolio";

export const MyResumeContent = () => {
  return (
    <>
      <div className="md:flex">
        <MainCardPresentation />
        <div>
          <AboutMe />
          <ProfessionalSkills />
          <Experience />
          <Education />
          <Portafolio />
        </div>
      </div>
    </>
  );
};
