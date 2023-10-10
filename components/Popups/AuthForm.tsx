import Popup from "../Popup";
import styles from '../../styles/AuthForm.module.sass';
import { useState } from "react";
import Changer from "../Changer";
import Login from "./Login";
import SignUp from "./SignUp";
import { AnimatePresence, motion } from "framer-motion";

export default function AuthForm({ close }) {

    const [page, setPage] = useState<'Login' | 'Signup'>('Login');

    return (
        <Popup close={close} key='signin'>
            <div className={styles.auth}>
                <Changer states={['Login', 'Signup']} currentState={page} setState={setPage} />
                <AnimatePresence
                    initial={true}
                    mode='wait'>
                    <motion.div
                        key={page}
                        transition={{ duration: .2 }}
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles['auth__container']}
                    >
                        {
                            page === 'Login'
                                ?
                                <Login />
                                :
                                <SignUp />
                        }
                    </motion.div>
                </AnimatePresence>
            </div>
        </Popup >
    )
}