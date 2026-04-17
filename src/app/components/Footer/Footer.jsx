import Image from 'next/image';
import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#1a8862]'>
            <div className='p-4 lg:p-0'>
                <div className='container mx-auto pt-20 pb-8 flex flex-col justify-center items-center border-b border-gray-300 mb-8'>
                    <Image loading="eager" className='mb-3'
                        src="/logo-xl.png"
                        width={412}
                        height={61}
                        alt="Picture of the author"
                    />
                    <p className='text-white text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-xl text-white mt-6 text-center'>Social Links</h1>
                        <div className='mt-4 grid grid-cols-3 space-x-4'>
                            <div className='flex justify-center items-center w-10 h-10 rounded-full bg-white'><FaInstagramSquare /></div>
                            <div className='flex justify-center items-center w-10 h-10 rounded-full bg-white'><FaFacebookSquare /></div>
                            <div className='flex justify-center items-center w-10 h-10 rounded-full bg-white'><FaXTwitter /></div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto mt-10 mb-8 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center'>
                    <p className='text-sm text-[#fafafa]'>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex gap-4 text-[#fafafa]'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;