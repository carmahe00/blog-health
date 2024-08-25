"use client";
import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useInView } from "react-intersection-observer";


interface props {
    bigText: string
}
const BigText: React.FC<props> = props => {
    const boxRef = useRef(null);
    const { ref, inView } = useInView({
        threshold: 0.1, // Adjust the threshold as needed
        triggerOnce: true, // Trigger the animation only once
    });
    useEffect(() => {
        // GSAP animation
        gsap.to(boxRef.current, { duration: 2000, x: 0, rotation: 360 });
      }, []);
    
    return (
        <div style={{
            
            position: "absolute",
            top: "50%",
            left: "20%",
            fontWeight: "bold",
            color: "#969696",
            margin: "0"
        }} className="-z-40" ref={ref}  >

            <div ref={boxRef}

            >
                <div
                    className={`text-9xl opacity-10 capitalize ${props.bigText}`}
                >
                    keep going
                </div>
            </div>


        </div>
    )
};

export default BigText;
