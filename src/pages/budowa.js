import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import LiveBackground from "../components/liveBackground";

const Budowa = () => (
    <Layout>
        <section className="relative flex items-center justify-center w-full ">
            <LiveBackground />
            <div className="relative w-full -z-20">
                <StaticImage
                    className="h-40 lg:h-52 xl:h-56 w-full md:w-full"
                    quality={100}
                    src="../assets/hero.jpg"
                    loading="eager"
                    placeholder="blurred"
                    alt="Seovileo Strony internetowe"
                />
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
                <div className="absolute w-full h-full top-0 left-0 bg-gray-900/80" />
            </div>
        </section>
        <section className="mb-52 mt-32 w-full flex flex-col items-center justify-center">
            <Link
                to="/"
                className="flex items-center -ml-20 mb-12 justify-center"
                aria-label="logo"
            >
                <div className="h-auto w-16 ">
                    <StaticImage
                        quality={100}
                        className="h-full w-full"
                        loading="eager"
                        placeholder="blurred"
                        src="../assets/favicon.png"
                    />
                </div>
                <p className="text-gray-700 text-2xl ml-2 -tracking-wide font-semibold">
                    Seovileo
                </p>
            </Link>

            <div className="mb-12">
                <p className="text-gray-700 text-xl tracking-wide font-semibold">
                    Strona w budownie
                </p>
                <p className="text-gray-700 text-xl tracking-wide font-semibold">
                    Zapraszam za jakis czas
                </p>
            </div>

            <div className="flex items-center justify-center">
                <Link to="/" className="btn mr-6">
                    Strona Główna
                </Link>
            </div>
        </section>
    </Layout>
);

export const Head = () => <Seo title="Strony Internetowe" />;
export default Budowa;
