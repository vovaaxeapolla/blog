import { motion } from "framer-motion";

export default function TilesTransition({ TilesNumber }) {
    return (
        <>
            {
                Array(TilesNumber * 2).fill(0).map((t: never, i: number,) =>
                    <motion.div
                        key={i}
                        style={{
                            position: 'fixed',
                            background: 'var(--additional-color)',
                            zIndex: 100,
                            pointerEvents: 'none',
                            width: '100%',
                            height: `calc(110% / ${TilesNumber})`,
                            top: `calc(100% / ${TilesNumber} * ${i % TilesNumber})`,
                        }}
                        animate={{ scaleY: 0 }}
                        initial={{ scaleY: i >= TilesNumber ? 1 : 0 }}
                        exit={{ scaleY: i >= TilesNumber ? 0 : 1 }}
                        transition={{ duration: .2, ease: 'linear', delay: .2 }}
                    />)
            }
        </>
    );
}