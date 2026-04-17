"use client";
import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="bg-[#f8fafc] py-20">
        <div>
          <Banner></Banner>
          <div className="container mx-auto p-4">
            <h1 className="font-bold text-[#1f2937] text-2xl">Your Friends</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loading ? (
                <div className="flex col-span-full justify-center items-center">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                  <span className="loading loading-bars loading-xl"></span>
                </div>
              ) : (
                friends.map((friend) => (
                  <Card key={friend.id} friend={friend}></Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}