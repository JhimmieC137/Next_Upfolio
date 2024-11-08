'use client'

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollUpButton () {
    const [toHide, setToHide] = useState<boolean>(true);


    useEffect(() => {
        const updateScrollUpButton = () => {
            if (
                document.documentElement.scrollTop > 250 ||
                document.body.scrollTop > 250
            ) {
                setToHide(false);
            } else if (
                document.documentElement.scrollTop < 119 ||
                document.body.scrollTop < 119
            ) {
                setToHide(true);
            }
        };

        window.addEventListener("scroll", updateScrollUpButton);

        return function cleanup() {
            window.removeEventListener("scroll", updateScrollUpButton);
        };

    });

    return (
        <div onClick={() => document.getElementById("header")?.scrollIntoView({behavior: 'smooth'})} className={`${toHide ? 'opacity-0' : 'opacity-100' } hidden lg:block lg:fixed ease-in-out duration-300 transition-all !z-[900] bottom-11 right-11 bg-pink-600 hover:bg-pink-500 p-3 rounded-full`}>
            <FaArrowUp className="text-zinc-300 w-8 h-auto p-1"/>
        </div>
    );
};