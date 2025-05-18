import React from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
import { useState } from "react";

const HomePage = () => {
  const [selectedChat, setSelectedChat] = useState(false);
  return (
    <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
      <div
        className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${
          selectedChat
            ? "md:grid-cols-[ifr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-2"
        }`}
      >
        <Sidebar
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
        <ChatContainer
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
        <RightSidebar
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
      </div>
    </div>
  );
};

export default HomePage;
