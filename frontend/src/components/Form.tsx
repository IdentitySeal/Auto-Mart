import React from 'react'
import Button from './Button'
import FileUploader from './FileUploader'
import Input from './Input'
import Modal from './Modal'
import Textarea from './TextArea'

interface IForm {
    show :boolean
    setShow:React.Dispatch<React.SetStateAction<boolean>>
    handleChange :(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | any) => void
    saveForm: () => void
}
const Form = ({show,setShow,handleChange,saveForm}:IForm) => {
  return (
<Modal showModal={show} setShowModal={setShow}>
                <div>
                    <div>
                        <Input name="brand" label={'Brand Name'} type={'text'} placeholder={'brand ..'} onChange={(e) => handleChange(e)} />
                        <Input name="color" label={'Car Color'} type={'text'} placeholder={'car color ..'} onChange={(e) => handleChange(e)} />
                        <Input name="cost" label={'Car Cost'} type={'number'} placeholder={'car cost ..'} onChange={(e) => handleChange(e)} />
                        <Input name="year" label={'Year Made'} type={'number'} placeholder={'year ..'} onChange={(e) => handleChange(e)} />
                        <Input name="model" label={'Car Model'} type={'text'} placeholder={'car model ..'} onChange={(e) => handleChange(e)} />
                        <Textarea name="description" label="Car Description" placeholder="car description" onChange={(e) => handleChange(e)} />
                        <FileUploader name="image" onChange={(e) => handleChange(e)} label="Upload Car Image" />
                    </div>
                    <Button onClick={saveForm} title="Save" />
                </div>
            </Modal>  )
}

export default Form