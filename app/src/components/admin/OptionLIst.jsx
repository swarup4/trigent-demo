import React from 'react'
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function OptionLIst(props) {
    return (
        <div className="col-span-full m-none h-96 overflow-auto text-gray-500">
            <ul role="list" className="pt-6 pb-6 divide-y divide-slate-200">
                {props.list.map((cate, ind) => (
                    <li key={ind} className="flex py-4 first:pt-0 last:pb-0">
                        <div className="ml-3 w-full">
                            <p className="text-sm font-medium w-full float-left text-gray-500">
                                <span className='float-start'>{cate.name}</span>
                                <a className="text-sm float-end cursor-pointer" onClick={() => props.deleteFunct(cate._id)}><XMarkIcon className="h-4 w-4" /> </a>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
