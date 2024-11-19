import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Login = () => {
    const { signInWithEmail, googleProvider } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for navigation

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
        <div className="card bg-base-100 flex justify-center items-center">
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                {/* Display error message */}
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
            <p>New here? <Link to="/register">Register now</Link></p>
            <button onClick={handleGoogleSignIn} className="btn btn-secondary mt-4">
                Login with Google
            </button>
        </div>
    );
};

export default Login;