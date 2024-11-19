import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Brands = () => {
    const brands = useLoaderData();
    console.log(brands)


    return (
        <div>
            <h2 className='text-center text-4xl'>Brands Title</h2>
            <div>
                {
                    brands.map(brand => <>
                        <div className='flex justify-between border-2'>
                            <div>
                                <h2>{brand.brand_name}</h2>
                                <p>{brand.rating}</p>
                            </div>
                            <div>
                            <h2>{brand.brand_name}</h2>
                            <p>{brand.description}</p>
                            </div>
                            <div>
                                <Link to={`brand/${brand._id}`}><button>View Coupons</button></Link>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Brands;