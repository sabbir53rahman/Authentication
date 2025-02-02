"use client";
import { userContext } from "@/components/userContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useSelector } from "react-redux";

function Seller() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("Current Redux User:", currentUser);
  const router = useRouter();
  if (
    currentUser?.role === "Admin" ||
    currentUser?.role === "Super_Admin" ||
    currentUser?.role === "Seller"
  ) {
    return (
      <div className="container mx-auto">
        <h2>{currentUser.name}</h2>
        <p>{currentUser.email}</p>
        <p>{currentUser.role}</p>
      </div>
    );
  }

  return router.push("/login");
}

export default Seller;
