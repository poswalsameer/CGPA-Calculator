import React from "react";
import { Link } from "react-router-dom";

function Semester() {
  return (
    <>
      <div>
        <Link to="/">
          <button className=" h-10 w-14 text-black bg-pink-200 text-2xl font-bold flex justify-center items-center rounded-xl mt-10 ml-10">
            ←
          </button>
        </Link>
      </div>

      <div className="text-yellow-200 text-8xl text-center mt-12 ">
        SELECT YOUR SEMESTER
      </div>

      <div className=" mt-14 flex justify-center items-center">
        <div className=" h-3/4 w-3/4 bg-blue-200 grid grid-cols-2 rounded-xl auto-cols-max ">
          <Link to="/grades">
            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 1
            </div>
          </Link>

          <Link to="/grades">
            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 2
            </div>
          </Link>

          <Link to="/grades">
            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 3
            </div>
          </Link>

          <Link to="/grades">
            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 4
            </div>
          </Link>

          <Link to="/grades">
            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 5
            </div>
          </Link>

          <Link to="/grades">
            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 6
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Semester;
