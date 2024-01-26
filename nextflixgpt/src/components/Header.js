import React from 'react'
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
const Header = () => {
  const user = useSelector((store)=>store.user.initialState)
  const navigate = useNavigate()
  const handleSignOut = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
      
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
            className='w-44'
        />
        <div className='flex'>
           { 
            user!=undefined && user!= null && Object.keys(user)?.length>0
            &&
            <>
            <img src={!user?.photoURL ?"https://as1.ftcdn.net/v2/jpg/05/53/79/60/1000_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" : user?.photoURL}
                    alt="user_icon"
                    className='w-10 h-10 my-4'
            />
            <button className='px-2 ' onClick={handleSignOut}>Sign Out</button>
            </>
           }
        </div>
    </div>
  )
}

export default Header