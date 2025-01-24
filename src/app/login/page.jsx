"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
  
    try {
      console.log("Fetching users...");
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();
      console.log("Fetched users:", users);
  
      const user = users.find((u) => u.email === formData.email);
  
      if (!user) {
        setErrorMessage("Status: Not Found!");
        return;
      }
  
      if (user.password !== formData.password) {
        setErrorMessage("Status: Wrong Pass!");
        return;
      }
  
      console.log("Login successful:", user);
      router.push("/");
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-4 text-red-500 text-sm font-medium">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </form>

        <p>Don't have any account? <span className="underline hover:text-blue-500"><Link href={"/signup"}>register</Link>  </span></p>
      </div>
    </div>
  );
};

export default Login;
