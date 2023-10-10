import { useEffect } from "react";

export default function useBodyHidden(bool: boolean = true) {
    useEffect(() => {
        if (bool)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'auto'
        return () => { document.body.style.overflow = 'auto' };
    }, [bool]);
}