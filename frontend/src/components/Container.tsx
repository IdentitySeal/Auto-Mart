import React, { useState } from 'react'
import CustomApiService, { ICarAdvert } from '../services/customApiService';
import AdvertItems from './AdvertItems';
import Button from './Button'
import Form from './Form';
import Modal from './Modal';

const Container = () => {
    const [show, setShow] = useState<boolean>(false);
    const [state, setState] = useState<ICarAdvert>({
        brand: '',
        description: '',
        cost: 0,
        year: 0,
        model: '',
        color: '',
        image: ''
    });
    const [dialog,setDialog] = useState(false);
    const [trackError,setTrackError] = useState(false);




    const fileToDataUri = (file: any) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
            resolve(event.target.result)
        };
        reader.readAsDataURL(file);
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | any) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            fileToDataUri(files[0])
                .then(dataUri => {
                    setState((prev) => ({ ...prev, [name]: dataUri }))
                })
        }
        setState({ ...state, [name]: value })
    }
    const saveForm = () => {
        CustomApiService.postCarAdvert(state)
        .then((response) => response?.data )
        .then(data => {
            if(data) { 
                console.log(data)
            setDialog(true)
            setTrackError(true)}
            window.location.reload();
        })
        .catch((error) => {
            if(error){
                setDialog(true)
                setTrackError(false)
            }
        })

    }

    return (
        <div>
            <div className="flex flex-row items-center justify-between my-6 mx-6">
                <h1 className="font-bold">AUTO MART</h1>
                <Button title='CREATE ADVERT' onClick={() => { setShow(true) }} />
                <Form show={show} setShow={setShow} handleChange={handleChange} saveForm={saveForm} />
            </div>
            <AdvertItems/>
            <Modal showModal={dialog} setShowModal={setDialog}>
                <div>
                    {trackError ? <div className="rounded bg-green-500">
                        <h1>Saved Sucessfully</h1>
                    </div>
                    :
                    <div className="ounded bg-red-500">
                        <h1>An Error Occured</h1>
                        <span>Please Input The Correct Values</span>
                    </div>}
                </div>
            </Modal>
        </div>
    )
}

export default Container;