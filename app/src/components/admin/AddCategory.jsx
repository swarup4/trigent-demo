import React, { Fragment, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { object, string, ref } from 'yup'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'


const initialValues = {
    fname: '',
    lname: '',
    role: '',
    username: '',
    email: '',
    password: ''
};
const schema = object({
    fname: string().required('Enter your First name'),
    lname: string().required('Enter your Last name'),
    role: string().required('Select your role'),
    username: string().required('Enter your username'),
    email: string().email('Email should be valid').required('Enter your email'),
    password: string().required('Enter your password')
});

export default function AddCategory() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transition duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Sidebar Content */}
                <div className="p-4">
                    <h1 className="text-white">Sidebar Content</h1>
                    {/* Sidebar Links */}
                    <ul>
                        <li className="py-2">
                            <a href="#" className="text-gray-300 hover:text-white">Link 1</a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-gray-300 hover:text-white">Link 2</a>
                        </li>
                        {/* Add more sidebar links as needed */}
                    </ul>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 w-full">
                {/* Navbar */}
                <nav className="bg-gray-800 p-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                    >
                        Menu
                    </button>
                </nav>

                {/* Main Content */}
                <main className="p-4">
                    <h1>Main Content</h1>
                    {/* Your main content goes here */}
                </main>
            </div>
        </div>
    )
}
