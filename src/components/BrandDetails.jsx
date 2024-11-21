import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactStars from "react-stars";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BrandDetails = () => {
    const brandData = useLoaderData(); // Fetch brand data using loader

    return (
        <div className="p-8">
            {/* Brand Header Section */}
            <div className="p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg shadow-md text-center">
                <h2 className="text-4xl font-bold">{brandData.brand_name}</h2>
                <div className="mt-4">
                    <img
                        className="w-52 h-32 mx-auto shadow-md"
                        src={brandData.brand_logo}
                        alt={brandData.brand_name}
                    />
                </div>
                <div className="flex justify-center items-center gap-2 mt-4">
                    <p className="text-lg">Rating:</p>
                    <ReactStars
                        count={5}
                        value={brandData.rating}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                    />
                    <p>{brandData.rating}</p>
                </div>
                <p className="mt-4 text-lg">{brandData.description}</p>
            </div>

            {/* Coupons Section */}
            <div className="mt-10">
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                    Coupons
                </h3>
                {brandData.coupons.length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {brandData.coupons.map((coupon, index) => (
                            <li
                                key={index}
                                className="bg-[#FFFFFF] rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                            >
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-gray-800">
                                        {coupon.coupon_code}
                                    </h4>
                                    <p className="text-gray-600 mt-2">
                                        {coupon.description}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Expiry: {coupon.expiry_date}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Condition: {coupon.condition}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-t">
                                    <CopyToClipboard
                                        text={coupon.coupon_code}
                                        onCopy={() =>
                                            toast.success(
                                                `Copied: ${coupon.coupon_code}`
                                            )
                                        }
                                    >
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                            Copy Code
                                        </button>
                                    </CopyToClipboard>
                                    <a
                                        href={brandData.shop_Link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                                    >
                                        Use Now
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-600 mt-4">
                        No coupons available for this brand.
                    </p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default BrandDetails;
