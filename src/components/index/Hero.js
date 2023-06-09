import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import LiveBackground from "../liveBackground";

const Hero = () => {
    return (
        <section className="relative flex items-center max-h-[32rem] justify-center w-full ">
            <LiveBackground />

            <div className="relative -mt-8 w-full -z-20">
                <StaticImage
                    className="h-[38rem] lg:h-[48rem] w-full"
                    quality={100}
                    src="../../assets/hero.webp"
                    loading="eager"
                    alt="Strona przyjazna seo"
                    placeholder="dominantColor"
                />
                <div className="absolute inset-0 w-full h-full bg-gray-900/70" />

                <svg
                    className="absolute -bottom-3 left-0 z-10"
                    width="2004"
                    height="154"
                    viewBox="0 0 2004 154"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="fill-body-bg-color"
                        d="M0 37.9955C0 37.9955 458.5 122.495 1002 37.9955C1545.5 -46.5045 2004 37.9955 2004 37.9955V153.996H0V37.9955Z"
                    />
                </svg>
            </div>

            <div className="absolute flex flex-col items-center justify-cente">
                <h1 className="text-2xl md:w-[60%] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-0 font-bold text-gray-100 text-center px-6">
                Projektowanie i tworzenie stron internetowych w HTML
                </h1>
                <p className="mt-4 text-white px-3 sm:w-3/4 md:w-1/2 text-center">
                    <strong>Tworzenie strony internetowej</strong> to wyjątkowy proces, który
                    łączy projektowanie i tworzenie witryn dla użytkowników
                    online. Przy użyciu HTML, kodujemy responsywne szablony,
                    które gwarantują optymalne wyświetlanie na różnych
                    urządzeniach
                </p>

                <Link
                    title="Projekty"
                    to="/projekty"
                    className="mt-4 lg:mt-6 border px-4 py-1 text-sm rounded-lg text-white bg-gradient-to-b from-red-600 to-red-800 md:hover:opacity-90 md:transition md:hover:scale-[.98]"
                >
                    Projekty
                </Link>
            </div>

            <Link
                aria-label="Facebook"
                title="Facebook"
                to="https://www.facebook.com/seovileo/"
                className="text-gray-300 hidden lg:flex text-sm absolute left-2 flex-col items-center justify-center uppercase -my-3"
            >
                {["K", "O", "O", "B", "E", "C", "A", "F"].map(
                    (letter, index) => (
                        <p className="-rotate-90" key={index}>
                            {letter}
                        </p>
                    )
                )}
                <div className="h-8 w-[2px] my-4 bg-gray-600 rounded-3xl" />
                <div
                    aria-label="facebook"
                    to="https://www.facebook.com/seovileo/"
                    class="text-gray-500"
                >
                    <svg
                        aria-label="facebook"
                        fill="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </div>
            </Link>
        </section>
    );
};

export default Hero;
