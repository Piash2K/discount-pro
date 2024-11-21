import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { signInWithEmail, googleProvider } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassWord]=useState(false);

    const navigate = useNavigate(); // Hook for navigation
    // const emailRef = useRef();

    const handleGoogleSignIn = () => {
        console.log(auth, googleProvider);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("Google Sign-In Successful:", user);
                navigate('/'); // Navigate to the home page
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Google Sign-In Error:", errorCode, errorMessage);
                setError(errorMessage); // Set error message
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmail(email, password)
            .then((result) => {
                // Signed up 
                const user = result.user;
                console.log("Email Login Successful:", user);
                navigate('/'); // Navigate to the home page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Login Error:", errorCode, errorMessage);
                setError(errorMessage); // Set error message
            });
    };
    return (
        <div className='mx-auto w-2/6 mt-10 '>
            <div className="card flex justify-center p-4 border border-gray-200 shadow-lg rounded-lg bg-white">
            <h1 className='text-4xl text-center font-bold'>Login Now!</h1>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Password</span>
                    </label>
                    <input 
                    name="password" 
                    type={showPassword? 'text':'password'} 
                    placeholder="password" 
                    className="input input-bordered" required />
                    <button onClick={()=>setShowPassWord(!showPassword)} className='text-lg absolute mt-12 ml-96'>{showPassword? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}</button>
                    <Link to='/forget-password'><label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label></Link>
                    {/* onClick={handleForgetPassword}  */}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                {/* Display error message */}
                {error && <p className="text-red-500 mt-2 ">{error}</p>}
            </form>
            <p className='mx-8'>New here? <Link to="/register"><span className='text-indigo-600'>Register now</span></Link></p>
            <button onClick={handleGoogleSignIn} className="btn btn-neutral mt-4 mx-8">
                Login with Google
            </button>
        </div>
        </div>
    );
};

export default Login;