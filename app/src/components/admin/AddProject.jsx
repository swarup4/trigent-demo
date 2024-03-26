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

export default function AddProject() {
    
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            // signup(values);
        }
    });

    return (
        <>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Add Project</h1>
                </div>
            </main>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-0 py-12 lg:px-8">
                <form>
                    <div className="space-y-8 mx-auto max-w-2xl">
                        <div className="border-b border-gray-900/10 pb-12">
                            {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p> */}

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                        Project Name
                                    </label>
                                    <div className="mt-2">
                                        <input type="text" name="name" id="name" placeholder="Project name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea id="about" name="about" rows={3} defaultValue={''}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the Project.</p>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Photo
                                    </label>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <button type="button"
                                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >Change</button>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Cover photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Project Information</h2>
                            {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Category
                                    </label>
                                    <div className="mt-2">
                                        <select id="category" name="category" value={values.role} onChange={handleChange} onBlur={handleBlur}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            <option value=''>Select Category</option>
                                            <option value='admin'>Admin</option>
                                            <option value='user'>User</option>
                                            <option value='client'>Client</option>
                                        </select>
                                        {(errors.role && touched.role) ? (
                                            <p className='mt-1 text-red-500'>{errors.role}</p>
                                        ) : ''}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sub Category
                                    </label>
                                    <div className="mt-2">
                                        <select id="sub-category" name="sub-category" value={values.role} onChange={handleChange} onBlur={handleBlur}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            <option value=''>Select Sub Category</option>
                                            <option value='admin'>Admin</option>
                                            <option value='user'>User</option>
                                            <option value='client'>Client</option>
                                        </select>
                                        {(errors.role && touched.role) ? (
                                            <p className='mt-1 text-red-500'>{errors.role}</p>
                                        ) : ''}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Tech Stack
                                    </label>
                                    <div className="mt-2">
                                        <input id="email" name="email" type="email" placeholder="Email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <div className="mt-2">
                                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-1">
                                            React JS<button className="ml-1"><XMarkIcon className="h-3.5 w-3.5"/></button>
                                        </span>
                                        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 m-1">
                                            Node JS<button className="ml-1"><XMarkIcon className="h-3.5 w-3.5"/></button>
                                        </span>
                                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 m-1">
                                            Mongo DB<button className="ml-1"><XMarkIcon className="h-3.5 w-3.5"/></button>
                                        </span>
                                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 m-1">
                                            AWS<button className="ml-1"><XMarkIcon className="h-3.5 w-3.5"/></button>
                                        </span>
                                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 m-1">
                                            Socket.IO<button className="ml-1"><XMarkIcon className="h-3.5 w-3.5"/></button>
                                        </span>
                                        <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 m-1">
                                            Docker<button className="ml-1"><XMarkIcon className="h-3.5 w-3.5"/></button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>

        </>

    )
}
