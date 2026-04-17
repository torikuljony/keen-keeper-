import React from 'react';
import { FaPlus } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='container mx-auto p-4 lg:p-10'>
            <div className='flex flex-col justify-center items-center text-center mb-10'>
                <div>
                    <h1 className='mb-4 text-2xl lg:text-5xl font-semibold text-[#1f2937]'>Friends to keep close in your life</h1>
                    <p className='text-[#64748b] mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.</p>
                </div>
                <button className="btn btn-success text-white font-bold"><FaPlus /> Add a Friend</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                    <h1 className='font-semibold text-3xl mb-2'>10</h1>
                    <p className='text-[#64748b]'>Total Friends</p>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                    <h1 className='font-semibold text-3xl mb-2'>3</h1>
                    <p className='text-[#64748b]'>On Track</p>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                    <h1 className='font-semibold text-3xl mb-2'>6</h1>
                    <p className='text-[#64748b]'>Need Attention</p>
                </div>
                <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                    <h1 className='font-semibold text-3xl mb-2'>12</h1>
                    <p className='text-[#64748b]'>Interactions This Month</p>
                </div>
            </div>
            <hr className='my-10 text-gray-300'></hr>
        </div>
    );
};

export default Banner;