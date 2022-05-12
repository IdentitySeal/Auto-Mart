import React, { ChangeEvent } from 'react'
interface FileUploadType {
    label?: string
    name?:string 
    onChange?: (e:ChangeEvent<HTMLInputElement>) => void
}
const FileUploader = (props:FileUploadType) => {
    return (
        <div className ="my-3">
            <label className="block">
                <span className="sr-only">{props.label}</span>
                <input  name={props.name} onChange={props.onChange} type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black-50 file:text-black-700 hover:file:bg-slate-100" accept="image/png, image/jpeg"  />
            </label>
        </div>)
}

export default FileUploader