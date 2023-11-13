import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    
    <div className=" flex flex-col justify-center items-center content-evenly ">
        <h1 className=" text-pink-300 text-center m-10 text-8xl ">
          CGPA CALCULATOR
        </h1>
        <div className=" h-3/4 w-3/4 bg-blue-200 text-black m-6 p-7 rounded-xl flex flex-col justify-center items-center ">
          <p className=" font-bold text-4xl m-4 mb-10 ">SELECT YOUR BRANCH </p>

          <div className=" grid grid-cols-3 auto-cols-max ">

            <Link to="/semester" >
            <div className=" m-4 p-7 h-24 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Computer Engineering
            </div>
            </Link>

            <Link to="/it" >
            <div className=" m-4 p-7 h-24 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Information Technology
            </div>
            </Link>

            <Link to="/ceds">
            <div className=" m-4 p-7 h-24 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Computer Engineering Spl. Data Science
            </div>
            </Link>

            <Link to="/enc">
            <div className=" m-4 p-7 h-24 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Electronics And Computer Engineering
            </div>
            </Link>

            <Link to="/ece">
            <div className=" m-4 p-7 h-24 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Electronics And Communication Engineering
            </div>
            </Link>

            <Link to="/iot">
            <div className=" m-4 p-7 h-24 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Electronics Engineering Spl. IOT
            </div>
            </Link>

            <Link to="/el">
            <div className=" m-4 p-10 h-24 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Electrical Engineering
            </div>
            </Link>

            <Link to="/mech">
            <div className=" m-4 p-10 h-24 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Mechanical Engineering
            </div>
            </Link>

            <Link to="/civil">
            <div className=" m-4 p-10 h-24 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Civil Engineering
            </div>
            </Link>
          </div>

          {/* SPECIAL DIV FOR LAST TWO BRANCHES TO MAKE THEM IN CENTER */}
          <div className=" flex ">

            <Link to="/rai" >
            <div className=" h-24 w-80 m-4 p-9 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Robotics And Artificial Intelligence
            </div>
            </Link>

            <Link to="/env">
            <div className=" h-24 w-80 m-4 p-9 bg-black text-white rounded-lg  flex justify-center items-center text-center hover:bg-gray-800 hover:text-lg ">
              Environmental Engineering
            </div>
            </Link>
          </div>

        </div>
      </div>
    
    </>
  )
}

export default Home;
