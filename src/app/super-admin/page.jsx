"use client";
import { userContext } from "@/components/userContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useSelector } from "react-redux";

function SuperAdmin() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("Current Redux User:", currentUser);
  const router = useRouter();
  if (currentUser.role !== "Super_Admin") {
    return router.push("/login");
  }
  return (
    <div className="container mx-auto">
      <h2>{currentUser.name}</h2>
      <p>{currentUser.email}</p>
      <p>{currentUser.role}</p>
    </div>
  );
}

export default SuperAdmin;
