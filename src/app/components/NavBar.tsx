"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const NavBar = () => {
    const [prevScrollpos, setPrevScrollpos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const isVisible = prevScrollpos > currentScrollPos;

        setPrevScrollpos(currentScrollPos);
        setVisible(isVisible);
    };

    useEffect(() => {
        // Initialize prevScrollpos on client side
        setPrevScrollpos(window.scrollY);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollpos]);

    return (
        <div className={`nav-bar ${!visible ? "nav-bar--hidden" : ""}`}>
            <div className="nav-bar__logo justify-center flex">
                <Link href="/">
                    
                        <Image src="/logo.svg" alt="Logo" width={100} height={50} />
                    
                </Link>
            </div>
            <ul>
                <li>Juan Pablo {"  "}- {"   "} Camilo</li>
                
            </ul>
        </div>
    );
};

export default NavBar;
