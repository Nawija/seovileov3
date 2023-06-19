import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroLinks from "../components/HeroLinks";

const Admin = () => (
    <Layout>
        <HeroLinks />
        <section className="mb-52 mt-32 w-full flex flex-col items-center justify-center">
            <Link
                to="/"
                className="flex items-center mb-12 justify-center"
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
                <p className="text-gray-700 text-2xl ml-2 tracking-wide font-semibold">
                    Seovileo
                </p>
            </Link>

            <div className="flex items-center justify-center">
                <Link
                    to="https://seovileo.admin.datocms.com/editor"
                    className="btn mr-6"
                >
                    Panel CMS
                </Link>
                <Link
                    to="https://analytics.google.com/analytics/web/?authuser=2#/p374328772/reports/reportinghub?params=_u..nav%3Dmaui"
                    className="btn mr-6"
                >
                    Analityka
                </Link>
                <Link to="https://app.herotofu.com/" className="btn">
                    Hero Tofu
                </Link>
            </div>
        </section>
    </Layout>
);
export const Head = () => <Seo title="Strony Internetowe" />;
export default Admin;
