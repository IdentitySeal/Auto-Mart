import React from 'react'

interface InputType {
    label: string
    type:  | 'button' | 'checkbox'| 'date' | 'email' | 'file' | 'number' | 'password' | 'submit' | 'text' | 'time'
    placeholder: string
}
const Input = (props:InputType) => {
    return (
        <div>
            <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    {props.label}
                </span>
                <input type={props.type ?? 'text'} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={props.placeholder} />
            </label>
        </div>
    )
}

export default Input