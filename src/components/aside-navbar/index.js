import React from "react";

export default function ASide() {
  return (
    <>
      <aside className="hidden w-96 bg-[#E8EFF3] border-l border-gray-200 overflow-y-auto lg:block ">
        {/* Payment Details */}

        <div className="bg-[#F5F8FA] p-2 pt-6 h-1/2 mt-20 rounded-md mx-4 space-y-2 ">
          <div className="h-3/4">
            <div className="grid grid-cols-2 justify-items-end mx-5 mb-5">
              <p className="text-xl font-medium text-gray-500 group-hover:text-gray-700 uppercase">
                sub total
              </p>
              <p className="text-xl font-medium text-gray-500 group-hover:text-gray-700 uppercase">
                199.00
              </p>
            </div>
            <div className="grid grid-cols-2 justify-items-end mx-5 mb-5">
              <p className="text-xl font-medium text-gray-500 group-hover:text-gray-700 uppercase">
                discount
              </p>
              <p className="text-xl font-medium text-gray-500 group-hover:text-gray-700 uppercase">
                00.00
              </p>
            </div>
            <div className="grid grid-cols-2 justify-items-end mx-5 mb-5">
              <p className="text-xl font-medium text-gray-500 group-hover:text-gray-700 uppercase">
                gst
              </p>
              <p className="text-xl font-medium text-gray-500 group-hover:text-gray-700 uppercase">
                11.94
              </p>
            </div>
            <div className="grid grid-cols-2 justify-items-end mx-5 mb-5">
              <p className="text-xl font-medium text-gray-500 group-hover:text-gray-700 uppercase">
                total
              </p>
              <p className="text-xl font-medium text-gray-500 group-hover:text-gray-700 uppercase">
                210.94
              </p>
            </div>
          </div>
          <div class="flex justify-center px-4">
            <button
              type="submit"
              class="w-full  bg-[#1976D2]  uppercase px-4 py-4 border border-transparent text-base font-medium rounded-md bg-blue-000 text-white  text-center"
            >
              Payments
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
