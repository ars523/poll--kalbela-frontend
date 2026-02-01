"use client";
import { useEffect, useState, useRef } from "react";
import toBengaliDigits from "@/assets/lib/toBanglaDigits";

interface AnimatedBanglaCounterProps {
    targetNumber: number;
}

export default function AnimatedBanglaCounter({ targetNumber }: AnimatedBanglaCounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false); // একবারই animation চালানোর জন্য ফ্ল্যাগ
    const counterRef = useRef<HTMLDivElement>(null);
    const animationFrameId = useRef<number | null>(null);

    const duration = 2000; // এনিমেশন 2 সেকেন্ড চলবে

    // Ease-out function (first fast, then slow)
    const easeOutQuad = (t: number) => t * (2 - t);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true); // স্ক্রিনে এলে একবারই এনিমেশন চালাবে
                }
            },
            { threshold: 0.5 } // 50% দেখা গেলে এনিমেশন শুরু হবে
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        setCount(0); // প্রতি নতুন এনিমেশনের শুরুতে 0 থেকে শুরু করবো

        let startTime: number | null = null;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                const easedProgress = easeOutQuad(progress);
                setCount(Math.floor(easedProgress * targetNumber));
                animationFrameId.current = requestAnimationFrame(animate);
            } else {
                setCount(targetNumber);
                if (animationFrameId.current) {
                    cancelAnimationFrame(animationFrameId.current);
                }
            }
        };

        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [hasAnimated, targetNumber]);

    return (
        <div ref={counterRef}>
            <div>{toBengaliDigits(count)}</div>
        </div>
    );
}
