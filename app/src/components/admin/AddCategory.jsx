import React, { Fragment, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { object, string, ref } from 'yup'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import axios from 'axios'


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
    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    const handleChange = (event, addFunc) => {
        addFunc(event.target.value);
    };

    useEffect(() => {
        axios.get('http://localhost:3001/category/getCategory')
            .then(res => {
                let data = res.data;
                setCategoryList(data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/category/getSubCategory')
            .then(res => {
                let data = res.data;
                setSubCategoryList(data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    function addCategoryData(data) {
        debugger;
        let body = { name: data }
        console.log(body);
        // axios.post('http://localhost:3001/category/addCategory', body).then(res => {
        //     setCategoryList([...categoryList, res.data])
        // }).catch(err => {
        //     console.log(err);
        // });
    }

    return (
        <>
            <main className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-7">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Category</h1>
                </div>

                <div className="flex min-h-full flex-1 flex-col justify-center pt-0 py-12">
                    <div className="grid grid-cols-4 gap-6">
                        <div>
                            <div className="space-y-8 mx-auto max-w-2xl">
                                <div className="border-b border-gray-900/10 pb-6">

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                                Category
                                            </label>
                                            <div className="mt-2">
                                                <input type="text" name="name" id="name" placeholder="Category name" value={category} onChange={(ev) => handleChange(ev, setCategory)}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <div className="mt-3 flex items-center justify-end gap-x-6">
                                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                                    Cancel
                                                </button>
                                                <button type="button" onClick={() => addCategoryData(category)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                    Add
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full m-none h-96 overflow-auto text-gray-500">
                                    {/* {categoryList.map((cate) => (
                                        <div key={cate._id}>
                                            {cate.name}
                                        </div>
                                    ))} */}

                                    <ul role="list" className="pt-6 pb-6 divide-y divide-slate-200">
                                        {categoryList.map((cate) => (
                                        <li className="flex py-4 first:pt-0 last:pb-0" key={cate._id}>
                                            <div className="ml-3 w-full">
                                                <p className="text-sm font-medium w-full float-left text-gray-500">
                                                    <span className='float-start'>{cate.name}</span>
                                                    <a className="text-sm float-end"><XMarkIcon className="h-4 w-4"/> </a>
                                                </p>
                                            </div>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="space-y-8 mx-auto max-w-2xl">
                                <div className="border-b border-gray-900/10 pb-6">

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                                Sub Category
                                            </label>
                                            <div className="mt-2">
                                                <input type="text" name="name" id="name" placeholder="Sub Category name" value={subCategory} onChange={(ev) => handleChange(ev, setSubCategory)}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <div className="mt-3 flex items-center justify-end gap-x-6">
                                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                                    Cancel
                                                </button>
                                                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full m-none h-96 overflow-auto text-gray-500">
                                    <ul role="list" className="pt-6 pb-6 divide-y divide-slate-200">
                                        {subCategoryList.map((cate) => (
                                        <li className="flex py-4 first:pt-0 last:pb-0" key={cate._id}>
                                            <div className="ml-3 w-full">
                                                <p className="text-sm font-medium w-full float-left text-gray-500">
                                                    <span className='float-start'>{cate.name}</span>
                                                    <a className="text-sm float-end"><XMarkIcon className="h-4 w-4"/> </a>
                                                </p>
                                            </div>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* <div className=''>
                                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                        {cate.name}
                                    </label>
                                </div> */}
                            <ul role="list" className="p-6 divide-y divide-slate-200">
                                {categoryList.map((cate) => (
                                    <li className="flex py-4 first:pt-0 last:pb-0 hover:bg-sky-700" key={cate._id}>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-500">{cate.name}</p>
                                            {/* <p className="text-sm text-slate-500 truncate">{person.email}</p> */}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div>
                            {/* {subCategory.map((cate) => (
                                <div>
                                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                        {cate.name}
                                    </label>
                                </div>
                            ))} */}
                            <ul role="list" className="p-6 divide-y divide-slate-200">
                                {subCategoryList.map((cate) => (
                                    <li className="flex py-4 first:pt-0 last:pb-0 hover:bg-sky-700" key={cate._id}>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-500">{cate.name}</p>
                                            {/* <p className="text-sm text-slate-500 truncate">{person.email}</p> */}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
