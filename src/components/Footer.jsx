import React from 'react';
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import x from '../assets/x.png'

const Footer = () => {
    return (
        <div className=' bg-gradient-to-r  from-[#8E44AD]  to-[#6A0DAD] mt-8'>
            <footer className="footer flex items-center justify-evenly p-10">
                <nav>
                    <h6 className="text-[#09080F] font-bold">Services</h6>
                    <a className="link link-hover text-white">Shipping</a>
                    <a className="link link-hover text-white">Return Policy</a>
                    <a className="link link-hover text-white">Customer Support</a>
                    <a className="link link-hover text-white">FAQ</a>
                    <a className="link link-hover text-white">Track Order</a>
                </nav>
                <nav>
                    <h6 className="text-[#09080F] font-bold">Company Info</h6>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Careers</a>
                    <a className="link link-hover text-white">Privacy Policy</a>
                    <a className="link link-hover text-white">Terms of Service</a>
                    <a className="link link-hover text-white">Contact Us</a>
                </nav>

                <div>
                    <nav className='flex gap-2'>
                        <a href="https://www.facebook.com/piash.islam.2000/" target="_blank">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="https://x.com/PiashIslam2K" target="_blank">
                            <img className='' src={x} alt="" />
                        </a>
                        <a href="https://www.instagram.com/piashislam2k" target="_blank">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="https://www.youtube.com/@piashislam4637" target="_blank">
                            <img src={youtube} alt="" />
                        </a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;