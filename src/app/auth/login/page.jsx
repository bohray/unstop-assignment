"use client";

import { useState } from "react";
import {
  initialState,
  loginOptions,
  userFields,
} from "@/constants/static-login-data";

export default function LoginPage() {
  const [formData, setFormData] = useState(initialState);
  const [error, sertError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username !== "emilys") {
      sertError("Username mismatched");
      return;
    }
    console.log(formData);
    // Add login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-around bg-gray-100">
      {/* Left Illustration */}

      <img
        src="/auth.png" // replace with your illustration
        alt="Login Illustration"
        width={540}
        height={540}
      />
      {/* Right Login Form */}
      <div className="bg-white w-full md:w-[35%] p-10 rounded-2xl border border-[#E2E2E2]">
        <h2 className="text-4xl font-medium mb-6 text-left">
          Welcome to{" "}
          <div className="text-[#6358DC] text-5xl font-bold">Unstop</div>
        </h2>

        {/* Social Login */}
        <div className="space-y-4">
          {loginOptions.map((item, index) => {
            const Icon = item.icon; // Capitalized component name
            return (
              <button
                key={`Login-${index}`}
                className="w-full flex items-center justify-center gap-2.5 border rounded-2xl py-4 shadow border-[#E2E2E2] cursor-pointer hover:bg-gray-100"
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
                className="flex items-center gap-5 rounded-2xl p-4 bg-[#F4F4F4]"
              >
                <Icon className="text-gray-400 mr-2" />
                <div className="space-y-1 w-full">
                  <label className="text-xs">{label}</label>
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="w-full outline-none text-base font-semibold"
                    value={formData[name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            );
          })}

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 select-none cursor-pointer">
              <input type="checkbox" className="text-[#6358DC]" /> Remember me
            </label>
            <button className="text-[#6358DC] hover:underline cursor-pointer">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#6358DC] hover:bg-purple-700 text-white py-6 rounded-lg shadow-md font-semibold transition text-base cursor-pointer"
          >
            Login
          </button>
          {error && <span className="text-sm text-red-400">{error}</span>}
        </form>

        {/* Register Link */}
        <p className="text-base font-normal text-center mt-6">
          Don't have an account?{" "}
          <button className="text-[#6358DC] font-semibold hover:underline cursor-pointer">
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
