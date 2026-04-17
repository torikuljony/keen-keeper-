"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";

const Navbar = () => {
    const pathname = usePathname()
    const li = <>
        <div className="space-x-4 flex">
            <li><Link className={`font-bold Link ${pathname === '/' ? 'bg-[#244d3f] text-white font-bold' : ''}`} href={"/"}><AiOutlineHome />
                Home</Link></li>
            <li><Link className={`font-bold Link ${pathname === '/timeline' ? 'bg-[#244d3f] text-white font-bold' : ''}`} href={"/timeline"}><MdOutlineAccessTime />
                Timeline</Link></li>
            <li><Link className={`font-bold Link ${pathname === '/status' ? 'bg-[#244d3f] text-white font-bold' : ''}`} href={"/status"}><FaChartLine />
                Stats</Link></li>
        </div>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar flex justify-between container mx-auto lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 p-3 shadow">
                            {li}
                        </ul>
                    </div>
                    <Link href={"/"} className="text-2xl text-[#1f2937] font-bold">KeenKeeper</Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {li}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;