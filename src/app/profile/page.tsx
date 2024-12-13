"use client";
import React, { useState } from "react";
import Image from "next/image";
import profileIcon from "../../../public/profileIcon.png";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    city: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6 ">
          <Image
            src={profileIcon}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
          <button
            type="button"
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {}}
          >
            Update
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Username", name: "username" },
            { label: "Email", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Phone Number", name: "phoneNumber" },
            { label: "City", name: "city" },
            { label: "Country", name: "country" },
          ].map(({ label, name, type = "text" }) => (
            <div className="mb-4" key={name}>
              <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={name}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
