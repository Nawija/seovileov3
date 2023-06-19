import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroLinks from "../components/HeroLinks";

const ThxForm = () => (
    <Layout>
        <HeroLinks />
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
                            src="../assets/favicon.png"
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
export const Head = () => <Seo title="Strona wwww" />;
export default ThxForm;
