import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Subject from './Subject'

function Grades() {

  const [divCount, setDivCount] = useState(1);

  const add = () => {
    setDivCount(divCount+1);
  }

  return (
    <>
        <div>
            <Link to="/" >
            <button className=' h-10 w-14 text-black bg-pink-200 text-2xl font-bold flex justify-center items-center rounded-xl mt-10 ml-10' >←
            </button>
            </Link>
        </div>


        <div className="text-yellow-200 text-8xl text-center mb-10 " >
          ADD YOUR SUBJECTS
        </div>

        <div className= 'flex justify-center items-center flex-col ' >
            
            {Array.from({ length: divCount }, (_, index) => ( 

                <div className=" m-4 h-3/4 w-3/4 bg-blue-200 flex flex-row items-center rounded-xl" key={index} >

                    <div className='text-black m-8 text-2xl '>
                      Subject {index+1}
                    </div>

                    <div>
                      <input type="number" className='text-black ml-96 p-2 rounded-lg border-2 border-black' />
                    </div>

                    <div>
                      <input type="text" className='text-black ml-8 p-2 rounded-lg border-2 border-black' />
                    </div>

                </div>

             ) ) }

        </div>

        <div className='flex justify-center items-center' >
            <button className=' m-5 h-20 w-44 bg-pink-300 text-black rounded-lg border-2 border-pink-900' onClick={add} >
              Add more subjects
            </button>
        </div>
    </>
  )
}

export default Grades
