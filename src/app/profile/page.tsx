"use client";
import axios from "axios";
import { get } from "http";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState("nothing");

  const onLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

 const getUserData = async () => {
  try {
    const response = await axios.get("/api/users/tokenData");
    console.log("API response:", response.data);
    setUserData(response.data.data?._id || "NO_ID_FOUND");
  } catch (error: any) {
    console.error("Error fetching user data:", error.message);
  }
};


  // useEffect(() => {
  //  getUserData();
  // }, [])
  

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen py-2">
      <h1 className="mb-4">Profile Page</h1>
      {/* <p>Profile Page </p> */}
      <h2 className="p-3 rounded bg-green-500">
        {userData ==="nothing"  ? (
          "No data is here"
        ) : (
          
          <Link href={`/profile/${userData}`}>{userData}</Link>
        )}
      </h2>
      <hr />
      <button onClick={onLogout} className="bg-orange-500 mt-4">
        Logout
      </button>
      <button onClick={getUserData} className="bg-orange-500 mt-4">
        Get User Data
      </button>
    </div>
  );
}
