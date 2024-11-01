'use client'

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimate, useAnimation } from "framer-motion";

interface FadeProps {
    children: JSX.Element
}

export default function FadeIn ({ children }: FadeProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) mainControls.start("visible");
    }, [isInView])

    return (
        <div ref={ref} className='w-full'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {children}
            </motion.div>
        </div>
    )
}