import React, { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
interface IModal {
    children: JSX.Element
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}
const Modal = (props:IModal) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.59)] flex flex-col justify-center items-center transform transition-all duration-300 z-50 ${props.showModal ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
        >
            <div className="md:w-4/12 w-[90%] bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-end items-center text-sm">
            <button onClick={() => props.setShowModal(!props.showModal)}>
              <AiOutlineClose />
            </button>
          </div>
         {props.children}
        </div>
        </div>
    )
}

export default Modal