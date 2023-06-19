import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroLinks from "../components/HeroLinks";

const Budowa = () => (
    <Layout>
        <HeroLinks />
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
