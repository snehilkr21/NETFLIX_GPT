import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/Validate'
import {auth} from "../utils/firebase"
import Header from './Header'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const Login = () => {
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const [isSignInForm,setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState("")
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }
  const handleButtonClick = () =>{
    //validate the form data
    let message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)
    if(message) return

    //sign-in || sign-up
    if(!isSignInForm){
      //sign-up
      //createUserWithEmailAndPassword create a need user and add it to firebase
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            //when the user is signed up we need to update profile in firebase 
            updateProfile(auth.currentUser, {
                displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/106731352?s=400&u=96f7993b24d0a7a7c5edccafe35811d7eca313dc&v=4"
              }).then(() => {
                // Profile updated!
                //we need to dispatch the data to store 
                //but as we observe we use auth.currentUser because as soon as login/sign-up/logout done onAuthStateChanged function works
                // and it store the user current value 
                //in onAuthStateChanged we do-not update displayname and profile photo  (it store null) 
                //because onAuthStateChanged initiate earlier then updateProfile works so that's we dispatch here to store photo and displayName
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
                navigate("/browse")
              }).catch((error) => {
                // An error occurred
                // ...
              });
              
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode +" "+ errorMessage)
        });


    }else{
      //sign-in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            navigate("/browse")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode +" "+ errorMessage)
        });
    }
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="Background_Image" 
        />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{ isSignInForm ? "Sign In" : "Sign Up" }</h1>
            {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
            <input ref={email} type="text" placeholder='Email' className='p-4 my-4 w-full bg-gray-700'/>
            <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <p className='text-red-500'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full' onClick={handleButtonClick}>{ isSignInForm ? "Sign In" : "Sign Up" }</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"} </p>
        </form>
    </div>
  )
}

export default Login