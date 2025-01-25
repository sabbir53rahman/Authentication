"use client";
import { userContext } from "@/components/userContext";
import React, { useContext } from "react";

function User() {
  const { currentUser } = useContext(userContext); 

  if (!currentUser) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto">
      <h2>{currentUser.name}</h2>
        <p>{currentUser.email}</p>
        <p>{currentUser.role}</p>
    </div>
  );
}

export default User;
