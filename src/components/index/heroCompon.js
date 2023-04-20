import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const HeroCompon = () => (
    <section className="relative flex items-center max-h-[32rem] justify-center w-full ">
        <div className="relative -mt-8 w-full -z-20">
            <StaticImage
                className="h-[38rem] lg:h-[48rem] w-full"
                quality={100}
                src="https://images.unsplash.com/photo-1644325349124-d1756b79dd42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
                loading="eager"
                alt="Strona Internetowa"
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
                    fill="#f1f1f1"
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
            {["L", "I", "N", "K", "E", "D", "I", "N"].map((letter, index) => (
                <p key={index}>{letter}</p>
            ))}
            <div className="h-8 w-[2px] my-4 bg-gray-600 rounded-3xl" />
            <Link to="/" rel="noopener noreferrer">
                <svg
                    className="h-4 w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            </Link>
        </div>
    </section>
);

export default HeroCompon;
