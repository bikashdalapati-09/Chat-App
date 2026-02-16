import React from "react";

function Otheruser() {
  return (
    <div>
      <div className="flex gap-3 items-center hover:bg-white/10 rounded p-2 py-3 cursor-pointer transition-all duration-200 group">
        {/* Avatar Section */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="user-profile"
            />
          </div>
        </div>

        {/* User Info Section */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <p className="font-bold text-slate-100 group-hover:text-white transition-colors">
              Bikash Dalapati
            </p>
            {/* Added a subtle status or time icon for extra beauty */}
            <span className="text-xs text-slate-400">12:45 PM</span>
          </div>
          <p className="text-xs text-slate-300 truncate w-32">Online</p>
        </div>
      </div>

      {/* Cleaner Divider */}
      <div className="divider my-0 py-0 h-1 opacity-20"></div>
    </div>
  );
}

export default Otheruser;
