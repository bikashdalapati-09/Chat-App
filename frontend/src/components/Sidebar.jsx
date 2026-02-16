import React from "react";
import { BsSearch } from "react-icons/bs";
import OtherUsers from "./OtherUsers";

function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col h-full">
      {/* Search Bar - Fixed at top */}
      <form className="flex items-center gap-2">
        <input
          type="text"
          className="input input-bordered rounded-full bg-white/10 text-white placeholder-slate-400 w-full focus:outline-none focus:border-green-500 transition-all"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="btn btn-circle bg-green-700 hover:bg-green-800 border-none text-white transition-colors"
        >
          <BsSearch size={18} />
        </button>
      </form>

      <div className="divider px-3 opacity-30"></div>
      <OtherUsers />
    </div>
  );
}

export default Sidebar;
