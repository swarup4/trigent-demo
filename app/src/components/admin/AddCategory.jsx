import React, { Fragment, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { object, string, ref } from 'yup'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import axios from 'axios'

import OptionLIst from './OptionLIst'

export default function AddCategory() {
    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState('');
    const [categoryById, setCategoryById] = useState([]);
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [subCategory, setSubCategory] = useState('');
    const [activeItem, setActiveItem] = useState(null);
    const [selectCategory, setSelectCategory] = useState('');

    const handleChange = (event, addFunc) => {
        addFunc(event.target.value);
    };

    useEffect(() => {
        getCategoryData();
    }, []);

    useEffect(() => {
        getSubCategoryData();
    }, []);

    function getCategoryData() {
        axios.get('http://localhost:3001/category/getCategory')
            .then(res => {
                let data = res.data;
                setCategoryList(data);
            }).catch(err => {
                console.log(err);
            })
    }
    function getCategoryById(id, index) {
        setActiveItem(index);
        setSelectCategory(id);

        axios.get(`http://localhost:3001/category/getCategoryById/${id}`)
            .then(res => {
                let data = res.data.options;
                let subCat = subCategoryList.map(x => {
                    x.select = false;
                    data.map(y => {
                        if (x._id == y) {
                            x.select = true;
                        }
                    });
                    return x;
                });
                setCategoryById(subCat);
            }).catch(err => {
                console.log(err);
            })
    }

    function getSubCategoryData() {
        axios.get('http://localhost:3001/category/getSubCategory')
            .then(res => {
                let data = res.data;
                setSubCategoryList(data);
            }).catch(err => {
                console.log(err);
            })
    }

    function addCategoryData(data) {
        let body = { name: data }
        axios.post('http://localhost:3001/category/addCategory', body).then(res => {
            setCategoryList([...categoryList, res.data]);
            setCategory('');
        }).catch(err => {
            console.log(err);
        });
    }

    function addSubCategoryData(data) {
        let body = { name: data }
        axios.post('http://localhost:3001/category/addSubCategory', body).then(res => {
            setSubCategoryList([...subCategoryList, res.data])
            setSubCategory('');
        }).catch(err => {
            console.log(err);
        });
    }

    function deleteCategoryData(id) {
        axios.delete(`http://localhost:3001/category/deleteCategory/${id}`).then(res => {
            getCategoryData();
        }).catch(err => {
            console.log(err);
        });
    }
    function deleteSubCategoryData(id) {
        axios.delete(`http://localhost:3001/category/deleteSubCategory/${id}`).then(res => {
            getSubCategoryData();
        }).catch(err => {
            console.log(err);
        });
    }

    function handleCheckboxChange(id, status) {
        setCategoryById(() => {
            return categoryById.map(x => {
                if (x._id == id) {
                    x.select = !status
                }
                return x
            })
        })
    };

    // mapSubCategory/:id
    function updateCategoryMapping(){
        let subCatList = categoryById.filter(x => x.select == true).map(x => x._id);
        let body = { options: subCatList }
        axios.put(`http://localhost:3001/category/mapSubCategory/${selectCategory}`, body).then(res => {
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        });
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

                                <OptionLIst list={categoryList} deleteFunct={deleteCategoryData} />
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
                                                <button type="button" onClick={() => addSubCategoryData(subCategory)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <OptionLIst list={subCategoryList} deleteFunct={deleteSubCategoryData} />
                            </div>
                        </div>

                        <div>
                            <div className='h-12'></div>
                            <ul role="list" className="py-6 divide-y divide-slate-200">
                                {categoryList.map((cate, index) => (
                                    <li className={`flex py-2 first:pt-2 last:pb-2 text-gray-500 hover:bg-sky-700 hover:text-white cursor-pointer ${index === activeItem ? 'active' : ''}`} key={index} onClick={(ev) => getCategoryById(cate._id, index)}>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium">{cate.name}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div>
                            <div className='h-12'>
                                <button onClick={() => updateCategoryMapping()} className="rounded-md mt-2 float-right bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
                            </div>
                            <ul role="list" className="py-6 divide-y divide-slate-200">
                                {categoryById.map((subcate, ind) => (
                                    <li className="flex py-2 first:pt-2 last:pb-2 text-gray-500 hover:bg-sky-700 hover:text-white cursor-pointer" key={ind}>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium">
                                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-2" id={`checkbox-${subcate._id}`}
                                                    checked={subcate.select} onChange={() => handleCheckboxChange(subcate._id, subcate.select)} />
                                                {subcate.name}
                                            </p>
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
