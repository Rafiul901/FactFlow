import React, { use } from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'
import { AuthContext } from '../Auth/AuthContext';


  const Navbar = () => {
      const {user,signOutUser} = use(AuthContext);
      console.log(user);
      const handleSignOut =()=>{
          signOutUser()
          .then(() =>{
              console.log(signOutUser);
          })
          .catch(error =>{
              console.log(error);
          })}
    const links = <>
    <Link className='font-semibold' to='/'>Home</Link>
    <Link className='font-semibold' to='/allArticles'>All Articles</Link>
    <Link className='font-semibold' to='/myArticles'>My Articles</Link>
    <Link className='font-semibold' to='/postArticles'>Post Article</Link>
    <Link className='font-semibold' to='/aboutUs'>About Us</Link>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <img className='w-14' src={logo} alt="" />
    <a className="btn btn-ghost text-xl text-blue-600 font-bold">FactFlow</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-6">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
{
  user?  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
           
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleSignOut}><a>Logout</a></li>
      </ul>
    </div>
:<Link to='/login' className='btn bg-blue-700 text-white'>Login</Link>
}
  </div>
</div>
    );
};

export default Navbar;