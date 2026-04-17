import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Card = ({ friend }) => {
    return (
        <Link href={`/timeline/${friend.id}`}>
            <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                <Image className='mb-3 rounded-full'
                    src={friend.picture}
                    width={80}
                    height={80}
                    alt="Picture of the author"
                />
                <h1 className='font-semibold text-xl text-[#1f2937] mb-2'>{friend.name}</h1>
                <p className='text-[#64748b]'>{friend.days_since_contact}d ago</p>
                <div>
                    {friend.tags.map((tag,index) => (
                        <div key={index} className="badge badge-info ml-4 font-semibold text-[#244d3f] bg-[#cbfadb] mt-2">{tag}</div>
                    ))}
                </div>
                <div className={`badge badge-warning text-white ${friend.status === "almost due" ? "bg-[#efad44]" : " "} ${friend.status === "overdue" ? "bg-[#ef4444]" : " "} ${friend.status === "on-track" ? "bg-[#244d3f]" : " "}  rounded-full mt-2`}>{friend.status}</div>
            </div>
        </Link>
    );
};

export default Card;