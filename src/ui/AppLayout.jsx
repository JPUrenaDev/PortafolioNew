import { Educations } from "./Educations";
import { Experiences } from "./Experiences";
import { Home } from "./Home";
import { Portfolios } from "./Portfolios";
import { Skills } from "./Skills";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
//import { useNavigation } from "react-router-dom";
export const AppLayout = () => {
  //const navigation = useNavigation();

  return (
    <div className="sm:h-full bg-stone-200  sm:w-full ">
      <div className=" bg-yellow-500 sm:h-[50px]   sm:flex sm:justify-between h-[100px] sm:w-full ">
        <div className="sm:ml-40 sm:flex flex sm:justify-between justify-between items-center  sm:w-[600px] text-center sm:items-center sm:text-center">
          <h2 className="text-black font-semibold md:text-2xl   tracking-widest text-[30px] sm:text-[25px] sm:text-base  mt-2 sm:ml-0 ml-[150px]">
            My Resume
          </h2>
        </div>

        <div className="flex justify-between  sm:w-[600px] w-[320px] items-center sm:mt-0 mt-4 sm:ml-0 ml-[34px]  ">
          <Link to={"/home"}>
            <div className="sm:w-20 mx-1 w-0 sm:mx-3 text-stone-50   tracking-widest">
              <Home />
            </div>
          </Link>

          <Link to={"/skills"}>
            <div className="sm:w-20 w-0 sm:mx-3 text-stone-50   tracking-wides">
              <Skills />
            </div>
          </Link>

          <Link to={"/experience"}>
            {" "}
            <div className="sm:w-20 w-0 sm:mx-3 text-stone-50   tracking-wides">
              <Experiences />
            </div>
          </Link>

          <Link to={"/education"}>
            <div className="sm:w-20 w-0 sm:mx-3 text-stone-50   tracking-wides">
              <Educations />
            </div>
          </Link>

          <div className="sm:w-20 sm:mx-3 text-stone-50   tracking-wides">
            <Portfolios />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
