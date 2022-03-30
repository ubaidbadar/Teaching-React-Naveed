import { useEffect } from 'react';
import Portal from '../../hoc/Portal';
import styles from './ModalWrapper.module.scss';

const ModalWrapper = ({ children, className = '', hideModal, ...props }) => {
    useEffect(() => {
        const overflow = document.body.style.overflow;
        if(overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            }
        }
    }, [])
    return (
        <Portal id='modals'>
            <div
                className={`d-flex blur ${className} ${styles.root}`}
                {...props}
            >
                <div onClick={hideModal} className={styles.blur} />
                <div className='bg-light p-5 z-index-1 p-relative m-auto'>
                    {children}
                </div>
            </div>
        </Portal>
    )
}

export default ModalWrapper;