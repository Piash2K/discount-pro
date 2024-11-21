import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import darazbanner from "../assets/daraz-banner.jpg";
import pickaboobanner from "../assets/pickaboo-banner.jpg";
import ajkerdeal from "../assets/Ajker-deal.jpg";
import Foodpanda from "../assets/Foodpanda.png";
import { AuthContext } from "../provider/AuthProvider";
import "animate.css";
import ReactStars from "react-stars";

const Home = () => {
    const { user } = useContext(AuthContext);
    const brandsData = useLoaderData();
    const brandsForSell = brandsData.filter((brands) => brands.isSaleOn === true);
    const popularBrands = brandsData.filter((brand) => brand.rating > 4.5);
    const navigate = useNavigate();

    const handleViewBrand = (_id) => {
        if (user) {
            navigate(`brands/brand/${_id}`);
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="bg-gray-50">
            {/* Carousel Section */}
            <div className="w-8/ mx-auto my-10 animate__animated animate__fadeInDown">
                <Carousel
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    swipeable
                    emulateTouch
                    interval={3000}
                    transitionTime={500}
                    thumbWidth={80}
                    stopOnHover
                    renderArrowPrev={(clickHandler) => (
                        <button
                            className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 animate__animated animate__fadeInLeft"
                            onClick={clickHandler}
                        >
                            &lt;
                        </button>
                    )}
                    renderArrowNext={(clickHandler) => (
                        <button
                            className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10 animate__animated animate__fadeInRight"
                            onClick={clickHandler}
                        >
                            &gt;
                        </button>
                    )}
                >
                    <div className="w-9/12 mx-auto object-cover">
                        <img
                            src={darazbanner}
                            alt="image 1"
                            className="w-full h-[350px] rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-9/12 mx-auto object-cover">
                        <img
                            src={pickaboobanner}
                            alt="image 2"
                            className="w-full h-[350px] rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-9/12 mx-auto object-cover">
                        <img
                            src={ajkerdeal}
                            alt="image 3"
                            className="w-full h-[350px] rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-9/12 mx-auto object-cover">
                        <img
                            src={Foodpanda}
                            alt="image 4"
                            className="w-full h-[350px] rounded-lg shadow-lg"
                        />
                    </div>
                </Carousel>
            </div>

            {/* Marquee Section */}
            <div>
                <h2 className="text-center text-4xl font-bold animate__animated animate__fadeInUp">
                    Top Brands
                </h2>
                <div className="my-10">
                    <Marquee pauseOnHover>
                        <div className="bg-white shadow-md rounded-lg p-4 border flex items-center space-x-4">
                            {brandsData.map((brand) => (
                                <div key={brand._id}>
                                    <img
                                        onClick={() => handleViewBrand(brand._id)}
                                        src={brand.brand_logo}
                                        alt={`${brand.brand_name} Logo`}
                                        className="w-[100px] h-[60px] ml-12 rounded-lg hover:scale-110 transform transition duration-300 ease-in-out"
                                    ></img>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>

            {/* Brands on Sale Section */}
            <div>
                <h2 className="text-center text-4xl my-8 font-bold animate__animated animate__fadeInRightBig">
                    Brands on Sale
                </h2>
                <div className="grid grid-cols-3 gap-20 px-10">
                    {brandsForSell.map((brand) => (
                        <div
                            key={brand._id}
                            className="p-4 border rounded-lg shadow-md flex flex-col items-start bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out animate__animated animate__fadeInUp"
                        >
                            <div className="w-10/12 mx-auto">
                                <img
                                    src={brand.brand_logo}
                                    alt={brand.brand_name}
                                    className="w-full h-[150px] mb-4 rounded-md "
                                />
                            </div>
                            <div className="ml-8">
                                <h2 className="text-xl font-bold">{brand.brand_name}</h2>
                                <div className="flex gap-4 items-center">
                                    <ReactStars
                                        count={5}
                                        value={brand.rating}
                                        size={24}
                                        activeColor="#ffd700"
                                        edit={false}
                                    />
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
                                        className={`${brand.isSaleOn
                                                ? "text-purple-500"
                                                : "text-gray-400"
                                            } text-sm font-semibold`}
                                    >
                                        {brand.isSaleOn ? "Sale On" : "No Sale"}
                                    </span>
                                </div>
                                <span className="px-4 py-1 mt-2 text-sm font-bold text-white bg-gray-800 rounded">
                                    {brand.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-center text-4xl my-8 font-bold animate__animated animate__fadeInUp">
                    Popular Categories
                </h2>
                <div className="grid grid-cols-3 gap-20 px-10">
                    {popularBrands.map((brand) => (
                        <div
                            key={brand._id}
                            className="p-4 border rounded-lg shadow-md flex flex-col items-start bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out animate__animated animate__fadeInUp"
                        >
                            <div className="w-10/12 mx-auto">
                                <img
                                    src={brand.brand_logo}
                                    alt={brand.brand_name}
                                    className="w-full h-[150px] mb-4 rounded-md "
                                />
                            </div>
                            <div className="ml-8">
                                <h2 className="text-xl font-bold">{brand.brand_name}</h2>
                                <div className="flex gap-4 items-center">
                                    <ReactStars
                                        count={5}
                                        value={brand.rating}
                                        size={24}
                                        activeColor="#ffd700"
                                        edit={false}
                                    />
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
                                        className={`${brand.isSaleOn
                                                ? "text-purple-500"
                                                : "text-gray-400"
                                            } text-sm font-semibold`}
                                    >
                                        {brand.isSaleOn ? "Sale On" : "No Sale"}
                                    </span>
                                </div>
                                <span className="px-4 py-1 mt-2 text-sm font-bold text-white bg-gray-800 rounded">
                                    {brand.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
