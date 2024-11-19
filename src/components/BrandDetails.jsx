import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const BrandDetails = () => {
    const brandData = useLoaderData(); // Fetch brand data using loader

    return (
        <div>
            <div className="p-4">
                <h2 className="text-3xl font-bold">{brandData.brand_name}</h2>
                <p className="text-lg mt-2">Rating: {brandData.rating}</p>
                <p className="mt-4">{brandData.description}</p>
            </div>
            <div className="p-4">
                <h3 className="text-2xl font-semibold">Coupons</h3>
                {brandData.coupons.length > 0 ? (
                    <ul className="mt-2">
                        {brandData.coupons.map((coupon, index) => (
                            <li key={index} className="p-2 border rounded-md mb-2">
                                <div className="flex justify-between">
                                    <p>Coupon Code: {coupon.coupon_code}</p>
                                    <div>
                                        <CopyToClipboard
                                            text={coupon.coupon_code}
                                            onCopy={() => alert(`Copied: ${coupon.coupon_code}`)}>
                                            <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                                                Copy Code
                                            </button>
                                        </CopyToClipboard>
                                        <a href={brandData.shop_Link} target="_blank" className="btn btn-primary" >Use Now</a>
                                    </div>
                                </div>
                                <p>Description: {coupon.description}</p>
                                <p>Expiry Date: {coupon.expiry_date}</p>
                                <p>Condition: {coupon.condition}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-2">No coupons available for this brand.</p>
                )}
            </div>
        </div>
    );
};

export default BrandDetails;
