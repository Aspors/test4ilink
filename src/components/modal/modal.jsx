import './modal.scss';
import '../generic/buttons/buttons';
import Form from '../form/form';
import { useState } from 'react';


const Modal = () => {

    // TODO про бульку я ужек писал 
    const  [hide, setHide] = useState('modal hide');
    const modalClose = () => {
        setHide('modal hide');
    }


    return(
        <div className={hide}>
            <div className="modal__dialog">
                <div className="modal__content">
                    <Form modalClose = {modalClose}></Form>
                </div>
            </div>
        </div>
    )
}

export default Modal;