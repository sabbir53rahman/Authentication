"use client";
import { userContext } from "@/components/userContext";
import { addUser } from "@/redux/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User", // Default role
  });

  const dispatch = useDispatch();
  const router = useRouter();

  //const {currentUser,setCurrentUser} = useContext(userContext); 

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send user data to the backend
      await fetch("https://authentication-server-n5dd.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (!res.ok) {
            // Stop the promise chain and throw an error

            return alert("Failed to save user");
          }else{
            return res.json();
          }
        })
        .then((data) => {

          //dispatch(addUser(data.data))
          console.log(data)

  
          // Clear the form after submission
          setFormData({
            name: "",
            email: "",
            password: "",
            role: "User",
          });
  
          console.log("User saved successfully:", data);
        });
    } catch (error) {
      // Handle errors
      console.error("Error saving user:", error);
      alert(error.message); // Show the error message in an alert
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your name"
              required
            />
          </div>

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
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
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

          {/* Role Dropdown */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 font-medium">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Seller">Seller</option>
              <option value="Super_Admin">Super Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <span className="underline hover:text-blue-500">
            <Link href="/login"> log in here </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
