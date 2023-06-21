import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroLinks from "../components/HeroLinks";

const ErrorPage = () => (
    <Layout>
        <HeroLinks />
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
                        <h1 class="mb-4 text-5xl font-semibold uppercase text-orange-500 md:text-7xl">
                            Error 404
                        </h1>
                        <p class="mb-2 text-center text-lg font-semibold text-gray-800 sm:text-left">
                            Uupsss...
                        </p>

                        <p class="mb-8 text-center capitalize text-gray-800 sm:text-left text-lg">
                            Coś poszło nie tak
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

export const Head = () => <Seo title="Strona 404" siteUrl="https://seovileo.pl/404" />;

export default ErrorPage;
