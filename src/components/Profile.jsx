import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-blue-600 text-white text-center py-12">
                <h1 className="text-4xl font-bold">Welcome, {user?.displayName}!</h1>
                <p className="mt-2 text-lg">Manage your profile and update your information</p>
            </div>
            <div className="flex justify-center items-center mt-8">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm text-center">
                    <div className="mb-4">
                        <img
                            src={user?.photoURL}
                            alt="User Profile"
                            className="w-32 h-32 rounded-full mx-auto border-2 border-blue-600"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">
                        {user?.displayName}
                    </h2>
                    <p className="text-gray-600">{user?.email}</p>
                    <div className="mt-6">
                        <Link to="/update-profile">
                            <button className="btn btn-primary">
                                Update Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;