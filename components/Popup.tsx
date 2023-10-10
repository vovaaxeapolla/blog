import { createPortal } from 'react-dom';
import styles from '../styles/Popup.module.sass';
import { motion } from 'framer-motion';
import useBodyHidden from '../hooks/useBodyHidden';

export default function Popup({ children, close }) {

    useBodyHidden();

    return (
        <>
            {
                createPortal(
                    <motion.div
                        key="modal"
                        transition={{ duration: .2 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.popup}
                        onClick={() => close()}
                    >
                        <div className={styles.content} onClick={e => e.stopPropagation()}>
                            {children}
                        </div>
                    </motion.div >
                    , document.querySelector('#popups')!)
            }
        </>
    )
}