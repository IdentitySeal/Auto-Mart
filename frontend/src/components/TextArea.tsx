import React, { ChangeEvent } from "react";

interface ITextarea {
    label?: string;
    placeholder?: string;
    value?: string;
    name?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = (props: ITextarea) => {
    return (
        <div className ="my-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                {props.label}
            </span>
            <textarea
                id={props.label}
                name={props.name}
                className="min-h-[50px] resize-y rounded-md appearance-none relative block w-full px-[14px] py-[10px] border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            ></textarea>
        </div>
    );
};

export default Textarea;
