import React from 'react'

export default function Footer
    () {
    return (
        <footer className="backdrop-blur bg-red-100/90 rounded-lg shadow-sm dark:bg-gray-900 p-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="logo.png" className="h-15" alt="Z9Trade Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Z9Trade</span> */}
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#features" className="hover:underline me-4 md:me-6">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-[#610e00] sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="/" className="hover:underline">Z9Trade</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}
