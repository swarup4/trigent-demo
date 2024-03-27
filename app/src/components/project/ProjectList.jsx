import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cart/cartSlice'

const projects = [
    {
        id: 1,
        name: 'Basic Tee',
        href: 'project/details',
        category: 'Black',
        subCategory: 'Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        
    }, {
        id: 2,
        name: 'Throwback Hip Bag',
        href: 'project/details',
        category: 'Salmon',
        subCategory: 'Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    }, {
        id: 3,
        name: 'Medium Stuff Satchel',
        href: 'project/details',
        category: 'Blue',
        subCategory: 'Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    }, {
        id: 4,
        name: 'Throwback Hip Bag',
        href: 'project/details',
        category: 'Salmon',
        subCategory: 'Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    }
]

export default function ProductList() {

    const dispatch = useDispatch()

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {projects.map((project, ind) => (
                        <div key={ind}>
                            <div className="group relative border border-gray-200 rounded-md shadow">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src={project.imageSrc} alt={project.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-sm text-gray-700">
                                            <Link to={project.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {project.name}
                                            </Link>
                                        </h3>
                                        {/* <p className="text-sm font-medium text-gray-900">${project.price}</p> */}
                                    </div>
                                    <p className="mt-1 text-xs text-gray-500">{project.category} | {project.subCategory}</p>
                                    <p className="mt-1 text-sm text-gray-500 truncate">{project.imageAlt}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {/* <div className='col-span-6'> */}
                                    <button onClick={() => dispatch(addItem(project))}
                                        className="flex float-left justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        View Demo
                                    </button>
                                {/* </div>
                                <div className='col-span-6'> */}
                                    <button onClick={() => dispatch(addItem(project))}
                                        className="flex float-left justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Add to cart
                                    </button>
                                {/* </div> */}
                                
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
