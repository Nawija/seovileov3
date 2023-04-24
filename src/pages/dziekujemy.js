import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import LiveBackground from "../components/liveBackground";

const ThxForm = () => (
    <Layout>
        <section className="relative flex items-center justify-center w-full ">
            <LiveBackground />
            <div className="relative w-full -z-20">
                <StaticImage
                    className="h-40 lg:h-52 xl:h-56 w-full md:w-full"
                    quality={100}
                    src="../assets/hero.png"
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
        <section className="relative mb-52 mt-16 md:mt-28 w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-start justify-center">
                <div className="absolute top-0 left-0 w-full h-full -z-10 mt-3 opacity-10">
                    <StaticImage
                        quality={5}
                        loading="eager"
                        placeholder="blurred"
                        src="https://cdn.pixabay.com/photo/2016/01/28/16/34/contact-1166590_1280.png"
                    />
                </div>
                <Link
                    to="/"
                    className="flex items-center ml-10 mb-4 justify-center"
                    aria-label="logo"
                >
                    <div className="h-auto w-16 ">
                        <StaticImage
                            quality={100}
                            className="h-full w-full"
                            loading="eager"
                            placeholder="blurred"
                            src="../assets/logoBrowser.png"
                        />
                    </div>
                    <p className="text-gray-600 drop-shadow-md text-3xl ml-2 -tracking-wider font-semibold">
                        Seovileo
                    </p>
                </Link>

                <p className="text-2xl text-gray-700 font-bold px-2 mb-6">
                    Dziekujemy za zgłoszenie
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

export default ThxForm;
