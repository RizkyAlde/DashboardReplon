import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineShoppingCart, MdOnlinePrediction } from "react-icons/md";
import { PiGasPump } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { UseNotification } from "@/query/useNotification";
import { IoIosInformationCircleOutline } from "@react-icons/all-files/io/IoIosInformationCircleOutline";
import Notification from "@/components/Notification";

export function SidebarWithBurgerMenu({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <button
                onClick={toggleSidebar}
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Toggle sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0`}
                aria-label="Sidebar"
            >
                <div
                    className="h-full px-3 py-4 overflow-y-auto"
                    style={{
                        background: "rgb(174,210,96)",
                        background: "linear-gradient(0deg, rgba(158, 255, 61, 1) 2%, rgba(255,194,36,1) 100%)",
                    }}
                >
                    <div className="flex justify-center flex-col items-center">
                        <Image src="/assets/images/logo.png" alt="Logo" width={250} height={250} />
                        <h2 className="mt-4 text-2xl mb-4 font-semibold text-slate-100 dark:text-white">Dashboard Replon</h2>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href="/admin"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600/50 group"
                                onClick={toggleSidebar}
                            >
                                <RxDashboard/>
                                <span className="ms-3 font-semibold text-lg">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/monitoring"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600/50 group"
                                onClick={toggleSidebar}
                            >
                                <FiMonitor/>
                                <span className="ms-3 font-semibold text-lg">Monitoring</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/production"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600/50 group"
                                onClick={toggleSidebar}
                            >
                                <MdOutlineShoppingCart/>
                                <span className="ms-3 font-semibold text-lg">Produksi</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/prediction"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600/50 group"
                                onClick={toggleSidebar}
                            >
                                <MdOnlinePrediction/>
                                <span className="ms-3 font-semibold text-lg">Prediksi</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/pump"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600/50 group"
                                onClick={toggleSidebar}
                            >
                                <PiGasPump/>
                                <span className="ms-3 font-semibold text-lg">Pompa</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/detail"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600/50 group"
                                onClick={toggleSidebar}
                            >
                                <IoIosInformationCircleOutline />
                                <span className="ms-3 font-semibold text-lg">Detail</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600/50 group"
                                onClick={toggleSidebar}
                            >
                                <IoIosLogOut/>
                                <span className="ms-3 font-semibold text-lg">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className={`p-4 sm:ml-64 ${isSidebarOpen ? "opacity-50" : ""}`}
                 onClick={() => isSidebarOpen && toggleSidebar()}>
                <div className="sticky top-0 z-30 shadow-md bg-black text-white rounded-2xl pointer-events-none">
                    <div className="flex justify-between items-center p-4">
                        <div className="text-center">
                            <h1 className="text-xl font-semibold">EEPIS</h1>
                            <h1 className="text-md font-semibold">Dashboard Replon</h1>
                        </div>
                        <p className="hidden lg:inline text-center text-xs">
                            Visualization of greenhouse melon cultivation conditions Wates District, Blitar Regency,
                            East Java
                        </p>
                        <div className="relative z-20 pointer-events-auto">
                            <Notification/>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {children}
                </div>
            </div>
        </>
    );
}
