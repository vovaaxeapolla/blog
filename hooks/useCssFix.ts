import Router from "next/router"
import { useEffect } from "react"

export default function useCssFix(delay: number) {
    useEffect(() => {

        const styles = document.head.querySelectorAll('[data-n-href]:not([media=x])');
        [...styles].forEach(s => s.removeAttribute('media'));
        function mutationHandler() {

        }

        const observer = new MutationObserver(mutationHandler);
        observer.observe(document.head, { childList: true, subtree: true });


        return () => {
            observer.disconnect()
            // setTimeout(() => , delay)
        };
    }, [])
}