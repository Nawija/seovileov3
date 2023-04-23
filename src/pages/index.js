import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HeroCompon } from "../components/index";
import LiveBacground from "../components/liveBacground";

const IndexPage = ({ data }) => {
    const { allDatoCmsPortfolio, allDatoCmsUslugi } = data;

    return (
        <Layout>
            <HeroCompon />

            <section class="container max-w-screen-xl mt-4 lg:-mt-20 mb-6 md:mb-24 mx-auto">
                <div class=" text-gray-800 text-center">
                    <div class="grid lg:gap-x-12 md:grid-cols-3 lg:px-4">
                        <div class="mb-12 lg:mb-0">
                            <div class="rounded-lg shadow-xl h-full block bg-white/60 backdrop-blur-xl w-[90%] sm:w-[90%] lg:w-full mx-auto px-4">
                                <div class="flex justify-center">
                                    <div class="p-4 bg-gradient-to-t from-amber-500 to-amber-300 shadow-amber-600 rounded-full shadow-lg inline-block -mt-8">
                                        <svg
                                            class="w-8 h-8 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div class="px-2 py-6 sm:px-6">
                                    <h2 class="text-lg font-bold mb-4">
                                        Szybkość działania
                                    </h2>
                                    <p>
                                        Dzięki wykorzystaniu technologii
                                        GatsbyJS tworzymy strony internetowe,
                                        które działają bardzo szybko. Nasze
                                        strony ładują się w mgnieniu oka, co
                                        przekłada się na pozytywne doświadczenie
                                        użytkownika i lepsze wyniki w
                                        wyszukiwarkach.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mb-12 lg:mb-0">
                            <div class="rounded-lg shadow-xl h-full block bg-white/60 backdrop-blur-xl w-[90%] sm:w-[90%] lg:w-full mx-auto px-4">
                                <div class="flex justify-center">
                                    <div class="p-4 bg-gradient-to-t from-amber-500 to-amber-300 shadow-amber-600 rounded-full shadow-lg inline-block -mt-8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-8 w-8 scale-110"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="white"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"></path>
                                            <path d="M14 16h-4v-8h4"></path>
                                            <path d="M11 12h2"></path>
                                            <path d="M17 8m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="px-2 py-6 sm:px-6">
                                    <h2 class="text-lg font-bold mb-4">
                                        Przyjazna SEO
                                    </h2>
                                    <p>
                                        Dla klientów posiadających strony
                                        internetowe wsparcie 24/7 to kluczowe
                                        rozwiązanie. Dzięki temu klienci
                                        otrzymują szybką i profesjonalną pomoc w
                                        przypadku problemów z działaniem strony
                                        internetowej
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <div class="rounded-lg shadow-xl h-full block bg-white/60 backdrop-blur-xl w-[90%] sm:w-[90%] lg:w-full mx-auto px-4">
                                <div class="flex justify-center">
                                    <div class="p-4 bg-gradient-to-t from-amber-500 to-amber-300 shadow-amber-600 rounded-full shadow-lg inline-block -mt-8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-8 w-8 scale-125"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path
                                                d="M18 4a1 1 0 0 1 .783 .378l.074 .108l3 5a1 1 0 0 1 -.032 1.078l-.08 .103l-8.53 9.533a1.7 1.7 0 0 1 -1.215 .51c-.4 0 -.785 -.14 -1.11 -.417l-.135 -.126l-8.5 -9.5a1 1 0 0 1 -.172 -1.067l.06 -.115l3.013 -5.022l.064 -.09a.982 .982 0 0 1 .155 -.154l.089 -.064l.088 -.05l.05 -.023l.06 -.025l.109 -.032l.112 -.02l.117 -.005h12zm-8.886 3.943a1 1 0 0 0 -1.371 .343l-.6 1l-.06 .116a1 1 0 0 0 .177 1.07l2 2.2l.09 .088a1 1 0 0 0 1.323 -.02l.087 -.09a1 1 0 0 0 -.02 -1.323l-1.501 -1.65l.218 -.363l.055 -.103a1 1 0 0 0 -.398 -1.268z"
                                                stroke-width="0"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="px-2 py-6 sm:px-6">
                                    <h2 class="text-lg font-bold mb-4">
                                        Technologia Premium
                                    </h2>
                                    <p>
                                        Nowoczesne technologie oferują wiele
                                        korzyści dla stron internetowych.
                                        Pozwalają one na łatwe dostosowanie SEO
                                        i pozycjonowania w wyszukiwarkach, a
                                        także na poprawę jakości użytkowania dla
                                        odwiedzających.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:-mt-10 py-10 md:pt-0 lg:pt-10 max-w-screen-2xl mx-auto">
                <h2 className="text-center px-12 text-lg uppercase md:text-xl titleSection font-bold -tracking-wider drop-shadow-lg ">
                    Szybka <strong>Strona Internetowa</strong>
                </h2>
                <div className=" bg-gradient-to-r from-amber-400 w-[30%] md:w-[18%] h-1 rounded-3xl mb-20 lg:mb-6 mx-auto" />
                <div className="flex flex-col bg-gray-800 lg:bg-transparent lg:mt-20 px-4 lg:flex-row py-6 md:pb-16">
                    <div className="sm:w-4/5 -mt-24 w-full lg:w-1/2 mx-auto lg:my-auto flex mb-8 items-center justify-center lg:order-1">
                        <StaticImage
                            className="lg:-mt-20"
                            loading="eager"
                            placeholder="blurred"
                            src="../assets/speedTest.png"
                            alt="test szybkosci strony internetowej"
                        />
                    </div>
                    <div className="lg:w-[60%] lg:px-2">
                        <p class=" px-2 md:px-12 font-bold text-emerald-700 text-sm">
                            TECHNOLOGIA GATSBY
                        </p>
                        <p class=" px-2 md:px-12 text-gray-100 lg:text-gray-700 font-bold text-xl mb-4 md:mb-0">
                            UZYSKAJ NAJSZYBSZĄ STRONĘ INTERNETOWĄ!
                        </p>
                        <p class=" px-2 md:px-12 md:mt-4 text-gray-300 lg:text-gray-700">
                            Nasze strony internetowe tworzymy w technologii
                            Gatsby, aby zapewnić naszym klientom najlepsze
                            doświadczenie użytkownika. Dzięki szybkości i
                            wydajności, nasze strony są łatwo dostępne dla
                            każdego, bez względu na urządzenie, z jakiego
                            korzystają. Integracja z różnymi źródłami danych
                            pozwala nam łączyć dane z wielu źródeł i tworzyć
                            dynamiczne strony internetowe.
                        </p>
                        <p class=" px-2 md:px-12 pb-6 mt-3 md:mt-4 text-gray-300 lg:text-gray-700">
                            Optymalizacja SEO sprawia, że nasze strony są łatwo
                            widoczne dla wyszukiwarek i znajdują się na szczycie
                            wyników wyszukiwania. Wsparcie i dobre praktyki, na
                            jakich opiera się Gatsby, zapewniają nam
                            bezpieczeństwo i pewność, że nasze strony są zawsze
                            najlepszej jakości.
                        </p>
                    </div>
                </div>
            </section>

            <section class="md:-mt-24 -mt-12  pb-24 pt-16 lg:py-48 relative ">
                <svg
                    className="absolute w-full -top-1 left-0 z-10"
                    viewBox="0 0 2004 154"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className=" fill-[#1f2937] lg:fill-[#f1f1f1]"
                        d="M0 116.001C0 116.001 458.5 31.5011 1002 116.001C1545.5 200.501 2004 116.001 2004 116.001V9.15527e-05H0V116.001Z"
                    />
                </svg>
                <svg
                    className="absolute w-full -bottom-1 left-0 z-10"
                    viewBox="0 0 2004 94"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2004 22.9898C2004 22.9898 1545.5 74.7165 1002 22.9898C458.5 -28.7372 0 22.9898 0 22.9898V94H2004V22.9898Z"
                        fill="#F1F1F1"
                    />
                </svg>

                <LiveBacground />
                <div className="absolute inset-0 -z-20 w-full h-full bg-gradient-to-t from-[#1f2d57] to-[#0C1530]" />
                <StaticImage
                    className="inset-0 absolute h-full w-full opacity-10"
                    quality={100}
                    style={{ position: "absolute" }}
                    placeholder="blurred"
                    src="https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80"
                />

                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <h3 className="text-center sm:text-start text-xl md:text-2xl mb-4 text-amber-400 font-bold tracking-wide ">
                        Usługi
                    </h3>
                    <div class="flex flex-col sm:flex-row mb-12 justify-between gap-8 items-center">
                        <p class="max-w-screen-sm text-center sm:text-start text-gray-200 lg:text-base">
                            Oferuję szeroki zakres usług związanych z
                            projektowaniem i tworzeniem szybkich stron
                            internetowych
                        </p>
                    </div>
                    <div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-8 xl:grid-cols-4 md:gap-6 xl:gap-8">
                        {allDatoCmsUslugi.edges.map(({ node }) => (
                            <Link
                                to={node.slug}
                                className="relative border-2 border-t-4 border-t-blue-200 hover:border-t-emerald-300 group rounded-xl hover:scale-105 hover:shadow-xl shadow-lg bg-gray-100 p-6 pb-12 transition-all duration-200"
                            >
                                <GatsbyImage
                                    className="w-20 h-20 transition-transform duration-200"
                                    loading="lazy"
                                    placeholder="blurred"
                                    image={getImage(node.img.gatsbyImageData)}
                                    alt={node.img.alt || "Strona Internetowa"}
                                />
                                <h2 className="font-bold mb-3 mt-1">
                                    {node.title}
                                </h2>
                                <p>{node.opis}</p>
                                <p
                                    to={node.slug}
                                    className="px-3 py-2 text-black text-sm font-bold absolute bottom-2 right-2"
                                >
                                    Zobacz Więcej &#8594;
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section class="relative pt-6 sm:pt-8 lg:pt-12 pb-16 sm:pb-24 lg:pb-32">
                <svg
                    className="absolute -bottom-2 w-full left-0 z-10"
                    viewBox="0 0 2004 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2004 24.1561C2004 24.1561 1270 -28.018 1002 24.1561C734 76.3303 0 24.1561 0 24.1561V74.0144H2004V24.1561Z"
                        fill="white"
                    />
                </svg>

                <div class="mx-auto max-w-screen-xl px-2 md:px-10">
                    <div class="flex flex-col sm:flex-row justify-between mb-4 px-3 items-center">
                        <h3 className="text-center sm:text-start text-xl md:text-2xl  text-gray-700 font-bold tracking-wide ">
                            Projekty www
                        </h3>
                        <Link
                            to="/projekty"
                            class="px-3 py-3 text-white mt-3 sm:mt-0 text-center font-medium text-sm rounded bg-gradient-to-tr from-emerald-800 to-emerald-600 shadow-emerald-800 hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-200"
                        >
                            Wiecej Projektów
                        </Link>
                    </div>
                    <div class="flex flex-col sm:flex-row mb-12 justify-between gap-8 items-center">
                        <p class="max-w-screen-sm px-4 text-center sm:text-start text-gray-500 lg:text-base">
                            Każdy z tych projektów był realizowany w technologii
                            GatsbyJS i zawierał wiele zaawansowanych
                            funkcjonalności, co pozwoliło na uzyskanie bardzo
                            szybkich i responsywnych stron internetowych
                        </p>
                    </div>
                    <div class="mb-4 grid grid-cols-2 gap-4 sm:px-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-4 md:gap-12 lg:gap-4 xl:gap-8">
                        {allDatoCmsPortfolio.edges.map(({ node }) => (
                            <div>
                                <Link
                                    to={node.slug}
                                    class="group relative flex h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-xl md:h-64"
                                >
                                    <GatsbyImage
                                        className="w-full h-full hover:scale-110 transition-transform duration-200"
                                        loading="eager"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={
                                            node.img.alt || "Strona Internetowa"
                                        }
                                    />
                                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-500 via-transparent to-transparent opacity-50"></div>

                                    <span class="absolute bg-gray-900/50 text-sm rounded-3xl px-2 ml-2 mb-3 inline-block text-white md:ml-3">
                                        {node.naglowek}
                                    </span>
                                </Link>
                                <p
                                    to={node.slug}
                                    className="px-3 py-2 text-black text-sm font-bold absolute bottom-2 right-2"
                                >
                                    Zobacz Więcej &#8594;
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section class="text-gray-900 bg-white relative  body-font">
                <div class="container px-5 pt-24 mx-auto flex flex-col">
                    <div class="lg:w-[90%] mx-auto">
                        <div class="rounded-lg h-64 overflow-hidden relative">
                            <StaticImage
                                className="absolute h-full w-full top-0 left-0"
                                quality={100}
                                placeholder="blurred"
                                src="https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80"
                            />
                            <div className="absolute inset-0 w-full h-full z-10 bg-gray-900/70" />
                        </div>
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-400">
                                    <StaticImage
                                        className="w-12 h-12 mt-1"
                                        src="../assets/logoBrowser.png"
                                    />
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h4 class="font-medium capitalize title-font mt-4 text-gray-900 text-lg">
                                        Strony internetowe
                                    </h4>
                                    <div class="w-12 h-1 bg-amber-400 rounded mt-2 mb-4"></div>
                                    <p class="text-base">
                                        Optymalizacja SEO sprawia, że nasze
                                        strony są łatwo widoczne dla
                                        wyszukiwarek i znajdują się na szczycie
                                        wyników wyszukiwania. Wsparcie i dobre
                                        praktyki, na jakich opiera się Gatsby,
                                        zapewniają nam bezpieczeństwo i pewność,
                                        że nasze strony są zawsze najlepszej
                                        jakości.
                                    </p>
                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p class="leading-relaxed text-lg mb-4">
                                    Nasze strony internetowe tworzymy w
                                    technologii Gatsby, aby zapewnić naszym
                                    klientom najlepsze doświadczenie
                                    użytkownika. Dzięki szybkości i wydajności,
                                    nasze strony są łatwo dostępne dla każdego,
                                    bez względu na urządzenie, z jakiego
                                    korzystają. Integracja z różnymi źródłami
                                    danych pozwala nam łączyć dane z wielu
                                    źródeł i tworzyć dynamiczne strony
                                    internetowe.
                                </p>
                                <p class="leading-relaxed text-lg mb-4">
                                Optymalizacja SEO sprawia, że
                                    nasze strony są łatwo widoczne dla
                                    wyszukiwarek i znajdują się na szczycie
                                    wyników wyszukiwania. Wsparcie i dobre
                                    praktyki, na jakich opiera się Gatsby,
                                    zapewniają nam bezpieczeństwo i pewność, że
                                    nasze strony są zawsze najlepszej jakości.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="text-gray-900 bg-white  body-font mx-auto">
                <div class="container mx-auto flex max-w-screen-xl px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Before they sold out
                        </h3>
                        <p class="mb-8 leading-relaxed">
                            Copper mug try-hard pitchfork pour-over freegan
                            heirloom neutra air plant cold-pressed tacos poke
                            beard tote bag. Heirloom echo park mlkshk tote bag
                            selvage hot chicken authentic tumeric truffaut
                            hexagon try-hard chambray.
                        </p>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <StaticImage
                            class="object-cover h-96 object-center rounded-lg"
                            alt="hero"
                            src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80"
                        />
                    </div>
                </div>
            </section>

            <section class="text-gray-900 bg-gray-50 body-font mx-auto">
                <div class="container max-w-screen-xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="md:order-1 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center">
                        <h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Before they sold out
                        </h3>
                        <p class="mb-8 leading-relaxed">
                            Copper mug try-hard pitchfork pour-over freegan
                            heirloom neutra air plant cold-pressed tacos poke
                            beard tote bag. Heirloom echo park mlkshk tote bag
                            selvage hot chicken authentic tumeric truffaut
                            hexagon try-hard chambray.
                        </p>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <StaticImage
                            class="object-cover h-96 object-center rounded-lg"
                            alt="hero"
                            src="https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                        />
                    </div>
                </div>
            </section>

            <section class="text-gray-900 bg-white  body-font mx-auto">
                <div class="container mx-auto flex max-w-screen-xl px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Before they sold out
                        </h3>
                        <p class="mb-8 leading-relaxed">
                            Copper mug try-hard pitchfork pour-over freegan
                            heirloom neutra air plant cold-pressed tacos poke
                            beard tote bag. Heirloom echo park mlkshk tote bag
                            selvage hot chicken authentic tumeric truffaut
                            hexagon try-hard chambray.
                        </p>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <StaticImage
                            class="object-cover h-96 object-center rounded-lg"
                            alt="hero"
                            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80"
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsPortfolio(sort: { data: DESC }, limit: 4) {
            edges {
                node {
                    data
                    img {
                        alt
                        gatsbyImageData
                    }
                    krotkiTekst
                    link
                    naglowek
                    seoTekst
                    slug
                }
            }
        }
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
`;

export const Head = () => <Seo title="Strona wwww" />;

export default IndexPage;
