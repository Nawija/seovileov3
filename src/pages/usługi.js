import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import LiveBackground from "../components/liveBackground";

const Usługi = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsUslugi(sort: { position: ASC }) {
                edges {
                    node {
                        img {
                            alt
                            gatsbyImageData
                        }
                        opis
                        title
                        slug
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <div className="relative flex items-center justify-center w-full mx-auto">
                <LiveBackground />
                <div className="relative w-full -z-20">
                    <StaticImage
                        className="h-40 lg:h-52 xl:h-56 w-full md:w-full"
                        quality={100}
                        src="../assets/hero.png"
                        loading="eager"
                        alt="Seovileo Strony internetowe"
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
                            fill="#f8f8f8"
                        />
                    </svg>
                    <div className="absolute w-full h-full top-0 left-0 bg-gray-900/80" />
                </div>
            </div>
            <section class="text-gray-800 body-font -mt-40 lg:-mt-32">
                <div class="container px-5 py-24 mx-auto max-w-screen-xl">
                    <div class="flex flex-wrap w-full md:mb-8">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium -tracking-wide mb-2 text-gray-900">
                                Strona Internetowa
                            </h1>
                            <div className=" bg-gradient-to-r from-amber-400 w-[30%] md:w-[23%] h-1 rounded-3xl lg:mb-6" />
                        </div>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-700 font-medium -tracking-wide">
                            Usługi Seovileo to idealne rozwiązanie dla Twojej
                            strony internetowej. Oferujemy wsparcie w zakresie
                            projektowania, tworzenia i utrzymywania strony www.
                            Zajmujemy się m.in. optymalizacją kodu, dbamy o
                            bezpieczeństwo i wydajność strony. Zapewniamy
                            kompleksową pomoc, aby Twoja strona działała
                            sprawnie i przyciągała użytkowników.
                        </p>
                    </div>
                    <div class="flex items-stretch flex-wrap -m-4">
                        {data.allDatoCmsUslugi.edges.map(({ node }) => (
                            <Link
                                to={`/` + node.slug}
                                class="xl:w-1/4 md:w-1/2 p-4 flex items-stretch justify-start flex-col"
                            >
                                <div class="bg-gray-100 md:hover:bg-gray-200 transition-colors duration-200 h-full p-6 rounded-lg shadow-lg flex items-stretch justify-center text-center flex-col relative">
                                    <GatsbyImage
                                        className="h-auto rounded w-3/4 mx-auto object-cover mb-6"
                                        loading="eager"
                                        placeholder="blurred"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={
                                            node.img.alt || "Strona Internetowa"
                                        }
                                    />
                                    <h3 class="tracking-widest text-emerald-700 text-[12px] font-bold title-font">
                                        Usługa
                                    </h3>
                                    <h2 class="text-lg text-gray-900 -tracking-wider font-semibold title-font mb-4">
                                        {node.title}
                                    </h2>
                                    <p className="absolute right-2 bottom-2 px-2 py-1 text-sm font-bold md:hover:tracking-wider md:transition-all md:duration-200">
                                        Więcej &#8594;
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center max-w-screen-2xl lg:flex-row mx-auto px-5">
                    
                    <div class="text-gray-800 body-font lg:w-1/2">
                        <div class="px-5">
                            <div>
                                <div class="flex w-full bg-gray-100 rounded-xl py-32 px-10 relative mb-4">
                                    <StaticImage
                                        alt="projekty stron www"
                                        class="w-full object-cover h-full object-center block opacity-10 absolute inset-0"
                                        src="https://cdn.pixabay.com/photo/2016/08/27/12/06/website-1624028_960_720.png"
                                    />
                                    <div class="text-center relative z-10 w-full">
                                        <h2 class="text-2xl text-gray-900 font-semibold title-font mb-2">
                                            Projekty Stron Internetowych
                                        </h2>
                                        <p class="leading-relaxed font-medium">
                                            Tworzymy profesjonalne strony
                                            internetowe dla firm i klientów
                                            indywidualnych. Nasze projekty
                                            cechuje przejrzysty i atrakcyjny
                                            design oraz łatwa nawigacja. Dbamy o
                                            responsywność i szybkość ładowania
                                            strony.
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-2">
                                    <div class="px-2 mb-4 w-52">
                                        <div class="flex flex-wrap w-full bg-gradient-to-bl from-indigo-500 rounded-xl to-blue-300 sm:py-24 py-16 sm:px-10 px-6 relative">
                                            <div class="text-center relative z-10 w-full">

                                                    <StaticImage
                                                        quality={100}
                                                        className="object-contain"
                                                        loading="eager"
                                                        height={100}
                                                        placeholder="blurred"
                                                        src="../assets/logoBrowser.png"
                                                    />

                                                <h2 class="text-xl text-gray-100  title-font font-semibold drop-shadow-md mb-2">
                                                    Projekty Logo
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-2 w-72">
                                        <div class="flex flex-wrap w-full bg-gray-100 rounded-xl sm:py-24 py-16 sm:px-10 px-6 relative">
                                            <StaticImage
                                                alt="funkcje strony internetowej"
                                                class="w-full object-cover h-full object-center block opacity-10 absolute inset-0"
                                                src="https://cdn.pixabay.com/photo/2015/05/15/21/36/finger-769300_960_720.jpg"
                                            />
                                            <div class="text-center relative z-10 w-full">
                                                <h2 class="text-xl text-gray-900  title-font mb-2 font-semibold">
                                                    Funkcjonalność Strony
                                                </h2>
                                                <p class="leading-relaxed font-medium">
                                                    takie jak: formularze, menu
                                                    nawigacyjne, obrazki, tekst,
                                                    przyciski, multimedia,
                                                    komentarze, tagi, lista
                                                    produktów usług i wiele
                                                    wiecej
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="px-2 mb-12 mt-4">
                                        Tworzymy profesjonalne i atrakcyjne
                                        strony internetowe dla firm i klientów
                                        indywidualnych. Nasze projekty cechuje
                                        oryginalny design i łatwa nawigacja,
                                        dzięki czemu użytkownicy łatwo znajdują
                                        potrzebne informacje. Dbamy o
                                        responsywność i szybkość ładowania
                                        strony, co wpływa pozytywnie na jej
                                        pozycjonowanie. Oferujemy również
                                        optymalizację treści, tak aby Twoja
                                        strona była łatwo zauważalna przez
                                        wyszukiwarki internetowe.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full md:w-1/3 flex-col items-center justify-center">
                        {data.allDatoCmsUslugi.edges.map(({ node }) => (
                            <div>
                                <div className="flex flex-col lg:w-2/3 items-center md:items-start justify-center text-center md:text-start ">
                                    <h3 class="text-lg text-gray-900 -tracking-wider font-semibold title-font mb-4">
                                        {node.title}
                                    </h3>
                                    <p className="mb-3">{node.opis}</p>
                                    <Link
                                        to={`/` + node.slug}
                                        className="px-2 py-1 text-sm font-bold md:hover:tracking-wider md:transition-all md:duration-200 mb-12"
                                    >
                                        Więcej &#8594;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Usługi;
