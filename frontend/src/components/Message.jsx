import React from "react";

function Message() {
  return (
    <div className="p-2">
      <div className="chat chat-start">
        {/* Avatar Section */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full ring ring-white/10 shadow-xl">
            <img
              alt="User avatar"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>

        {/* Message Header */}
        <div className="chat-header mb-1">
          <time className="text-[10px] text-slate-400 opacity-70">12:45 PM</time>
        </div>

        {/* The Chat Bubble - Glass style */}
        <div className="chat-bubble bg-white/10 backdrop-blur-md text-white border border-white/10 shadow-md">
          You were the Chosen One!
        </div>

      </div>
    </div>
  );
}

export default Message;