"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { userContext } from "@/components/userContext";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store"; // Import your Redux store

export default function RootLayout({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <html lang="en">
      <body>
        <Provider store={store}> {/* Wrap your app with Redux Provider */}
          {/* <userContext.Provider value={{ currentUser, setCurrentUser }}> */}
            <Navbar />
            {children}
          {/* </userContext.Provider> */}
        </Provider>
      </body>
    </html>
  );
}
