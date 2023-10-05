'use client'

import { useState, useEffect } from "react"

const Typing = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [isForward, setIsForwadrd] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [lineNumber, setLineNumber] = useState(0);

    useEffect(() => {
        if (!isPaused)
            if (isForward)
                if (currentIndex < text[lineNumber].length) {
                    const timeout = setTimeout(() => {
                        setCurrentText(prevText => prevText + text[lineNumber][currentIndex]);
                        setCurrentIndex(prevIndex => prevIndex + 1);
                    }, delay);
                    return () => clearTimeout(timeout);
                } else {
                    setIsPaused(true);
                    setIsForwadrd(false);
                    setLineNumber(prev => (prev + 1) % text.length)
                    setTimeout(() => setIsPaused(false), 2000);
                }
            else
                if (currentIndex > 0) {
                    const timeout = setTimeout(() => {
                        setCurrentText(prevText => prevText.slice(0, -1));
                        setCurrentIndex(prevIndex => prevIndex - 1);
                    }, delay);
                    return () => clearTimeout(timeout);
                } else {
                    setIsPaused(true);
                    setIsForwadrd(true);
                    setTimeout(() => setIsPaused(false), 100);
                }
    }, [currentIndex, isForward, isPaused, lineNumber, delay, text]);

    return <>{currentText}</>;
};

export default Typing;