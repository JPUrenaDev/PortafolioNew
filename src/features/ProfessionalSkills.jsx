import PropTypes from "prop-types";

export const ProfessionalSkills = ({ marginLeft = "ml-3.5" }) => {
  const barProgress = (progress) => {
    return (
      <div className="w-full h-4 bg-gray-200 rounded-full">
        <div
          className="h-full bg-yellow-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div
      className={` shadow-2xl bg-stone-100 md:w-[760px] mt-2 ml-1 mr-1  md:${marginLeft} h-[300px]`}
    >
      <div className="text-black tracking-widest font-semibold md:my-3 md:pt-2 ml-3 border-b-2 border-indigo-500/100">
        Professional Skills
      </div>

      <div className="flex justify-between md:mx-[100px] mx-[3px] gap-2 mt-4">
        <div className="flex flex-col gap-4 w-[200px] ml-2 ">
          <div>
            <p>HTML</p>
            {barProgress(80)}
          </div>
          <div>
            <p>Javascript</p>
            {barProgress(80)}
          </div>
          <div>
            <p>SQL SERVER</p>
            {barProgress(95)}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[200px] ">
          <div>
            <p>CSS</p>
            {barProgress(70)}
          </div>
          <div>
            <p>PHP</p>
            {barProgress(70)}
          </div>
          <div>
            <p>JQUERY</p>
            {barProgress(70)}
          </div>
        </div>
      </div>
    </div>
  );
};

ProfessionalSkills.propTypes = {
  marginLeft: PropTypes.string.isRequired, // Validate that myStringProp is a string
};
