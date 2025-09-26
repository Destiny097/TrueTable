import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa"; // react-icons brand icons
import Logo from "../assets/TrueTable_logo.svg"; // company logo

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Logo / Branding */}
      <div className="w-1/2  flex items-center justify-center p-8">
        <img src={Logo} alt="Company Logo" className="w-64" />
      </div>

      {/* Right side - Login form */}
      <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Login</h1>
        <form className="w-full max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center w-full max-w-sm my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex space-x-4 w-full max-w-sm">
          <button className="flex-1 flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <FaGoogle className="w-6 h-6 mr-2 text-red-500" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <FaFacebookF className="w-6 h-6 mr-2 text-blue-600" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
