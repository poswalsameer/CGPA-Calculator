import React from 'react'

function Subject() {
  return (
    <>
      
      <div className= 'flex justify-center items-center flex-col ' >
            
            <div className=" h-3/4 w-3/4 bg-blue-200 flex flex-row items-center rounded-xl" >

                <div className='text-black m-8 text-2xl '>
                  Subject Name
                </div>

                <div>
                  <input type="number" className='text-black ml-96 p-2 rounded-lg border-2 border-black' />
                </div>

                <div>
                  <input type="text" className='text-black ml-8 p-2 rounded-lg border-2 border-black' />
                </div>

            </div>

        </div>

    </>
  )
}

export default Subject;
