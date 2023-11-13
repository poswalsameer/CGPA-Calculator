import React from 'react'
import { Link } from 'react-router-dom'

function El() {
  return (
    <>

      <div className="text-yellow-200 text-8xl text-center m-10 ">
            SELECT YOUR SEMESTER
      </div>

      <div className=' mt-28 flex justify-center items-center' >

        <div className=" h-3/4 w-3/4 bg-blue-200 grid grid-cols-2 rounded-xl auto-cols-max ">

            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 1
            </div>

            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 2
            </div>

            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 3
            </div>

            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 4
            </div>

            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 5
            </div>

            <div className="m-4 h-20 bg-blue-700 text-white flex justify-center items-center rounded-lg text-2xl ">
              Semester 6
            </div>

        </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-14"> 

          <Link to="/" >
              <button className=" h-8 w-20 m-7 p-5 rounded-lg bg-blue-500 text-black flex justify-center items-center border-2 border-blue-950 font-bold hover:bg-blue-900 hover:text-white ">
                BACK
              </button>
          </Link>

          <Link to="/grades" >
              <button className=" h-8 w-20 m-7 p-5 rounded-lg bg-blue-500 text-black flex justify-center items-center border-2 border-blue-950 font-bold hover:bg-blue-900 hover:text-white ">
                NEXT
              </button>
          </Link>
      
      </div>

    </>
  )
}

export default El
