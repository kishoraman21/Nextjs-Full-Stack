"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { set } from "mongoose";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      // console.log("signup success", response.data);
      router.push("/login");
      toast.success("Signup Successful. Please Login");
    } catch (error: any) {
      console.log("signup error", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen py-2">
      <h1 className="mb-4">{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <label htmlFor="username"> Username </label>
      <input
        className="p-2 border-gray-300 bg-amber-100 rounded-2xl mt-2 "
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />

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
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onSignUp}
        className="p-2 mt-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "Loading..." : "Sign Up"}
      </button>
      <Link href="/login" className="border border-gray-200 rounded-3xl p-3">
        Visit Login
      </Link>
    </div>
  );
}
