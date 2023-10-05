import { motion } from "framer-motion";
import { CSSProperties, FC } from "react";

interface IFadeInWhenVisibleProps {
    children: React.ReactNode
    style?: CSSProperties
    className?: string
    delay?: number
}

const FadeInWhenVisible: FC<IFadeInWhenVisibleProps> = ({ children, style, className, delay = 0 }) => {
    return (
        <motion.div
            style={style}
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: delay }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: '20%' }
            }}
        >
            {children}
        </motion.div>
    );
}

export default FadeInWhenVisible