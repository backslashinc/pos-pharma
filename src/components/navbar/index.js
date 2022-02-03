import React from "react";
import {
  Airplay,
  Inbox,
  FileText,
} from "react-feather";

const sidebarNavigation = [
  { name: "Sales", href: "/sales", icon: Airplay, current: true },
  { name: "Register", href: "/register", icon: Inbox, current: false },
  { name: "Quotation", href: "/quotation", icon: FileText, current: false },
  { name: "", href: "#", icon: Airplay, current: false },
  { name: "", href: "#", icon: Airplay, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {

  return (
    <>
      {/* Narrow sidebar */}
      <div className="hidden w-28 h-screen bg-[#0D47A1] overflow-y-auto md:block">
        <div className="w-full py-6 flex flex-col items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
              alt="Pos Pharamcy"
            />
          </div>
          <div className="flex-1 mt-10 w-full px-2 space-y-2 ">
            {sidebarNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-white bg-opacity-[.03] text-white"
                    : "text-white hover:bg-opacity-[.10] hover:text-white",
                  "bg-white bg-opacity-[.03] text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-white group-hover:text-white",
                    "h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                <span className="mt-2">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
