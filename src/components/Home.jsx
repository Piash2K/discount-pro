import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import darazbanner from '../assets/daraz-banner.jpg'
import pickaboobanner from '../assets/pickaboo-banner.jpg'
import ajkerdeal from '../assets/Ajker-deal.jpg'
import Foodpanda from '../assets/Foodpanda.png'

const Home = () => {
    const brandsData = useLoaderData();
    const brandsForSell = brandsData.filter(brands => brands.isSaleOn === true)
    // console.log(brandsForSell)
    return (
        <div>
            <div className="w-8/ mx-auto my-10">
                <Carousel
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    dynamicHeight={false}
                    swipeable
                    emulateTouch
                    interval={3000}
                    transitionTime={500}
                    thumbWidth={80}
                    stopOnHover
                    renderArrowPrev={(clickHandler) => (
                        <button
                            className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 animate_animated animate_fadeInLeft"
                            onClick={clickHandler}
                        >
                            &lt;
                        </button>
                    )}
                    renderArrowNext={(clickHandler) => (
                        <button
                            className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 animate_animated animate_fadeInRight"
                            onClick={clickHandler}
                        >
                            &gt;
                        </button>
                    )}

                >

                    <div className="w-9/12 mx-auto object-cover animate_animated animate_fadeIn">
                        <img
                            src={darazbanner}
                            alt="image 1"
                            className="w-full h-[350px] "
                        />
                    </div>
                    <div className="w-9/12 mx-auto object-cover animate_animated animate_fadeIn">
                        <img
                            src={pickaboobanner}
                            alt="image 2"
                            className="w-full h-[350px]"
                        />
                    </div>
                    <div className="w-9/12 mx-auto object-cover animate_animated animate_fadeIn">
                        <img
                            src={ajkerdeal}
                            alt="image 3"
                            className="w-full h-[350px]"
                        />
                    </div>
                    <div className="w-9/12 mx-auto object-cover animate_animated animate_fadeIn">
                        <img
                            src={Foodpanda}
                            alt="image 4"
                            className="w-full h-[350px]"
                        />
                    </div>
                </Carousel>
            </div>
            <div>
                <h2 className="text-center text-4xl font-bold">Top Brands</h2>
                <div className="my-10">
                    <Marquee pauseOnHover>
                        <div className='flex gap-12'>
                            <Link to='/brands/brand/c1d2e3f4g5h6'>
                                <img className="w-[150px] h-[100px] ml-12" src="https://i.ibb.co.com/sjV8wCm/Daraz-Logo.png" alt="" />
                            </Link>
                            <Link to='/brands/brand/i7j8k9l0m1n2'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/Bj6yS62/pickabologo.png" alt="" />
                            </Link>
                            <Link to='/brands/brand/o3p4q5r6s7t8'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/ZgcHRds/Chaldal.png" alt="" />
                            </Link>
                            <Link to='/brands/brand/u9v0w1x2y3z4'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/PtnygJD/ajker-deal.png" alt="" />
                            </Link>
                            <Link to='/brands/brand/a5b6c7d8e9f0'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/mB596cr/Foodpandalogo.png" alt="" />
                            </Link>
                            <Link to='/brands/brand/g1h2i3j4k5l6'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/wY8C2nJ/rokomari.png" alt="" />
                            </Link>
                            <Link to='/brands/brand/m7n8o9p0q1r2'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/C5t5p71/bagdoom.jpg" alt="" />
                            </Link>
                            <Link to='/brands/brand/s3t4u5v6w7x8'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/cJXDzrs/shajgojlogo.png" alt="" />
                            </Link>
                            <Link to='/brands/brand/t8u9v0w1x2y3'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/Ws4Lf6z/png-clipart-bangladesh-industrial-and-technical-assistance-center-pathao-business-service-business-t.png" alt="" />
                            </Link>
                            <Link to='/brands/brand/x3y4z5a6b7c8'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/Kw0WNgj/bikroy.png" alt="" />
                            </Link>
                            <Link to='/brands/brand/y9z0a1b2c3d4'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/dGhP0CW/priyoshop-logopng.png" alt="" />
                            </Link>
                            <Link to='/brands/brand/e5f6g7h8i9j0'>
                                <img className="w-[150px] h-[100px]" src="https://i.ibb.co.com/r2pZ8WJ/techland.webp" alt="" />
                            </Link>

                        </div>
                    </Marquee>
                </div>
            </div>
            <div>
                <h2 className='text-center text-4xl font-bold'>Brands on sell</h2>
                <div className="grid grid-cols-3 gap-6">
                    {brandsForSell.map((brand) => (
                        <div
                            key={brand._id}
                            className="p-4 border rounded-lg shadow-md flex flex-col items-center bg-white"
                        >
                            <div className='w-8/12'>
                                <img
                                    src={brand.brand_logo}
                                    alt={brand.brand_name}
                                    className="w-full h-[150px]  mb-4"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-center">{brand.brand_name}</h2>
                            <div className="flex items-center justify-center gap-2 my-2">
                                <span className="text-yellow-500">★</span>
                                <p>{brand.rating}</p>
                            </div>
                            <p className="text-gray-500 text-center mb-2">
                                {brand.description}
                            </p>
                            <p className="font-medium text-gray-600">
                                Coupons: {brand.coupons.length} Coupons Available
                            </p>
                            <div className="mt-2">
                                <span
                                    className={`${brand.isSaleOn ? "text-purple-500" : "text-gray-400"
                                        } text-sm font-semibold`}
                                >
                                    {brand.isSaleOn ? "Sale On" : "No Sale"}
                                </span>
                            </div>
                            <span className="px-4 py-1 mt-2 text-sm font-bold text-white bg-gray-800 rounded">
                                {brand.category}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Home;