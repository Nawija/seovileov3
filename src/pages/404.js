import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <section className="relative flex items-center justify-center w-full ">
            <div className="relative w-full -z-20">
                <StaticImage
                    className="h-40 lg:h-52 xl:h-56 w-full md:w-full"
                    quality={100}
                    src="../assets/hero.png"
                    loading="eager"
                    alt="Facades project"
                    placeholder="blurred"
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
                        fill="#ECECEC"
                    />
                </svg>
                <div className="absolute w-full h-full top-0 left-0 bg-gray-900/80" />
            </div>
        </section>
        <div class="pb-6 sm:pb-8 lg:pb-12">
            <div class="mx-auto max-w-screen-lg px-4 md:px-8">
                <div class="grid gap-8 sm:grid-cols-2">
                    <div class="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                        <StaticImage
                            src="../assets/error.jpg"
                            loading="eager"
                            alt="przegladanie strony internetowej"
                            class="absolute inset-0 h-full w-full object-cover object-center"
                        />
                    </div>
                    <div class="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
                        <p class="mb-4 text-4xl font-semibold uppercase text-orange-400 md:text-5xl">
                            Error 404
                        </p>
                        <h1 class="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
                            Uupsss...
                        </h1>

                        <p class="mb-8 text-center text-gray-500 sm:text-left text-lg md:text-xl">
                            Nie znaleziono strony
                        </p>

                        <Link href="/" class="btn">
                            Strona Główna
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export const Head = () => <Seo title="Strona 404" />;

export default NotFoundPage;
