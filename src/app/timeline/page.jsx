// "use client"
// import React, { useState } from 'react';
// import { FiPhoneCall } from 'react-icons/fi';
// import { CallContext } from '../context/CallContextProvider';
// import { useContext } from 'react';
// import { MdOutlineTextsms } from 'react-icons/md';
// import { CiVideoOn } from 'react-icons/ci';
// import { FaAngleDown } from "react-icons/fa";


// const Page = () => {
//     const [filter, setFilter] = useState("all")
//     const { call } = useContext(CallContext);
//     const order = {
//         Calling: 1,
//         Textting: 2,
//         Video: 3
//     }
//     const filteredData = filter === "all" ? call : call.filter(item => item.type === filter)
//     const sortedData = [...filteredData].sort((a, b) => {
//         return order[a.type] - order[b.type];
//     })
//     return (
//         <div className="bg-[#f8fafc] py-20 p-4 md:p-6">
//             <div className='container mx-auto'>
//                 <h1 className="font-bold text-5xl text-[#1f2937]">Timeline </h1>
//                 <div className='mt-4'>
//                     <div className="dropdown dropdown-bottom">
//                         <div tabIndex={0} role="button" className="btn m-1 items-center flex w-75 justify-between">Filter Timeline <FaAngleDown /></div>
//                         <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
//                             <li><button onClick={() => setFilter("all")}>All</button></li>
//                             <li><button onClick={() => setFilter("Calling")}>Call</button></li>
//                             <li><button onClick={() => setFilter("Video")}>Video</button></li>
//                             <li><button onClick={() => setFilter("Textting")}>Text</button></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className='mt-6'>
//                     <div className='space-y-4 border border-black p-4 rounded-lg'>
//                         {sortedData.length === 0 ? (
//                             <div className='p-20 bg-white rounded-lg flex justify-center gap-4 items-center shadow-lg'>
//                                 <p>data not added</p>
//                             </div>
//                         ) : (
//                             sortedData.map(data => (
//                                 <div key={data.id} className='p-4 boder border-gray-300 bg-white rounded-lg flex gap-4 items-center shadow-lg'>
//                                     <div>
//                                         {data.type === "Calling" && <FiPhoneCall className="text-2xl mb-2" />}
//                                         {data.type === "Textting" && <MdOutlineTextsms className="text-2xl mb-2" />}
//                                         {data.type === "Video" && <CiVideoOn className="text-2xl mb-2" />}
//                                     </div>
//                                     <div>
//                                         <h1 className='text-[#244d3f] font-bold text-xl'>{data.type} <span className='text-[#64748b] text-sm'>{data.name}</span></h1>
//                                         <p className='text-[#64748b] text-sm mt-1'>March 29, 2026</p>
//                                     </div>
//                                 </div>
//                             ))
//                         )
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;