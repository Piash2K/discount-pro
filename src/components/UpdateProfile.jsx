import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedData = {};
        if (name) {
            updatedData.displayName = name
        };
        if (photoURL) {
            updatedData.photoURL = photoURL
        };

        updateUserProfile(updatedData)
            .then(() => {
                alert('Profile updated successfully!');
                navigate('/profile'); // Redirect to profile page
            })
            .catch((error) => {
                console.error('Error updating profile:', error.message);
                alert(error.message);
            });
    };

    return (
        <div className="card bg-base-100 flex justify-center items-center p-4">
            <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
            <form onSubmit={handleUpdate} className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="input input-bordered w-full mb-4"
                />
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input
                    type="text"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder="Enter photo URL"
                    className="input input-bordered w-full mb-4"
                />
                <button type="submit" className="btn btn-primary mt-4">
                    Update Information
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
