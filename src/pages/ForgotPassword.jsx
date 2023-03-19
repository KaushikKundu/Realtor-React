import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {

 const [email, setEmail] = useState("");
  function onchange(e) {
   setEmail(e.target.value)
  }

  return (
    <section>
      <h1 className="text-4xl text-center mt-6 font-bold ">Forgot Password?</h1>
      <div className="w-full lg:w-[50%] mx-auto mt-10">
        <form className="w-full ">
       
          <input
            type="email"
            id="email"
            className="w-full text-lg p-2 rounded border-gray-900 bg-w mb-5"
            value={email}
            onChange={onchange}
            placeholder="Enter Your Email"
          />

       </form>
          <div className="flex justify-between mb-2">
            <p>
             Don't have an account?
              <Link
                to="/sign-up"
                className="text-red-600 hover:text-red-300 transition duration-200 ease-in-out ml-2"
              >
                Register
              </Link>
            </p>
            <Link to="/sign-in" className="hover:text-blue-700"
            >Sign In Instead</Link>            
          </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-7 font-medium rounded shadow-md hover:bg-blue-800 transition duration-150 active:bg-blue-900"
        >
          SEND RESET EMAIL
        </button>

        <div className="my-4 flex items-center before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 after:border-gray-500">
          <p className="text-center font-semibold mx-4">OR</p>
        </div>
        <OAuth className="flex " />
      </div>
    </section>
  );
}

