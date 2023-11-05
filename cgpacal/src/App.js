import "./App.css";

function App() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center content-evenly ">
        <h1 className=" text-pink-300 text-center m-10 text-8xl ">
          CGPA CALCULATOR
        </h1>
        <div className=" h-3/4 w-3/4 bg-blue-200 text-black m-6 p-7 rounded-xl flex flex-col justify-center items-center ">
          <p className=" font-bold text-4xl m-4 mb-10 ">SELECT YOUR BRANCH </p>

          <div className=" grid grid-cols-3 ">
            <div className=" m-4 p-7 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Computer Engineering
            </div>

            <div className=" m-4 p-7 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Information Technology
            </div>

            <div className=" m-4 p-7 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Computer Engineering Spl. Data Science
            </div>

            <div className=" m-4 p-7 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Electronics And Computer Engineering
            </div>

            <div className=" m-4 p-7 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Electronics And Communication Engineering
            </div>

            <div className=" m-4 p-7 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Electronics Engineering Spl. IOT
            </div>

            <div className=" m-4 p-10 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Electrical Engineering
            </div>

            <div className=" m-4 p-10 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Mechanical Engineering
            </div>

            <div className=" m-4 p-10 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Civil Engineering
            </div>
          </div>

          {/* SPECIAL DIV FOR LAST TWO BRANCHES TO MAKE THEM IN CENTER */}
          <div className=" flex ">
            <div className=" w-80 m-4 p-9 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Robotics And Artificial Intelligence
            </div>

            <div className=" w-80 m-4 p-9 bg-black text-white rounded-lg  flex justify-center items-center text-center ">
              Environmental Engineering
            </div>
          </div>

          <button className=" h-8 w-20 m-8 -mb-2 p-5 rounded-lg bg-blue-500 text-black flex justify-center items-center border-2 border-blue-950 ">
            NEXT
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
