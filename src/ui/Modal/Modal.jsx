import styles from './Modal.module.scss';
import ReactDOM from 'react-dom';

const Modal = ({ children, className = '', ...props }) => {
    // const student = {
    //     name: 'naveed',
    //     rollNo: 215,
    //     faculty: 'BS',
    //     department: 'CS',
    //     semester: '8th'
    // }

    // const { name, rollNo, ...studentModal } = student;
    
    // const student2 = {...studentModal, name: 'Ubaid Badar', rollNo: 227};

    return ReactDOM.createPortal((
        <div
            className={`blur d-flex ${className} ai-center jc-center ${styles.root}`}
            {...props}
        >
            <div className='bg-light p-5'>
                {children}
            </div>
        </div>
    ), document.getElementById('modals'))
}

export default Modal;