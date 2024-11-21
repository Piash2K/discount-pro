import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassWord] = useState(false);
    const [error, setError] = useState('');

    const validatePassword = (password) => {
        if (!/[A-Z]/.test(password)) {
            return 'Password must have at least one uppercase & one lowercase letter.';
        }
        if (!/[a-z]/.test(password)) {
            return 'Password must have at least one uppercase & one lowercase letter.';
        }
        if (password.length < 6) {
            return 'Password must be at least 6 characters long.';
        }
        return '';
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        const validationError = validatePassword(password);
        if (validationError) {
            setPasswordError(validationError);
            return;
        }

        setPasswordError('');
        createNewUser(email, password)
            .then((result) => {
                setUser(result.user);
                updateUserProfile({
                    photoURL: photo,
                    displayName: name,
                })
                    .then(() => {
                        setUser((prevUser) => ({
                            ...prevUser,
                            displayName: name,
                            photoURL: photo,
                        }));
                        navigate('/');
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Login Error:", errorCode, errorMessage);
                setError(errorMessage);
            });
    };

    return (
        <div className='mx-auto w-2/6 mt-10 '>
            <div className="card flex justify-center p-4 border border-gray-200 shadow-lg rounded-lg bg-white">
            <h2 className='text-4xl text-center font-bold'>Registration Now!</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="photo url"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="password"
                            className="input input-bordered" required />
                        <button onClick={() => setShowPassWord(!showPassword)} className='text-lg absolute mt-12 ml-96'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                        {passwordError && (
                            <p className="text-red-500 mt-2">{passwordError}</p>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    {error && <p className="text-red-500 mt-2 ">{error}</p>}
                </form>
                <p className='mx-8'>
                    Already have an account? <Link to="/login"><span className='text-indigo-600'>Login</span></Link>
                </p>
            </div>

        </div>

    );
};

export default Register;