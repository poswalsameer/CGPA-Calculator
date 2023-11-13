import React from 'react';
import { Link } from 'react-router-dom';

function First() {
  return (
    <>
      this is the first page of the website

      <Link to="/home" >
          <button className=" h-8 w-20 m-8 -mb-2 p-5 rounded-lg bg-blue-500 text-black flex justify-center items-center border-2 border-blue-950 font-bold hover:bg-blue-900 hover:text-white ">
            NEXT
          </button>
          </Link>
    </>
  )
}

export default First;
