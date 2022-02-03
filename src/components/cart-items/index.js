import React from "react";
import { Edit, Trash2, MinusCircle, PlusCircle } from "react-feather";

const item = [
  {
    barcode: "884432001",
    name: "Notebook White",
    quantity: "01",
    uom: "",
    unitPrice: "100.00",
    total: "100.00",
  },
  {
    barcode: "334212099",
    name: "Cody Fisher",
    quantity: "12",
    uom: "",
    unitPrice: "3.00",
    total: "99.00",
  },
];

export default function CartItems() {
  return (
    <>
      <div className="bg-white h-1/2 mt-4 mx-5 rounded-md bg-opacity-[.57]">
        <div className="flex flex-col">
          <div className="">
            <div className="mt-5 align-middle inline-block min-w-full">
              <div className="mx-4 overflow-hidden sm:rounded-lg">
                <table className="min-w-full">
                  <colgroup>
                    <col span="1" className="w-1/3" />
                    <col span="1" className="w-1/6" />
                    <col span="1" className="w-8" />
                    <col span="1" className="w-1/6" />
                    <col span="1" className="w-1/6" />
                  </colgroup>
                  <thead className="">
                    <tr className="items-center">
                      <th
                        scope="col"
                        className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                      <th
                        scope="col"
                        className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        UOM
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        UNIT PRICE
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        TOTAL
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.map((item) => (
                      <tr
                        className="bg-white border-b-8 border-b-[#F5F8FA] rounded-md inset-y-6"
                        key={item.barcode}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.name}
                        </td>
                        <td className="text-center py-4 whitespace-nowrap text-sm text-gray-500 ">
                          <div className="flex flex-1 gap-4 items-center">
                            <a className="flex flex-col items-center ">
                              <MinusCircle
                                className="h-6 w-6 rounded-xl  bg-[#EBEBEB] text-gray-500"
                                aria-hidden="true"
                              />
                            </a>
                            {item.quantity}

                            <a className="rounded-md flex flex-col items-center">
                              <PlusCircle
                                className="h-6 w-6 rounded-lg bg-[#EBEBEB] text-gray-500 "
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </td>
                        <td className="text-center py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.uom}
                        </td>
                        <td className="text-center py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.unitPrice}
                        </td>
                        <td className="text-center py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.total}
                        </td>
                        <td>
                          <div className="flex flex-1 mr-2 gap-2">
                            <a className="border-2 border-gray-400 rounded-md flex flex-col   w-10  h-10 items-center">
                              <Edit
                                className="h-6 w-6 mt-1 text-gray-400"
                                aria-hidden="true"
                              />
                            </a>
                            <a className="bg-[#CD2323] rounded-md flex flex-col   w-10  h-10 items-center">
                              <Trash2
                                className="h-6 w-6 mt-2 bg-[#CD2323] text-white "
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
