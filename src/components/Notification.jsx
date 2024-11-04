import { useState } from "react";
import { useNotification } from "@/query/useNotification";

const Notification = () => {
    const { data, error } = useNotification();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div>
            <button
                id="dropdownNotificationButton"
                onClick={toggleDropdown}
                className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                type="button"
            >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 20"
                >
                    <path
                        d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"
                    />
                </svg>
                <div
                    className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"
                ></div>
            </button>

            {isDropdownVisible && (
                <div
                    id="dropdownNotification"
                    className="z-20 absolute right-0 transform translate-x-1 w-80 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
                    aria-labelledby="dropdownNotificationButton"
                    style={{
                        maxHeight: "80vh", // Membatasi tinggi maksimum dropdown agar tidak overflow pada sumbu y
                        overflowY: "auto", // Menambahkan scroll pada dropdown jika konten melebihi batas
                        maxWidth: "calc(100vw - 20px)", // Membatasi lebar dropdown agar tidak overflow pada sumbu x
                    }}
                >
                    <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                        Notifications
                    </div>
                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                        {data &&
                            data.map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <div className="w-full ps-3">
                                        <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    {item.type}
                                </span>{" "}
                                            {item.message}
                                        </div>
                                        <div className="text-xs text-blue-600 dark:text-blue-500">{item.time}</div>
                                    </div>
                                </a>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notification;
