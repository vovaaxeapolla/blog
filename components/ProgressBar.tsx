import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ProgressBar.module.sass';

export default function ProgressBar() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;

        function start() {
            setProgress(1);
            increment();

            console.log('start')

        }

        function increment() {
            const timeout = Math.round(Math.random() * 300);

            console.log('increment ' + timer)

            setProgress((progress) => {

                if (progress === 100)
                    return 100;

                const percent = Math.round(Math.random() * 10);
                const next = Math.min(progress + percent, 80);

                if (next < 80) {
                    timer = setTimeout(increment, timeout);
                    console.log("timer " + timer)
                    return next;
                }

                return 80;
            });
        }

        function complete() {
            console.log('complete ' + timer)
            clearTimeout(timer);
            setProgress(100);
        }

        router.events.on('routeChangeStart', start);
        router.events.on('routeChangeComplete', complete);
        router.events.on('routeChangeError', complete);

        return () => {
            clearTimeout(timer);
            router.events.off('routeChangeStart', start);
            router.events.off('routeChangeComplete', complete);
            router.events.off('routeChangeError', complete);
        };
    }, []);

    return (
        <div className={styles.progress}>
            <div
                className={styles.indicator}
                style={{
                    width: `${progress}%`,
                    opacity: progress > 0 && progress < 100 ? 1 : 0,
                }}
            />
        </div>
    );
}