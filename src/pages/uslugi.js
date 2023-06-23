import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroLinks from "../components/HeroLinks";

const Usługi = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsUsluga(sort: { position: ASC }) {
                edges {
                    node {
                        img {
                            alt
                            gatsbyImageData(width: 55, placeholder: NONE)
                        }
                        desc
                        title
                        slug
                    }
                }
            }
        }
    `);
    const [showFaq, setFaqState] = useState(false);
    const handleFaq = (buttonId) => {
        setFaqState((prevState) => ({
            ...prevState,
            [buttonId]: !prevState[buttonId], // Inwertuje stan dla danego przycisku
        }));
    };
    return (
        <Layout>
            <HeroLinks />
            <section className="relative">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8 -mt-10">
                    <h1 className="text-center text-2xl lg:text-3xl mb-4 text-[#006647] font-bold tracking-wide ">
                        Usługi Seovileo
                    </h1>
                    <div className="mb-12 max-w-screen-sm mx-auto text-center">
                        <p className=" text-gray-900">
                            Oferuję szeroki zakres usług związanych z
                            projektowaniem, pozycjonowaniem i tworzeniem
                            szalenie szybkich stron internetowych
                        </p>
                    </div>
                    <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:mb-8 xl:grid-cols-4 md:gap-6 xl:gap-8">
                        {data.allDatoCmsUsluga.edges.map(({ node }) => (
                            <Link
                                to={"/" + node.slug}
                                className="relative border-2 border-t-4 w-[85%] sm:w-full mx-auto border-t-blue-200 hover:border-t-emerald-300 group rounded-xl hover:scale-[1.02] hover:shadow-xl shadow-lg bg-gradient-to-b from-slate-50 to-gray-300 mb-8 sm:mb-0 p-6 pb-12 transition"
                            >
                                <div className="p-3 w-max -mt-12 rounded-full shadow-md shadow-sky-500 bg-gradient-to-br from-emerald-300 to-blue-600">
                                    <GatsbyImage
                                        className="w-[50px] h-[50px]"
                                        loading="lazy"
                                        image={getImage(node.img)}
                                        alt={node.title}
                                    />
                                </div>
                                <h2 className="font-bold capitalize my-3 drop-shadow-lg text-sky-700">
                                    {node.title}
                                </h2>
                                <p className="font-medium text-sm">
                                    {node.desc}
                                </p>
                                <p
                                    to={node.slug}
                                    className="px-3 py-2 text-black capitalize text-sm font-bold absolute bottom-2 right-2"
                                >
                                    Zobacz Więcej &#8594;
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="mb-10 md:mb-16">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Najczęściej zadawane pytania
                        </h2>

                        <p class="mx-auto max-w-screen-md text-center text-gray-700">
                            Znajdziesz tu odpowiedzi na najważniejsze pytania
                            dotyczące procesu tworzenia profesjonalnych stron,
                            skutecznej promocji w wyszukiwarkach oraz
                            kreatywnego projektowania logo, aby Twoja marka
                            wyróżniała się wśród konkurencji
                        </p>
                    </div>

                    <div class="mx-auto flex max-w-screen-md flex-col border-t">
                        <div class="border-b">
                            <button
                                onClick={() => handleFaq(1)}
                                class="flex cursor-pointer w-full justify-between gap-2 py-4 text-black hover:text-[#006647]"
                            >
                                <h3 class="font-semibold transition duration-100 md:text-lg">
                                    Jakie są najważniejsze kroki przy
                                    projektowaniu strony internetowej?
                                </h3>

                                <span
                                    class={`text-[#006647] transition-transform ${
                                        showFaq[1] ? "rotate-0" : "rotate-180"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <p
                                class={`text-gray-700 overflow-hidden transition-all duration-300 ${
                                    showFaq[1]
                                        ? "h-0 opacity-0"
                                        : "h-max opacity-100 mb-4"
                                }`}
                            >
                                Analiza celów i oczekiwań, projektowanie
                                interfejsu, tworzenie responsywnego designu,
                                optymalizacja wydajności
                            </p>
                        </div>

                        <div class="border-b">
                            <button
                                onClick={() => handleFaq(2)}
                                class="flex w-full cursor-pointer justify-between gap-2 py-4 text-black hover:text-[#006647]"
                            >
                                <h3 class="font-semibold transition duration-100 md:text-lg">
                                    Jakie są korzyści pozycjonowania SEO dla
                                    mojej strony?
                                </h3>

                                <span
                                    class={`text-[#006647] transition-transform ${
                                        !showFaq[2] ? "rotate-0" : "rotate-180"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <p
                                class={`text-gray-700 overflow-hidden transition-all duration-300 ${
                                    !showFaq[2]
                                        ? "h-0 opacity-0"
                                        : "h-max opacity-100 mb-4"
                                }`}
                            >
                                Wyższa widoczność w wynikach wyszukiwania,
                                większy ruch organiczny, zwiększenie liczby
                                potencjalnych klientów, wzrost konwersji i
                                zwiększenie świadomości marki.
                            </p>
                        </div>
                        <div class="border-b">
                            <button
                                onClick={() => handleFaq(3)}
                                class="flex cursor-pointer w-full justify-between gap-2 py-4 text-black hover:text-[#006647]"
                            >
                                <h3 class="font-semibold transition duration-100 md:text-lg">
                                    Jakie są popularne techniki pozycjonowania
                                    SEO?
                                </h3>

                                <span
                                    class={`text-[#006647] transition-transform ${
                                        !showFaq[3] ? "rotate-0" : "rotate-180"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <p
                                class={`text-gray-700 overflow-hidden transition-all duration-300 ${
                                    !showFaq[3]
                                        ? "h-0 opacity-0"
                                        : "h-max opacity-100 mb-4"
                                }`}
                            >
                                Optymalizacja treści i meta-tagów, budowa
                                zdrowej struktury strony, link building, analiza
                                słów kluczowych, responsywność i szybkość
                                ładowania strony, unikalne i wartościowe treści
                            </p>
                        </div>

                        <div class="border-b">
                            <button
                                onClick={() => handleFaq(4)}
                                class="flex cursor-pointer w-full justify-between gap-2 py-4 text-black hover:text-[#006647]"
                            >
                                <h3 class="font-semibold transition duration-100 md:text-lg">
                                    Jakie elementy powinno zawierać dobre logo?
                                </h3>

                                <span
                                    class={`text-[#006647] transition-transform ${
                                        !showFaq[4] ? "rotate-0" : "rotate-180"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <p
                                class={`text-gray-700 overflow-hidden transition-all duration-300 ${
                                    !showFaq[4]
                                        ? "h-0 opacity-0"
                                        : "h-max opacity-100 mb-4"
                                }`}
                            >
                                Unikalność, czytelność w różnych rozmiarach,
                                odzwierciedlenie wartości marki, prostota,
                                trwałość, skalowalność i łatwość zapamiętywania.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Usługi Seovileo - Strony Seo Logo Design"
        siteUrl="https://seovileo.pl/uslugi"
    />
);

export default Usługi;
