import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import LiveBackground from "../liveBackground";

const HeroCompon = () => {
    return (
        <section className="relative flex items-center max-h-[32rem] justify-center w-full ">
            <LiveBackground />

            <div className="relative -mt-8 w-full -z-20">
                <StaticImage
                    className="h-[38rem] lg:h-[48rem] w-full"
                    quality={100}
                    src="../../assets/hero.png"
                    loading="eager"
                    alt="Błyskawiczna Strona"
                    placeholder="blurred"
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
                        d="M0 37.9955C0 37.9955 458.5 122.495 1002 37.9955C1545.5 -46.5045 2004 37.9955 2004 37.9955V153.996H0V37.9955Z"
                        fill="#f8f8f8"
                    />
                </svg>
            </div>

            <div className="absolute flex flex-col items-center justify-cente">
                <h1 className="text-2xl md:w-[70%] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:py-0 font-bold text-gray-100 text-center px-6">
                    Stwórz swoją idealną stronę internetową z niezależnym
                    freelancerem
                </h1>

                <Link to="/projekty" className="btnRed mt-4 lg:mt-6 border">
                    Projekty
                </Link>
            </div>

            <div className="text-gray-300 hidden lg:flex text-sm absolute left-2 flex-col items-center justify-center uppercase -my-3">
                {["K", "O", "O", "B", "E", "C", "A", "F"].map(
                    (letter, index) => (
                        <p className="-rotate-90" key={index}>
                            {letter}
                        </p>
                    )
                )}
                <div className="h-8 w-[2px] my-4 bg-gray-600 rounded-3xl" />
                <Link
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
                </Link>
            </div>
        </section>
    );
};

export default HeroCompon;
