import React from 'react'
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import {netflixLogo} from "../utils/constant"
const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((store)=>store?.user?.userInfo)
  const navigate = useNavigate()
  const handleSignOut = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
      
  }
    
  //onAuthStateChanged is a function given by firebase which check current state of user means weather it is login or logout
  //so writing dispatch(addUser / dispatch(removeUser here and there when we login or logout ,we write in a central place 
  //so when user login we dispatch(addUser and for logout dispatch(removeUser
  //it is just like event listner 
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid, email, displayName, photoURL} = user;
            //here we dipatch the various things but for displayName and photoURL null will be stored 
            //because in user we get null as a value on behalf of these arguments beacuse as of now we only store email .
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
            navigate("/browse")
          } else {
            // User is signed out
            dispatch(removeUser())
            navigate("/")
          }
        });
        return ()=>{
             unsubscribe()
             dispatch(removeUser())
        }
  },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src={netflixLogo}
            alt="Netflix Logo"
            className='w-44'
        />
        <div className='flex'>
           { 
            user!=undefined && user!= null && Object.keys(user)?.length>0
            &&
            <>
            <img src={user?.photoURL}
                    alt="user_icon"
                    className='w-10 h-10 my-4 rounded-lg '
            />
            <button className='px-2 text-white' onClick={handleSignOut}>Sign Out</button>
            </>
           }
        </div>
    </div>
  )
}

export default Header