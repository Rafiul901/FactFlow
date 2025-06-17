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
    <Link className='font-semibold' to='/myArticles'>Post Article</Link>
    <Link className='font-semibold' to='/postArticles'>My Articles</Link>
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
  <div className="navbar-end gap-5">
    <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="black" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
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
        <li><Link to='/myArticles' className="justify-between">My Articles</Link></li>
        <li>
  <Link to="/postArticles">Post Article</Link></li>
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