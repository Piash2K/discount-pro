import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import 'animate.css';
import ReactStars from 'react-stars';

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
            <h1 className="text-4xl font-bold text-center mb- ">Our Partner Brands</h1>

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
                        className="bg-white shadow-md rounded-lg p-4 border grid grid-cols-3 items-center space-x-4"
                    >
                        {/* Brand Logo */}
                        <div className='flex flex-col'>
                            <div>
                                <img
                                    src={brand.brand_logo}
                                    alt={`${brand.brand_name} Logo`}
                                    className="w-32 h-24  rounded-lg"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{brand.brand_name}</h2>
                                <div className='my-2'>
                            <h4 className='font-bold'>Rating:</h4>
                            <div className='flex gap-4 items-center'>
                                <ReactStars
                                    count={5}
                                    value={brand.rating}
                                    size={24}
                                    activeColor="#ffd700"
                                    edit={false}
                                />
                                <p>{brand.rating}</p>
                            </div>
                        </div>
                            </div>
                        </div>

                        {/* Brand Info */}
                        <div className="flex flex-col justify-start">
                            <div>
                                <span className="text-xl font-semibold">{brand.brand_name}</span>
                            </div>
                            <p className="text-gray-600">{brand.description}</p>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end text-center">

                            <div className='flex flex-col'>
                                <div
                                    className={`${brand.isSaleOn ? "text-purple-500 animate-bounce" : "text-gray-400"
                                        } text-sm font-semibold`}
                                >
                                    {brand.isSaleOn ? "Sale On" : ""}
                                </div>
                                <button
                                    onClick={() => handleViewCoupons(brand._id)}
                                    className="btn btn-primary  ">
                                    View Coupons
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;
