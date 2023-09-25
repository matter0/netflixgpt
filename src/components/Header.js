import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

 const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store => store.user);
  const dispatch =useDispatch();
  const handleSignOut  =() =>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid :uid , email:email ,displayName:displayName , photoURL: photoURL}));
          navigate('/browse');
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/')
        }
      });
      return () => unsubscribe();
 },[]);
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
    {user && <div className='flex'>
      <img className='w-8 h-8 mx-10 my-5' alt='userlogo'src={user?.photoURL}/>
     <button className='font bold text-white' onClick={handleSignOut}>sign out</button>
    </div>
 }</div>
  )
}

export default Header;
