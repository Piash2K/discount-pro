import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactStars from "react-stars";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BrandDetails = () => {
    const brandData = useLoaderData(); // Fetch brand data using loader

    return (
        <div>
            <div className="p-4">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold">{brandData.brand_name}</h2>
                    <div>
                        <img className="w-52" src={brandData.brand_logo} alt="" />
                    </div>
                    <div>
                        <div className='flex gap-4 justify-center items-center'>
                            <p className="text-lg mt-2">Rating:</p>
                            <ReactStars
                                count={5}
                                value={brandData.rating}
                                size={24}
                                activeColor="#ffd700"
                                edit={false}
                            />
                            <p>{brandData.rating}</p>
                        </div>
                    </div>

                    <p className="mt-4">{brandData.description}</p>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-2xl font-semibold">Coupons</h3>
                {brandData.coupons.length > 0 ? (
                    <ul className="mt-2 grid grid-cols-3 gap-10">
                        {brandData.coupons.map((coupon, index) => (
                            <li key={index} className="p-2 border rounded-md mb-2 ">
                                <div className="text-center">
                                    <p>Coupon Code: {coupon.coupon_code}</p>
                                    <p>Description: {coupon.description}</p>
                                    <p>Expiry Date: {coupon.expiry_date}</p>
                                    <p>Condition: {coupon.condition}</p>
                                </div>
                                <div className="flex justify-center space-x-5">
                                    <CopyToClipboard
                                        text={coupon.coupon_code}
                                        onCopy={() => toast.success(`Copied: ${coupon.coupon_code}`)}>
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                                            Copy Code
                                        </button>
                                    </CopyToClipboard>
                                    <a href={brandData.shop_Link} target="_blank" className="btn btn-primary" >Use Now</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-2">No coupons available for this brand.</p>
                )}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BrandDetails;
