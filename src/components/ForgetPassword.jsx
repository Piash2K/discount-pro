import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const ForgetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState(location.state?.email || ''); // Get the email from the passed state or default to empty

    const handleResetPassword = () => {
        if (!email) {
            alert('Please provide your email address.');
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent. Redirecting to Gmail...');
                signOut(auth).then(() => {
                    // Open Gmail in a new tab
                    window.open('https://mail.google.com', '_blank');
                    // Navigate back to the login page
                    navigate('/login');
                });
            })
            .catch((error) => {
                console.error("Error sending password reset email:", error.message);
                alert(error.message);
            });
    };

    return (
        <div className="card bg-base-100 flex justify-center items-center p-4">
            <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                />
            </div>
            <button onClick={handleResetPassword} className="btn btn-primary mt-4">
                Reset Password
            </button>
        </div>
    );
};

export default ForgetPassword;
