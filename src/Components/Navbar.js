import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from './firebase';
import toast from 'react-hot-toast';
import { useCentralData } from '../Context/CentralData'; 
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const { isLoggedIn, setIsLoggedIn, setIsSignUp } = useCentralData(); 
  const navigate = useNavigate();



  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsLoggedIn(false); 
      localStorage.removeItem('isLoggedIn');  
      toast.success("Logged out successfully!");
      navigate("/")
    });
  };

  return (
    <div className="w-full text-black  bg-slate-300 text-xl text-md font-bold ">
      <nav className="container mx-auto px-2 py-4 flex justify-between items-center">
        <NavLink to="/">
          <button className="text-2xl font-bold">VOCALEASE</button>
        </NavLink>
        <ul className="flex gap-6">
          <li><NavLink to="/" className="hover:text-blue-500 hover:underline">Home</NavLink></li>
          <li><NavLink to="/practice" className="hover:text-blue-500 hover:underline">Practice</NavLink></li>
          <li><NavLink to="/topics" className="hover:text-blue-500 hover:underline">Topics</NavLink></li>
          <li><NavLink to="/ContactUs" className="hover:text-blue-500 hover:underline">ContactUs</NavLink></li>
          <li><NavLink to="/profile" className="hover:text-blue-500  hover:underline ">Profile</NavLink></li>
        </ul>
        <div className="gap-3">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-xl bg-blue-400 px-3 py-1 rounded-md">Logout</button>
          ) : (
            <div>
              <NavLink to="/login">
                <button onClick={() =>  setIsSignUp(false) } className="text-xl bg-blue-500 hover:bg-blue-600 px-3 py-1 mx-5 rounded-md">Login</button>
              </NavLink>
              <NavLink to="/login">
                <button onClick={() =>  setIsSignUp(true) } className="text-xl bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md">Sign Up</button>
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
