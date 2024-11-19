import React, { Component } from "react";
// import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const brandsData = useLoaderData();
    const brandsForSell = brandsData.filter(brands => brands.isSaleOn === true)
    console.log(brandsForSell)
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <h2>Top Brands</h2>
                <div className="flex">
                    <p>Brands</p>
                    <Marquee pauseOnHover>
                        <Link to='/brands'>I can be a React component, multiple React components, or just some text.</Link>
                    </Marquee>
                </div>
            </div>
            <div>
                <h2>Brands on sell</h2>
                <div className="grid grid-cols-3">
                    {
                        brandsForSell.map(brand => <>
                            <div className="flex flex-col">
                                <h2>Brand Logo</h2>
                                <h2>{brand.brand_name}</h2>
                                <h2>total coupons:{brand.coupons.length}</h2>
                                <h2>Category: {brand.category}</h2>
                            </div>

                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;