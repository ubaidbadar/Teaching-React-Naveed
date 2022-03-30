import { useState } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';



const Modal = ({ handler, ...props }) => {
    const [isModal, setIsModal] = useState(false);
    const showModal = () => setIsModal(true);
    const hideModal = () => setIsModal(false);
    return (
        <>
            {handler(showModal, hideModal)}
            {isModal && <ModalWrapper hideModal={hideModal} {...props} />}
        </>
    );
}

export default Modal;