"use client";
import Loader from "@/components/home/Loader";
import { urls } from "@/constants/urls";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";

const page = () => {
  const [userData, setUserdata] = useState({});
  const [loading, setLoading] = useState(true);
  const [logoutLoad, setLogoutLoad] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserdata(JSON.parse(data));
      setLoading(false);
    } else {
      router.push(urls.login);
    }
  }, []);

  const handleLogout = () => {
    setLogoutLoad(true);
    localStorage.removeItem("userData");
    router.push(urls.login);
  };

  if (loading) return <Loader />;

  const { firstName, lastName, gender, email, image } = userData;
  const name = firstName + " " + lastName;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-32 px-4">
      {/* Heading */}
      <h1 className="flex flex-col text-2xl md:text-4xl font-medium mb-10 text-center">
        Welcome to <div className="text-iris font-black text-5xl">Unstop</div>
      </h1>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl px-2.5 py-6 w-full max-w-sm flex flex-col gap-5 items-center text-center border border-grayish-50">
        {image && (
          <Image
            src={image}
            alt={name}
            height={120}
            width={120}
            className="rounded-full object-cover"
          />
        )}

        {/* User Info */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-iris text-base font-bold">{name}</h2>
          <div className="flex flex-col gap-1 text-xs font-medium text-gray-500">
            <p>{email}</p>
            <p>{gender}</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-fit bg-iris hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition cursor-pointer"
        >
          {!logoutLoad ? (
            "Logout"
          ) : (
            <FaSpinner className="animate-spin text-2xl mx-2.5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default page;
