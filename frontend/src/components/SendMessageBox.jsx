import React from 'react';
import { IoSend } from "react-icons/io5";

function SendMessageBox() {
  return (
    <div className='px-4 my-3'>
        <form className='relative flex items-center'>
            <input 
                type='text' 
                className='w-full p-3 pr-12 text-sm rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all'
                placeholder='Type a message...'
            />
            <button 
                type='submit' 
                className='absolute right-2 flex items-center justify-center w-10 h-10 rounded-full bg-green-700 hover:bg-green-800 text-white transition-all group'
            >
                <IoSend className='group-hover:translate-x-0.5 transition-transform' />
            </button>
        </form>
    </div>
  )
}

export default SendMessageBox;