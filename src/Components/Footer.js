import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center h-auto  bg-slate-600 text-white p-4  mt-0'>
      <div>
        <ul className="flex gap-6 ">
          <li>
            <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
          </li>
          <li>
            <NavLink to="/practice" className="hover:text-blue-500">Practice</NavLink>
          </li>
          <li>
            <NavLink to="/topics" className="hover:text-blue-500">Topics</NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" className="hover:text-blue-500">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" className="hover:text-blue-500">Feedback</NavLink>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-300 w-[80%] mt-4"></div>
      <div className='mt-4'>
        <p>Copyright © 2024 VocalEase. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
