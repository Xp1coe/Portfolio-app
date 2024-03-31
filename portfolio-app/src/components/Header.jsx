import React from 'react'
import { BsMoonStars } from "react-icons/bs";

export default function Header() {
  return (
    <div className='flex justify-between bg-[#282828] text-white p-2 font-serif items-center'>
      <div className='ml-[100px]'>
        <h1 className='text-xl font-bold'>Developed By Harsh</h1>
      </div>
      <div className='flex gap-7 mr-[100px]'>
        <BsMoonStars className='mt-1 text-xl' />
        <button className="bg-[#33b733] hover:bg-[#2c842c] text-white font-bold py-1 px-2 rounded">
          Resume
        </button>
      </div>
    </div>
  )
}
