import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import 'animate.css';

const Brands = () => {
    const { user } = useContext(AuthContext);
    const brands = useLoaderData(); // Load brands data
    const navigate = useNavigate(); // Navigate hook
    const [search, setSearch] = useState(''); // State for search bar input

    const filteredBrands = brands.filter(brand =>
        brand.brand_name.toLowerCase().includes(search.toLowerCase())
    );

    const handleViewCoupons = (_id) => {
        if (user) {
            navigate(`brand/${_id}`);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center mb-6 animate-bounce">Our Partner Brands</h1>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search for brands..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-full max-w-md"
                />
            </div>

            {/* Brands List */}
            <div className="grid grid-cols-1 gap-4">
                {filteredBrands.map((brand) => (
                    <div
                        key={brand._id}
                        className="bg-white shadow-md rounded-lg p-4 border flex items-center space-x-4"
                    >
                        {/* Brand Logo */}
                        <img
                            src={brand.brand_logo}
                            alt={`${brand.brand_name} Logo`}
                            className="w-24 h-24  rounded-lg"
                        />

                        {/* Brand Info */}
                        <div className="flex-grow">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-xl font-semibold">{brand.brand_name}</span>
                                <span className="flex items-center text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <span className="ml-1">{brand.rating}</span>
                                </span>
                            </div>
                            <p className="text-gray-600">{brand.description}</p>
                        </div>

                        {/* Buttons */}
                        <div className="text-center">
                            {brand.saleIsOn && (
                                <p className="text-red-500 font-bold animate-bounce mb-2">
                                    Sale is on!
                                </p>
                            )}
                            <button
                                onClick={() => handleViewCoupons(brand._id)}
                                className="btn btn-primary"
                            >
                                View Coupons
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;
