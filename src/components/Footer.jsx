import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#FFFFFF] pt-24'>
            <h3 className='text-center text-3xl font-bold text-[#09080F]'>Gadget Heaven</h3>
            <p className='text-center text-[#09080F99] pb-8'>Leading the way in cutting-edge technology and innovation.</p>
            <hr />

            <footer className="footer flex justify-evenly p-10">
                <nav>
                    <h6 className="text-[#09080F] font-bold">Services</h6>
                    <a className="link link-hover text-[#09080F99]">Product Support</a>
                    <a className="link link-hover text-[#09080F99]">Order Tracking</a>
                    <a className="link link-hover text-[#09080F99]">Shipping & Delivery</a>
                    <a className="link link-hover text-[#09080F99]">Returns</a>
                </nav>
                <nav>
                    <h6 className="text-[#09080F] font-bold">Company</h6>
                    <a className="link link-hover text-[#09080F99]">About us</a>
                    <a className="link link-hover text-[#09080F99]">Careers</a>
                    <a className="link link-hover text-[#09080F99]">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-[#09080F] font-bold">Legal</h6>
                    <a className="link link-hover text-[#09080F99]">Terms of use</a>
                    <a className="link link-hover text-[#09080F99]">Privacy policy</a>
                    <a className="link link-hover text-[#09080F99]">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;