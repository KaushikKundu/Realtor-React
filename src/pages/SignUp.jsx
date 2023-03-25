import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth , createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {db} from "../firebase"
import {doc, serverTimestamp, setDoc} from "firebase/firestore"
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
  });

  const {name, email, password } = formData;
  function onchange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
 async function onSubmit(e){
  e.preventDefault();

  try {
    const auth = getAuth;
    const userCredential = createUserWithEmailAndPassword(auth, email,password);
    updateProfile(auth.currentUser, {
      displayName:name
    })
    const user = userCredential.user;
    const formDataCopy = {...formData};
    delete formDataCopy.password;
    formDataCopy.timestamp = serverTimestamp();

    await setDoc(doc(db, "users", user.uid), formDataCopy)
    toast.success("SignUp was successful")
    Navigate("/")
  } catch (error) {
    toast.error("Something went wrong with the registration")
  }
 }
  return (
    <section>
      <h1 className="text-4xl text-center mt-6 font-bold ">Sign Up</h1>

      <div className="w-full lg:w-[50%] mx-auto mt-10">
        <form className="w-full " onSubmit={onSubmit}>
        <input
            type="text"
            id="name"
            className="w-full text-lg p-2 rounded border-gray-900 border bg-w mb-5"
            value={name}
            onChange={onchange}
            placeholder="Enter Your Name"
          />  
          <input
            type="email"
            id="email"
            className="w-full text-lg p-2 rounded border-gray-900 bg-w mb-5"
            value={email}
            onChange={onchange}
            placeholder="Enter Your Email"
          />

          <div className="relative mb-6">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onchange}
              className="w-full text-lg p-2 border-gray-900 rounded"
              placeholder="Enter Your Password"
            />
            {showPassword ? (
              <AiFillEyeInvisible
                className="absolute right-3 top-4 text-xl cursor-pointer"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            ) : (
              <AiFillEye
                className="absolute right-3 top-4 text-xl cursor-pointer"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            )}
          </div>
       </form>
          <div className="flex justify-between mb-2">
            <p>
              Have a account?
              <Link
                to="/sign-in"
                className="text-red-600 hover:text-red-300 transition duration-200 ease-in-out ml-2"
              >
                Sign-In
              </Link>
            </p>
            <Link to="./ForgotPassword.jsx" className="hover:text-blue-700"
            >Forgot Password?</Link>            
          </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-7 font-medium rounded shadow-md hover:bg-blue-800 transition duration-150 active:bg-blue-900"
        >
          SIGN UP
        </button>

        <div className="my-4 flex items-center before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 after:border-gray-500">
          <p className="text-center font-semibold mx-4">OR</p>
        </div>
        <OAuth className="flex " />
      </div>
    </section>
  );
}

