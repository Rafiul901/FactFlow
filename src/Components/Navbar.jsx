import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';
import { AuthContext } from '../Auth/AuthContext';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );


  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDark]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('Signed out');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li><Link className='font-semibold' to='/'>Home</Link></li>
      <li><Link className='font-semibold' to='/allArticles'>All Articles</Link></li>
      <li><Link className='font-semibold' to='/myArticles'>Post Article</Link></li>
      <li><Link className='font-semibold' to='/postArticles'>My Articles</Link></li>
      <li><Link className='font-semibold' to='/aboutUs'>About Us</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <img className='w-14' src={logo} alt="" />
        <a className=" text-xl text-blue-600 font-bold">FactFlow</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-5">
       
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="toggle"
            onChange={() => setIsDark(!isDark)}
            checked={isDark}
          />
          <span>{isDark ? <MdOutlineDarkMode></MdOutlineDarkMode> : <MdOutlineLightMode/>}</span>
        </label>

        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Link to='/myArticles'>My Articles</Link></li>
              <li><Link to="/postArticles">Post Article</Link></li>
              <li onClick={handleSignOut}><a>Logout</a></li>
            </ul>
          </div>
        ) : (
          <Link to='/login' className='btn bg-blue-700 text-white'>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
