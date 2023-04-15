import * as React from "react";
import { Link } from "gatsby";
import { useState, useEffect } from "react";

const ScrollUpIcon = () => {
    const [ScrollUpIcon, setScrollUp] = useState(false);

    const scrollUp = () => {
        if (window.scrollY >= 1200) {
            setScrollUp(true);
        } else {
            setScrollUp(false);
        }
    };

    useEffect(() => {
        scrollUp();
        window.addEventListener("scroll", scrollUp);
    });

    return (
        <Link
            aria-label="scroll to home"
            className={
                !ScrollUpIcon
                    ? "fixed right-4 bottom-20 transition-transform duration-1000 z-50 translate-x-[200%]"
                    : "fixed right-4 hover:scale-110 bottom-20 translate-x-0 transition-transform duration-500 z-50 "
            }
            to="#"
        >
            <div className="p-3 bg-gradient-to-tr from-gray-700 to-gray-800 rounded-xl">
                <svg
                    className="h-auto w-5 md:w-7"
                    viewBox="0 0 532 488"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        width="92.4168"
                        height="402.57"
                        rx="46.2084"
                        transform="matrix(0.690692 -0.723149 -0.690692 -0.723149 484.357 339.949)"
                        fill="white"
                    />
                    <rect
                        width="92.4168"
                        height="402.57"
                        rx="46.2084"
                        transform="matrix(-0.690692 -0.723149 0.690692 -0.723149 51.415 339.949)"
                        fill="white"
                    />
                    <rect
                        width="83.1143"
                        height="335.968"
                        rx="41.5572"
                        transform="matrix(-0.690692 -0.723149 0.690692 -0.723149 86.0598 502.786)"
                        fill="white"
                    />
                    <rect
                        width="83.1143"
                        height="335.968"
                        rx="41.5572"
                        transform="matrix(0.690692 -0.723149 -0.690692 -0.723149 439.571 502.059)"
                        fill="white"
                    />
                </svg>
            </div>
        </Link>
    );
};

export default ScrollUpIcon;
