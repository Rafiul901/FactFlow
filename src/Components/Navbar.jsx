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
    <li><Link className='font-semibold hover:text-blue-600 transition-colors' to='/'>Home</Link></li>
    <li><Link className='font-semibold hover:text-blue-600 transition-colors' to='/allArticles'>All Articles</Link></li>
    {user && (
      <>
        <li><Link className='font-semibold hover:text-blue-600 transition-colors' to='/postArticles'>Post Article</Link></li>
        <li><Link className='font-semibold hover:text-blue-600 transition-colors' to='/myArticles'>My Articles</Link></li>
      </>
    )}
    <li><Link className='font-semibold hover:text-blue-600 transition-colors' to='/aboutUs'>About Us</Link></li>
  </>
);
  return (
    <div className="w-full bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            </div>
            <Link to="/" className="flex items-center gap-2">
              <img className='w-10 h-10' src={logo} alt="FactFlow Logo" />
              <span className="text-xl text-blue-600 font-bold">FactFlow</span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              {links}
            </ul>
          </div>

          <div className="navbar-end gap-4">
            {/* Hide on mobile, show on desktop */}
            <div className="hidden lg:flex">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="toggle theme-controller"
                  onChange={() => setIsDark(!isDark)}
                  checked={isDark}
                />
                <span className="text-xl">
                  {isDark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
                </span>
              </label>
            </div>

            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src={user.photoURL || '/default-avatar.png'}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><Link to='/myArticles'>My Articles</Link></li>
                  <li><Link to="/postArticles">Post Article</Link></li>
                  <li onClick={handleSignOut}><a>Logout</a></li>
                </ul>
              </div>
            ) : (
              <Link to='/login' className='btn bg-blue-600 text-white hover:bg-blue-700'>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;