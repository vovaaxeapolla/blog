import { useEffect } from "react";

export default function useVhFix() {
    useEffect(() => {
        const setVH = () => document.documentElement.setAttribute('style', `--vh: ${innerHeight / 100}px;`);
        document.addEventListener('resize', setVH);
        return () => document.removeEventListener('resize', setVH)
    }, [])
}