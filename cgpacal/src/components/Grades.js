import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Subject from './Subject'

function Grades() {

  const [divCount, setDivCount] = useState(1);

  const add = () => {
    setDivCount(divCount+1);
  }

  //use state hook to set and update the value of credits in credits array
  const [creditArr, setCreditArr] = useState([]);

  //use state hook to set and update the value of grades in the grade array
  const [gradeArr, setGradeArr] = useState([]);

  //function to get values from the input 
  const getInput = () => {

    //arrays to store the values of credits and grades
    let newCreditArr = [];
    let newGradeArr = [];

    for(let i=0; i<divCount; i++){

      // CURRENT ISSUE
      // On clicking submit for the first time, it is showing an empty array
      // after clicking for the second time, the arrays are updating and showing in the console.
      // Have to resolve this issue or else I have to make a confirmation page
      // asking for "are you sure to submit" to overshadow this problem.


      //vars to store the current value using IDs in backtags and fetching their value
      let creditVal = document.getElementById(`credits${i}`).value;
      let gradeVal = document.getElementById(`grade${i}`).value;

      //pushing the found out values in the arrays
      newCreditArr.push(creditVal);
      newGradeArr.push(gradeVal);

    }

    //updating the arrays in the useState hook
    setCreditArr(newCreditArr);
    setGradeArr(newGradeArr);

    //console log to verify if the arrays are printing correctly or not
    console.log(creditArr);
    console.log(gradeArr);

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
                      <input type="number" className='text-black ml-96 p-2 rounded-lg border-2 border-black credits' id={`credits${index}`} />
                    </div>

                    <div>
                      <input type="text" className='text-black ml-8 p-2 rounded-lg border-2 border-black grade' id={`grade${index}`} />
                    </div>

                </div>

             ) ) }

        </div>

        <div className='flex justify-center items-center' >
            <button className=' m-5 h-20 w-44 bg-pink-300 text-black rounded-lg border-2 border-pink-900' onClick={add}>
              Add more subjects
            </button>
            <button onClick={getInput} >Submit</button>
        </div>

    </>
  )
}

export default Grades
