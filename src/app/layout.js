"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { userContext } from "@/components/userContext";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [currentUser, setCurrentUser] = useState({})
  return (
    <html lang="en">
      <body>
        <userContext.Provider value={{currentUser, setCurrentUser}}>
          <Navbar />
          {children}
        </userContext.Provider>
      </body>
    </html>
  );
}
