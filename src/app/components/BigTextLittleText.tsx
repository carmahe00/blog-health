"use client";
import React, { useEffect, useRef } from 'react'
import { Parallax } from 'react-scroll-parallax'
import gsap from 'gsap';
import BigText from './BigText'

const BigTextLittleText = () => {
    const fadeRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            fadeRef.current,
            { opacity: 0 }, // Initial state: fully transparent
            { opacity: 1, duration: 2 } // Final state: fully opaque over 2 seconds
        );
    }, []);
    return (
        <div className="w-full relative">
            <div id="big-text-trigger" />
            <Parallax
                className="leading-none absolute left-0 right-0 pb-32 hidden sm:block"
                translateY={[50, -10]}
            >
                <div className="background-big-text relative text-center font-bold mx-auto my-0 opacity-5">
                    touch
                </div>
            </Parallax>
            <BigText bigText="block " />
            <div ref={fadeRef}>
                <div className="foreground-little-text relative left-0 right-0 text-2xl sm:text-4xl text-center font-bold mx-auto my-0 p-2 top-0">
                    If you have a sedentary job or spend long hours sitting, make a conscious effort to stand up, stretch, or take a short walk every 30 minutes to an hour. Even small movements can help improve circulation and reduce stiffness.
                    Look for opportunities to move throughout the day. This could include taking the stairs instead of the elevator, walking or cycling instead of driving for short distances, or doing household chores like cleaning or gardening.
                    If possible, use a standing desk or a stability ball chair to engage your muscles while working. You can also try walking meetings or phone calls.

                    <div id="line-trigger" />
                </div>
            </div>
        </div>
    )
}

export default BigTextLittleText