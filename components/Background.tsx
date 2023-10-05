'use client'
import { useRef, useEffect } from "react";
import CanvasBackgroundAnimation from "./CanvasBackgroundAnimation";

export default function Background() {

    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let animation: CanvasBackgroundAnimation;
        if (canvas.current) {
            animation = new CanvasBackgroundAnimation(canvas.current);
            animation.start();
        }

        return () => {
            if (animation) animation.stop();
        }
    }, []);


    return <canvas ref={canvas} />
}