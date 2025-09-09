"use client";

import { useEffect, useState } from "react";
import {
  initialUserState,
  loginOptions,
  userFields,
} from "@/constants/static-login-data";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { BACKEND_URL, urls } from "@/constants/urls";

export default function LoginPage() {
  const [formData, setFormData] = useState(initialUserState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) router.push(urls.home);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { username, password } = formData;

    if (username !== "emilys") {
      setError("Username mismatch");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password length mismatch");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("userData", JSON.stringify(data));
      router.push(urls.home);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-around bg-gray-100 p-2 ld:p-0">
      {/* Left Illustration */}
      <Image
        src="/auth.png"
        alt="Login Illustration"
        width={540}
        height={540}
        priority
        className="hidden lg:inline-block"
      />
      {/* Right Login Form */}
      <div className="bg-white w-full lg:w-[35%] p-10 rounded-2xl border border-grayish-50">
        <h2 className="text-4xl font-medium mb-6 text-left">
          Welcome to <div className="text-iris text-5xl font-bold">Unstop</div>
        </h2>

        {/* Social Login */}
        <div className="space-y-4">
          {loginOptions.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={`Login-${index}`}
                className="w-full flex items-center justify-center gap-2.5 border rounded-2xl py-4 shadow border-grayish-50 cursor-pointer hover:bg-gray-100"
              >
                <Icon size={32} className={item?.class} />
                <div className="text-base font-medium">
                  Login with {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {userFields.map(({ name, label, placeholder, type, icon }) => {
            const Icon = icon;
            return (
              <div
                key={name}
                className="flex items-center gap-5 rounded-2xl p-4 bg-grayish-80"
              >
                <Icon className="mr-1 shrink-0" size={20} />
                <div className="space-y-1 w-full">
                  <label className="text-xs">{label}</label>
                  <input
                    type={name === "password" && showPassword ? "text" : type}
                    name={name}
                    placeholder={placeholder}
                    className="w-full outline-none text-base font-semibold"
                    value={formData[name]}
                    onChange={handleChange}
                    required
                  />
                </div>
                {name === "password" && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword((prev) => !prev);
                    }}
                    className="focus:outline-none cursor-pointer shrink-0 mr-1"
                  >
                    {showPassword ? (
                      <IoEyeOff size={24} />
                    ) : (
                      <IoEye size={24} />
                    )}
                  </button>
                )}
              </div>
            );
          })}

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 select-none cursor-pointer">
              <input type="checkbox" /> Remember me
            </label>
            <button className="text-iris hover:underline cursor-pointer">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="flex w-full bg-iris hover:bg-purple-700 text-white justify-center py-6 rounded-lg shadow-md font-semibold transition text-base cursor-pointer"
            disabled={loading}
          >
            {!loading ? (
              "Login"
            ) : (
              <FaSpinner className="animate-spin text-2xl" />
            )}
          </button>
          {error && <span className="text-sm text-red-400">{error}</span>}
        </form>

        {/* Register Link */}
        <p className="text-base font-normal text-center mt-3">
          Don't have an account?{" "}
          <button className="text-iris font-semibold hover:underline cursor-pointer">
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
