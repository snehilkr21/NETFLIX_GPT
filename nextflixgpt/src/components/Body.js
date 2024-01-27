import React, { useEffect } from 'react'
import { createBrowserRouter ,RouterProvider, useNavigate} from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])

    //onAuthStateChanged is a function given by firebase which check current state of user means weather it login or logout
    //so writing dispatch(addUser / dispatch(removeUser here and there we write in a central place 
    //so when user login we dispatch(addUser and for logout dispatch(removeUser
    //it is just like event listner 
    //so why we do not write navigate("/browse") after dispatch add user because navigate only work inside the children of Router Provider 
    //here children means "/" ,"/browse"
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
            } else {
              // User is signed out
              dispatch(removeUser())
            }
          });
    },[])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body