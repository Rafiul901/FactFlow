import React, { use } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';  // Fixed imports
import { AuthContext } from './AuthContext';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = use(AuthContext);  
    const navigate = useNavigate();  
    const location = useLocation();  
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                
                return updateProfile(user, {  // Added return for proper promise chaining
                    displayName: name,
                    photoURL: photoUrl
                });
            })
            .then(() => {
                navigate(location.state?.from || '/'); 
                Swal.fire({
                    title: "Registered Successfully!",
                    icon: "success",
                });
            })
            .catch((error) => {
                console.log("Error:", error);
                Swal.fire({
                    title: "Registration Failed",
                    text: error.message,
                    icon: "error",
                });
            });
    };

    return (
       <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="mt-6 text-center text-3xl font-extrabold ">
      Create your account
    </h2>
    <p className="mt-2 text-center text-sm ">
      Join our community today
    </p>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="border-2  py-8 px-4 shadow sm:rounded-lg sm:px-10">
    




      {/* Registration Form */}
      <form onSubmit={handleRegister} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium ">
            Full Name
          </label>
          <div className="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
       <div className="mt-4">
  <label htmlFor="photoUrl" className="block text-sm font-medium ">
    Profile Photo URL
  </label>
  <div className="mt-1">
    <input
      id="photoUrl"
      name="photoUrl"
      type="url"
     
      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
  
</div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium ">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium ">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          
         
        </div>

       

       

        <div>
          <button
            type="submit"
            className="w-full text-black flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-green-400 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
        <Link to='/login' className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none">  
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;