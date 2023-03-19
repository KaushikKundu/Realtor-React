import React from 'react';
import ReactDOM from 'react-dom';
import { FcGoogle } from "react-icons/fc"

export default function OAuth(){
    return(
       <button className='w-full bg-red-600 text-white flex justify-center items-center py-2 px-7 font-medium text-md hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out rounded'>
        <FcGoogle className='bg-white rounded mx-1 text-2xl'/>
        Continue with Google</button>
    )
}