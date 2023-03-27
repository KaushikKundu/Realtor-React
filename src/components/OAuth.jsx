import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react';
import { FcGoogle } from "react-icons/fc"
import { toast } from 'react-toastify';
import { db } from '../firebase';
import {  doc } from 'firebase/firestore';

export default function OAuth(){
    const navigate = useNavigate();
    async function onGoogleClick(){
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)
            if(!docSnap.exists()){
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            navigate("/")
        } catch (error) {
            toast.error("Could not authorize with Google");
            console.log(error);
        }}

        return(
            <button className='w-full bg-red-600 text-white flex justify-center items-center py-2 px-7 font-medium text-md hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out rounded' onClick={onGoogleClick}>
             <FcGoogle className='bg-white rounded mx-1 text-2xl'/>
             Continue with Google</button>
         )

    }







    
