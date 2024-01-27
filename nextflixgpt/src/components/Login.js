import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/Validate'
import {auth} from "../utils/firebase"
import Header from './Header'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser} from '../utils/userSlice';
import {loginBackgroundPhoto,photoUrl} from "../utils/constant"
const Login = () => {
  const dispatch =useDispatch()
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
                displayName: name.current.value, photoURL: photoUrl
              }).then(() => {
                // Profile updated!
                //but there is a question arises why we need to update the store again 
                //it is because as we see that when the user first time sign-up ,this function onAuthStateChanged we get null for 
                //profile photo and name so when we update the name and photo in firebase with updateProfile function then after success
                //it is necessary to update the value in store.
                //and in below line we use auth.currentUser because updateProfile function update the profile and it(auth.currentUser) has the latest value
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
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
        <img src={loginBackgroundPhoto}
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