export const AboutMe = () => {
  return (
    <div className="bg-stone-100 mt-2 md:w-[760px]    md:ml-3.5 ml-1 mr-1 h-[500px] shadow-2xl ">
      <div className="pl-2 pt-3 ">
        <div className="md:mt-4">
          <span className="tracking-widest text-black font-semibold ">
            ABOUT ME
          </span>
          <br></br>
          <p className="tracking-widest">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quia iusto, rem atque reprehenderit omnis optio sunt veritatis ipsam
            ea accusamus quam, laborum blanditiis accusantium quos quasi natus
            et sit?
          </p>
          <hr className="my-5"></hr>
        </div>
        <div className="pl-2 mt-4 ">
          <span className="text-black font-semibold tracking-widest mb-3">
            PERSONAL INFO
          </span>
          <br></br>
          <div className="flex justify-between items-center ">
            <div className=" ml-[-10px] ">
              <p className="font-semibold md:mt-3">
                Adress: <span>13</span>
              </p>
              <p className="font-semibold my-4">
                Email: <span>jean@hotmail.com</span>
              </p>
              <p className="font-semibold">
                Phone: <span>12343</span>
              </p>
            </div>
            <div className="md:mr-[100px]">
              <p className="font-semibold md:mt-3">
                Main Language: <span>Spanish</span>
              </p>
              <p className="font-semibold my-4">
                Second Language: <span>English</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
