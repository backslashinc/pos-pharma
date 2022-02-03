import React from 'react'
import { Plus } from "react-feather"
export default function TopNavbar() {
    return (
        <>
        <header className="w-full">
<div className="relative z-10 flex-shrink-0 h-20 bg-white border-b border-gray-200 shadow-sm flex">

  <div className="flex-1 flex px-4 py-2  sm:px-6 ">
    <div className="flex flex-1 gap-2 justify-items-end ">
      <div className="bg-[#0D47A1] bg-opacity-20 w-40 rounded-md">
        <div className="grid justify-items-end my-2 mr-4">
          <div className="text-gray-500 text-sm uppercase">Total</div>
          <div className="text-black text-lg">199.00</div>
        </div>
      </div>
      <div className="bg-[#E5E5E5] w-40 rounded-md">
        <div className="grid justify-items-end my-2 mr-4">
          <div className="text-[#646464] text-sm uppercase">
            Total
          </div>
          <div className="text-black text-lg">199.00</div>
        </div>
      </div>
      <div className="bg-[#E5E5E5] w-40 rounded-md">
        <div className="grid grid-cols-2  my-2 mr-4">
          <Plus
            className="h-6 w-6 text-gray-500 my-3 ml-4 "
            aria-hidden="true"
          />

          <div className="grid text-black text-md justify-items-end">
            New Sale <p className="justify-items-end">(F3)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</header>
            
        </>
    )
}
