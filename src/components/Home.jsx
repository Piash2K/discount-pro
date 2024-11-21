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
            <div className="w-full mx-auto my-10 animate__animated animate__fadeInDown">
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
            <div className="lg:w-10/12 mx-auto">
                <h2 className="text-center text-2xl lg:text-4xl my-6 lg:my-8 font-bold">
                    Brands on Sale
                </h2>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mx-4 md:grid-cols-2 lg:gap-10 lg:px-10">
                    {brandsForSell.map((brand) => (
                        <div
                            key={brand._id}
                            className="card bg-base-100 w-full shadow-xl transition-transform duration-300 ease-in-out hover:scale-105  mx-auto"
                        >
                            <figure>
                                <img
                                    src={brand.brand_logo}
                                    alt={brand.brand_name}
                                    className="h-[120px] lg:h-[150px] object-contain p-4"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-sm lg:text-lg">
                                    {brand.brand_name}
                                </h2>
                                <div className="flex items-center gap-2 mb-2">
                                    <ReactStars
                                        count={5}
                                        value={brand.rating}
                                        size={16}
                                        activeColor="#ffd700"
                                        edit={false}
                                    />
                                    <span className="text-sm">{brand.rating.toFixed(1)}</span>
                                </div>
                                <p className="text-sm lg:text-base text-gray-600">
                                    {brand.description}
                                </p>
                                <p className="text-sm lg:text-base font-medium text-gray-700">
                                    {brand.coupons.length} Coupons Available
                                </p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-outline text-xs lg:text-sm">
                                        {brand.category}
                                    </div>
                                    {brand.isSaleOn ? (
                                        <div className="badge badge-outline badge-success text-xs lg:text-sm">
                                            On Sale
                                        </div>
                                    ) : (
                                        <div className="badge badge-outline badge-gray text-xs lg:text-sm">
                                            No Sale
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-10/12 mx-auto">
                <h2 className="text-center text-4xl my-8 font-bold animate__animated animate__fadeInUp">
                    Popular Categories
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-10">
                    {popularBrands.map((brand) => (
                        <div
                            key={brand._id}
                            className="relative p-6  border rounded-xl shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out animate__animated animate__fadeInUp"
                        >
                            {/* Brand Image */}
                            <div className="w-full h-[180px] overflow-hidden rounded-md">
                                <img
                                    src={brand.brand_logo}
                                    alt={brand.brand_name}
                                    className="object-contain w-full h-full"
                                />
                            </div>

                            {/* Brand Information */}
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {brand.brand_name}
                                </h3>
                                <div className="flex items-center gap-2 mt-2">
                                    <ReactStars
                                        count={5}
                                        value={brand.rating}
                                        size={24}
                                        activeColor="#ffd700"
                                        edit={false}
                                    />
                                    <span className="text-sm font-medium text-gray-600">
                                        {brand.rating.toFixed(1)}
                                    </span>
                                </div>
                                <p className="mt-2 mb-6 text-sm text-gray-600 leading-relaxed">
                                    {brand.description.length > 100
                                        ? `${brand.description.substring(0, 100)}...`
                                        : brand.description}
                                </p>
                            </div>

                            {/* Status and Category */}
                            <div className="absolute bottom-4 left-6">
                                <span
                                    className={`px-3 py-1 text-xs font-bold rounded-full ${brand.isSaleOn ? "bg-purple-500 text-white" : "bg-gray-300 text-gray-700"
                                        }`}
                                >
                                    {brand.isSaleOn ? "On Sale" : "No Sale"}
                                </span>
                            </div>
                            <div className="absolute bottom-4 right-6">
                                <span className="px-4 py-1 text-xs font-semibold text-white bg-gray-800 rounded-full">
                                    {brand.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className='flex justify-center bg-[#9538E2] mt-20'>
                    <div className='text-center   py-5 w-9/12 lg:w-7/12'>
                        <h1 className='text-5xl font-bold text-white '>Frequently Asked Questions.</h1>
                    </div>
                </div>
                <div className='flex justify-center mt-8' >
                    <div className='flex flex-col items-center gap-2  w-11/12'>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Q: How do I find coupons on your website?</div>
                            <div className="collapse-content">
                                <p>A: You can easily find coupons by browsing through categories or searching for specific brands or products using our search bar. We also feature popular and trending deals on the homepage for your convenience.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Q: Are the coupons updated regularly?</div>
                            <div className="collapse-content">
                                <p>A: Yes! We update our coupons daily to ensure you get access to the latest deals and discounts from top e-commerce platforms in Bangladesh.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Q: How do I use a coupon I found on your website?</div>
                            <div className="collapse-content">
                                <p>A: Click on the coupon you want to use, and you’ll either see a code or be redirected to the store’s website where the discount is automatically applied. For codes, copy the code and paste it during checkout on the store's website.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Q: Are these coupons free to use?</div>
                            <div className="collapse-content">
                                <p>A: Absolutely! All the coupons listed on our website are free to access and use. You don’t need to pay anything to grab a discount.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Q: What types of discounts are available on your website?</div>
                            <div className="collapse-content">
                                <p>A: We offer various discounts such as percentage discounts (e.g., 20% off), cashback offers, free shipping deals, and buy-one-get-one (BOGO) offers from top Bangladeshi online stores like Daraz, Pickaboo, Foodpanda, and more.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Q:  Do I need to create an account to use the coupons?</div>
                            <div className="collapse-content">
                                <p>A: No, you don’t need an account to browse or use coupons. However, creating an account allows you to save your favorite deals, get personalized recommendations, and receive updates on exclusive offers.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Q: Why is a coupon not working for me?</div>
                            <div className="collapse-content">
                                <p>A: Coupons may not work for several reasons:
                                    <p>The coupon has expired.</p>
                                    <p>The coupon is only valid for specific products or categories.</p>
                                    <p> You might not meet the minimum purchase amount required.</p>
                                    <p>Please read the terms and conditions provided with the coupon to ensure it applies to your purchase.</p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
