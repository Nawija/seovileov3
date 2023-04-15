import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Poradnik = ({ data }) => {
    const { allDatoCmsPoradnik } = data;
    return (
        <Layout>
            <section className="text-gray-600 body-font mx-auto">
                <div className="top-0 px-2 md:px-4 py-10 md:py-12 flex flex-col items-center justify-center text-center bg-gradient-to-tr from-green-100 to-green-200">
                    <h1 className="text-xl capitalize md:text-2xl text-emerald-700 font-bold">
                        Zamówienie strony internetowej
                    </h1>
                    <h2>
                        Zobacz{" "}
                        <strong className="font-medium">krok po kroku</strong>{" "}
                        jak zamówic stronę internetową:
                    </h2>
                </div>
                <div className="container px-5 mt-8 pb-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="md:w-1/2 md:pr-10 md:py-2">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200  pointer-events-none "></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tl from-red-500 to-red-700 shadow-lg shadow-red-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        KROK 1
                                    </h2>
                                    <h3 className="text-gray-900 capitalize font-medium">
                                        Określ swoje cele:
                                    </h3>
                                    <p className="leading-relaxed">
                                        Przygotuj się do rozmowy, określając, co
                                        chcesz osiągnąć za pomocą swojej strony
                                        internetowej. Czy chcesz sprzedawać
                                        swoje produkty lub usługi, czy może
                                        szukasz sposobu na zwiększenie zasięgu
                                        swojej marki? Określenie celów pomoże Ci
                                        wybrać odpowiednią ofertę.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200  pointer-events-none "></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tl from-red-500 to-red-700 shadow-lg shadow-red-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        KROK 2
                                    </h2>
                                    <h3 className="text-gray-900 capitalize font-medium">
                                        Ustal wymagania:
                                    </h3>
                                    <p className="leading-relaxed">
                                        Określ wymagania dotyczące Twojej strony
                                        internetowej. Obejmują one m.in.
                                        funkcjonalności, wygląd, układ i treści
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200  pointer-events-none "></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tl from-red-500 to-red-700 shadow-lg shadow-red-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        KROK 3
                                    </h2>
                                    <h3 className="text-gray-900 capitalize font-medium">
                                        Wdrożenie:
                                    </h3>
                                    <p className="leading-relaxed">
                                        Kiedy projekt strony internetowej jest
                                        zaakceptowany, przystępujemy do
                                        budowania
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tl from-green-500 to-green-700 shadow-lg shadow-green-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        FINISH
                                    </h2>
                                    <h3 className="text-gray-900 capitalize font-medium">
                                        Ciesz się stroną internetową:
                                    </h3>
                                    <p className="leading-relaxed">
                                        Po wdrożeniu Twojej strony internetowej
                                        upewnij się, że wszystkie elementy
                                        strony działają poprawnie, a treści są
                                        poprawnie sformatowane, ciesz się jej
                                        efektami, Pozyskuj nowych klientów
                                    </p>
                                </div>
                            </div>
                        </div>
                        <StaticImage
                            loading="eager"
                            className="md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                            src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
                            alt="step"
                        />
                    </div>
                </div>
                {allDatoCmsPoradnik.edges.map(({ node }) => (
                    <div
                        id={node.hook}
                        className="flex flex-wrap items-stretch justify-center px-3 py-3"
                    >
                        <div
                            style={{ order: node.order }}
                            className="relative w-full order lg:w-1/2 flex flex-col items-center justify-center"
                        >
                            <div className="absolute -z-20">
                                <StaticImage
                                    className="opacity-10 md:opacity-5"
                                    src="../assets/abstract.png"
                                    quality={0}
                                />
                            </div>
                            <h3 className="text-center text-xl md:text-2xl capitalize">
                                {node.naglowek}
                            </h3>
                            <div className="bg-green-400 h-1 w-24 rounded-3xl mb-2" />
                            <p className="px-4 max-w-[570px] lg:w-[80%] mb-4 lg:mb-0">
                                {node.opis}
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <GatsbyImage
                                className="object-cover object-center max-w-xl h-auto rounded-lg"
                                image={getImage(node.img.gatsbyImageData)}
                                alt={node.img.alt}
                            />
                        </div>
                    </div>
                ))}
            </section>
        </Layout>
    );
};
export const query = graphql`
    query MyQuery {
        allDatoCmsPoradnik(sort: { id: ASC }) {
            edges {
                node {
                    hook
                    naglowek
                    opis
                    img {
                        alt
                        gatsbyImageData
                    }
                    order
                }
            }
        }
    }
`;

export const Head = () => <Seo title="Poradnik" />;

export default Poradnik;
