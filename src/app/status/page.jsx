"use client"
import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip, Cell, Legend } from 'recharts';
import { CallContext } from '../context/CallContextProvider';

const Page = () => {
    const { call } = useContext(CallContext);

    const chartData = [
        {
            name: "Call",
            value: call.filter(item => item.type === "Calling").length
        },
        {
            name: "Text",
            value: call.filter(item => item.type === "Textting").length
        },
        {
            name: "Video",
            value: call.filter(item => item.type === "Video").length
        }
    ];

    const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

    const isEmpty = chartData.every(item => item.value === 0);

    return (
        <div className="bg-[#f8fafc] py-20 p-6">
            <div className='container mx-auto text-center border border-gray-300 p-4 rounded-lg'>
                <h1 className="font-bold text-xl md:text-5xl text-[#1f2937] mb-6">
                    Friendship Analytics
                </h1>

                <div className="flex justify-center items-center">
                    {isEmpty ? (
                        <div className='p-20 w-full bg-white rounded-lg shadow-lg'>
                            <p>No data added</p>
                        </div>
                    ) : (
                        <PieChart width={400} height={400}>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={80}
                                outerRadius={120}
                                paddingAngle={5}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>

                            <Tooltip />
                            <Legend />
                        </PieChart>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;