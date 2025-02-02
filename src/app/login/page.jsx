"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { userContext } from "@/components/userContext";
import { useDispatch } from "react-redux";
import { addUser } from "@/redux/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();
  //const {currentUser ,setCurrentUser } = useContext(userContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://authentication-server-n5dd.onrender.com/currentUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(addUser(data.data));
          alert(data.message);
          router.push("/"); 
        });
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // UseEffect to log currentUser after it is updated
  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </form>

        <p>
          Dont have an account?{" "}
          <span className="underline hover:text-blue-500">
            <Link href="/signup">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
