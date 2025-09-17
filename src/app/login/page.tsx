"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login successful", response.data);
      toast.success("Login Successful");
      router.push("/profile");
    } catch (error:any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
      
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen py-2">
      <h1 className="mb-4">Login</h1>
      <hr />

      <label htmlFor="email" className="mt-4">
        {" "}
        email{" "}
      </label>
      <input
        className="p-2 border-gray-300  bg-amber-100 rounded-2xl mt-2"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password" className="mt-4">
        {" "}
        password{" "}
      </label>
      <input
        className="p-2 border-gray-300  bg-amber-100 rounded-2xl mt-2"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onLogin}
        className="p-2 mt-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login{" "}
      </button>
      <Link href="/signup" className="border border-gray-200 rounded-3xl p-3">
        Visit Signup
      </Link>
    </div>
  );
}
