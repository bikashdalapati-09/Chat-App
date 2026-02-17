import React from "react";
import SendMessageBox from "./SendMessageBox";
import Messages from "./Messages";
import { useSelector } from "react-redux";

function MessageContainer() {
  const {selectedUser} = useSelector(store => store.user)
  
  if(!selectedUser){
    return;
  }
  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
      {/* MATCHING HEADER */}
      <div className="flex gap-3 items-center bg-white/5 backdrop-blur-md px-4 py-3 border-b border-white/10">
        {/* Avatar Section (Matches Otheruser) */}
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src={selectedUser.profilePhoto}
              alt="user-profile"
            />
          </div>
        </div>

        {/* User Info Section */}
        <div className="flex flex-col flex-1">
          <p className="font-bold text-slate-100">{selectedUser.fullname}</p>
          <p className="text-xs text-white">Online</p>
        </div>
      </div>
      <Messages/>
      <SendMessageBox/>
    </div>
  );
}

export default MessageContainer;