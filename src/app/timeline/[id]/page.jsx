"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CallContext } from './../../context/CallContextProvider';
import { toast } from "react-toastify";

const DetailsPage = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(true);
    const { call, setCall } = useContext(CallContext);
    const handleCall = (type) => {
       

        
        setCall([...call, {
            id: friend.id,
            name: friend.name,
            type: type,
            data: friend.next_due_date
        }])
        if (type === "Calling") {
            toast.success(`${type} with ${friend.name}`)
        }
        else if (type === "Texting") {
            toast.success(`${type} with ${friend.name}`)

        }
        else {
            toast.success(`${type} with ${friend.name}`)

        }

    }

    useEffect(() => {
        fetch("/friends.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((f) => f.id == id);
                setFriend(found);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="flex col-span-full justify-center items-center p-20">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
    </div>;
    if (!friend) return <p>Friend not found </p>;

    return (
        <div className="bg-[#f8fafc]">
            <div className="py-20 container mx-auto p-6">
                <div className="lg:grid grid-cols-5 flex flex-col gap-6">

                    {/* div1 */}
                    <div className="col-span-2 row-span-2">
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
                                {friend.tags.map((tag, index) => (
                                    <div key={index} className="badge badge-info ml-4 font-semibold text-[#244d3f] bg-[#cbfadb] mt-2">{tag}</div>
                                ))}
                            </div>
                            <div className={`badge badge-warning text-white ${friend.status === "almost due" ? "bg-[#efad44]" : " "} ${friend.status === "overdue" ? "bg-[#ef4444]" : " "} ${friend.status === "on-track" ? "bg-[#244d3f]" : " "}  rounded-full mt-2`}>{friend.status}</div>
                            <p className="text-[#64748b] font-semibold text-xl text-center">{friend.bio}</p>
                            <p className="text-[#64748b] text-center">{friend.email}</p>
                        </div>
                    </div>

                    {/* div2 */}
                    <div className="col-start-3 col-span-3 row-start-2 rounded-lg bg-white shadow-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#244d3f] text-xl font-semibold">Relationship Goal</h3>
                                <button className="btn py-2 px-4 text-[#1f2937]">Edit</button>
                            </div>
                            <h1 className="mt-4">Connect every <span className="text-black font-bold">{friend.goal} days</span></h1>
                        </div>
                    </div>

                    {/* div3 */}
                    <div className="col-span-2 space-y-3 col-start-1 row-start- p-2">
                        <div className="bg-white p-4 shadow-lg rounded-lg">
                            <div className="flex justify-center items-center gap-2">
                                <RiNotificationSnoozeFill />
                                <h1 className="text-[#1f2937] font-bold">Snooze {friend.goal / 7} weeks</h1>
                            </div>
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg">
                            <div className="flex justify-center items-center gap-2">
                                <FaArchive />
                                <h1 className="text-[#1f2937] font-bold">Archive</h1>
                            </div>
                        </div>
                        <div className="bg-white p-4 shadow-lg rounded-lg">
                            <div className="flex justify-center items-center gap-2">
                                <MdDelete className="text-[#ef4444] text-2xl" />
                                <h1 className="text-[#ef4444] font-bold">Delete</h1>
                            </div>
                        </div>
                    </div>

                    {/* div4 */}
                    <div className="col-span-3 col-start-3 row-start-3 bg-white shadow-lg rounded-lg p-6">
                        <div>
                            <h3 className="text-[#244d3f] text-xl font-semibold mb-4">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div onClick={() => handleCall("Calling")} className='bg-white p-6 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                                    <FiPhoneCall className="text-2xl mb-2" />
                                    <p className='text-[#1f2937] font-bold'>Call</p>
                                </div>
                                <div onClick={() => handleCall("Textting")} className='bg-white p-6 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                                    <MdOutlineTextsms className="text-2xl mb-2" />
                                    <p className='text-[#1f2937] font-bold'>Text</p>
                                </div>
                                <div onClick={() => handleCall("Video")} className='bg-white p-6 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                                    <CiVideoOn className="text-2xl mb-2" />
                                    <p className='text-[#1f2937] font-bold'>Video</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* div5 */}
                    <div className="col-start-3 row-start-1">
                        <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                            <h1 className='font-semibold text-xl xl:text-2xl'>{friend.days_since_contact}</h1>
                            <p className='text-[#64748b] text-sm text-center'>Days Since Contact</p>
                        </div>
                    </div>

                    {/* div6 */}
                    <div className="col-start-4 row-start-1">
                        <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                            <h1 className='font-semibold text-xl xl:text-2xl mb-2'>{friend.goal}</h1>
                            <p className='text-[#64748b]'>Goal (Days)</p>
                        </div>
                    </div>

                    {/* div7 */}
                    <div className="col-start-5 row-start-1">
                        <div className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-lg'>
                            <h1 className='font-semibold text-xl xl:text-2xl mb-2'>{friend.next_due_date}</h1>
                            <p className='text-[#64748b]'>Next Due</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsPage;