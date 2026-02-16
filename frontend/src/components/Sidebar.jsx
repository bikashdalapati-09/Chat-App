import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import OtherUsers from "./OtherUsers";
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get('http://localhost:7000/api/v1/user/logout')
      navigate('/login')
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      
    }
  }
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
      <div className="mt-auto pt-2">
        <button onClick={logoutHandler} className="btn btn-ghost text-white hover:bg-red-500/20 gap-2">
          <BiLogOut className="w-6 h-6 cursor-pointer" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
