import React, { useState } from 'react'
import Button from './Button'
import Input from './Input';
import Modal from './Modal'
import Textarea from './TextArea';

const Header = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className="flex flex-row items-center justify-between my-6 mx-6">
            <h1 className="">AUTO MART</h1>
            <Button title='CREATE ADVERT' onClick={() => { setShow(true)}} />
            <Modal showModal={show} setShowModal={setShow}>
                <div>
                    <div>
                    <Input label={'Brand Name'} type={'text'} placeholder={'brand ..'}/>
                    <Input label={'Brand Name'} type={'text'} placeholder={'brand ..'}/>
                    <Input label={'Brand Name'} type={'text'} placeholder={'brand ..'}/>
                    <Input label={'Brand Name'} type={'text'} placeholder={'brand ..'}/>
                    <Input label={'Brand Name'} type={'text'} placeholder={'brand ..'}/>
                    <Textarea label="Description" placeholder="This is an entirely new section"/>
                    </div>
                    
                <Button onClick={()=> {}} title="Save"/>
                </div>
            </Modal>
        </div>
    )
}

export default Header