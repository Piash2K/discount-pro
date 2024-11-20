import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './Loading';

const UpdateProfile = () => {
    const { updateUserProfile, setUser, user, loading } = useContext(AuthContext); // Get updateUserProfile function from context
    const navigate = useNavigate();

    const [name, setName] = useState(user?.displayName || ''); // Initialize with current name
    const [photoURL, setPhotoURL] = useState(user?.photoURL || ''); // Initialize with current photo URL
    const [isUpdating, setIsUpdating] = useState(false); // Track update process

    const handleUpdate = (e) => {
        e.preventDefault();

        // Prepare updated data
        const updatedData = {};
        if (name) updatedData.displayName = name;
        if (photoURL) updatedData.photoURL = photoURL;

        setIsUpdating(true); // Show loading spinner while updating

        updateUserProfile(updatedData)
            .then(() => {
                // Update local user state to reflect changes instantly
                setUser((prevUser) => ({
                    ...prevUser,
                    ...updatedData,
                }));
                alert('Profile updated successfully!');
                navigate('/profile'); // Redirect to profile page
            })
            .catch((error) => {
                console.error('Error updating profile:', error.message);
                alert(error.message);
            })
            .finally(() => {
                setIsUpdating(false); // Stop loading spinner
            });
    };

    if (loading || isUpdating) {
        return <Loading />; // Display loading spinner during updates
    }

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
