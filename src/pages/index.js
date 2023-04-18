import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HeroCompon } from "../components/index";

const IndexPage = ({ data }) => {
    const { allDatoCmsPortfolio } = data;

    return (
        <Layout>
            <HeroCompon />
            <div class="container max-w-screen-xl mt-4 lg:-mt-4 mb-6 md:mb-24 mx-auto">
                <section class=" text-gray-800 text-center">
                    <div class="grid lg:gap-x-12 lg:grid-cols-3">
                        <div class="mb-12 lg:mb-0">
                            <div class="rounded-lg shadow-lg h-full block bg-white w-[90%] sm:w-[90%] lg:w-full mx-auto px-4">
                                <div class="flex justify-center">
                                    <div class="p-4 bg-gradient-to-t from-amber-500 to-amber-300 shadow-amber-600 rounded-full shadow-lg inline-block -mt-8">
                                        <svg
                                            class="w-8 h-8 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="p-6">
                                    <h5 class="text-lg font-semibold mb-4">
                                        Wsparcie 24/7
                                    </h5>
                                    <p>
                                        Dla klientów posiadających strony
                                        internetowe wsparcie 24/7 to kluczowe
                                        rozwiązanie. Dzięki temu klienci
                                        otrzymują szybką i profesjonalną pomoc w
                                        przypadku problemów z działaniem strony
                                        internetowej. Programiści zapewniają
                                        stałą dostępność i wsparcie, co pozwala
                                        na nieprzerwane działanie strony i
                                        minimalizuje ryzyko utraty klientów i
                                        szkód dla biznesu.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mb-12 lg:mb-0">
                            <div class="rounded-lg shadow-lg h-full block bg-white w-[90%] sm:w-[90%] lg:w-full mx-auto px-4">
                                <div class="flex justify-center">
                                    <div class="p-4 bg-gradient-to-t from-amber-500 to-amber-300 shadow-amber-600 rounded-full shadow-lg inline-block -mt-8">
                                        <svg
                                            class="w-8 h-8 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="p-6">
                                    <h5 class="text-lg font-semibold mb-4">
                                        Technologia Premium
                                    </h5>
                                    <p>
                                        Nowoczesne technologie oferują wiele
                                        korzyści dla stron internetowych.
                                        Pozwalają one na łatwe dostosowanie
                                        witryny do wymagań SEO i pozycjonowania
                                        w wyszukiwarkach, a także na poprawę
                                        jakości użytkowania dla odwiedzających.
                                        Dzięki nowoczesnej technologii, strony
                                        internetowe stają się bardziej
                                        funkcjonalne co przekłada się na lepsze
                                        wyniki i większą skuteczność w biznesie.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <div class="rounded-lg shadow-lg h-full block bg-white w-[90%] sm:w-[90%] lg:w-full mx-auto px-4">
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
                                <div class="p-6">
                                    <h5 class="text-lg font-semibold mb-4">
                                        Ekstremalnie Szybki
                                    </h5>
                                    <p>
                                        Tworzę strony internetowe które ładują
                                        sie z prędkością światła dzięki
                                        wykorzystaniu pre-renderingu i ładowaniu
                                        treści tylko wtedy, gdy są potrzebne.
                                        Dzięki temu strony internetowe działają
                                        niezwykle szybko i są bardziej
                                        responsywne dla użytkowników
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* <div
                class="container max-w-screen-xl my-16 px-6 mx-auto"
            >
                <section class="mb-32 text-gray-800 text-center lg:text-left">
                    <h2 class="text-3xl font-bold mb-12 text-center">
                        Projekty
                    </h2>

                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6">
                        {allDatoCmsPortfolio.edges.map(({ node }) => (
                            <div class="mb-12 lg:mb-0">
                                <div
                                    class="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    <Link to={node.slug}>
                                        <GatsbyImage
                                            className="w-full h-52 hover:scale-110 transition-transform duration-200"
                                            loading="eager"
                                            image={getImage(
                                                node.img.gatsbyImageData
                                            )}
                                            alt={
                                                node.img.alt ||
                                                "Strona Internetowa"
                                            }
                                        />
                                    </Link>
                                </div>
                                <h3 class="text-lg font-bold mb-3">
                                    {node.naglowek}
                                </h3>
                                <div class="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                                    <svg
                                        class="w-4 h-4 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                                        />
                                    </svg>
                                    Hot news
                                </div>
                                <p class="text-gray-500">{node.krotkiTekst}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div> */}

            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div class="flex items-start mb-6 justify-between gap-8 sm:items-center">
                        <p class="max-w-screen-sm text-sm text-gray-500 lg:text-base">
                            This is a section of some simple filler text, also
                            known as placeholder text. some simple filler text, also
                            known as placeholder text.
                        </p>

                        <Link
                            to="projekty"
                            class="inline-block rounded-lg border border-gray-700 bg-white px-4 py-2 text-center text-sm sm:font-semibold text-gray-700 outline-none ring-indigo-700 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3"
                        >
                            Wiecej Projektów
                        </Link>
                    </div>
                    <div class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
                        {allDatoCmsPortfolio.edges.map(({ node }) => (
                            <Link
                                to={node.slug}
                                class="group relative flex h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-xl md:h-52"
                            >
                                <GatsbyImage
                                    className="w-full h-52 hover:scale-110 transition-transform duration-200"
                                    loading="eager"
                                    image={getImage(node.img.gatsbyImageData)}
                                    alt={node.img.alt || "Strona Internetowa"}
                                />
                                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                <span class="absolute ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                    {node.naglowek}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* <section id="projects" className="-mt-8 bg-white py-20 px-6 ">
                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                            Projekty
                        </h2>

                        <p className="max-w-screen-md text-gray-700 w-[90%] md:text-lg text-center mx-auto">
                            Chcesz zwiększyć swoją obecność w sieci i dotrzeć do
                            większej liczby potencjalnych klientów? Zleć mi
                            stworzenie strony internetowej, która skutecznie
                            przyciągnie uwagę i zbuduje pozytywny wizerunek
                            Twojej firmy
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 xl:ml-32">
                        {allDatoCmsPortfolio.edges.map(({ node }) => (
                            <div className="flex flex-col md:flex-row items-start gap-4 lg:gap-6">
                                <Link
                                    to={node.slug}
                                    className="group w-full md:w-32 lg:w-52 h-56 md:h-32 lg:h-48 block self-start shrink-0 overflow-hidden rounded-lg relative"
                                >
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                        loading="eager"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.img.alt || "Strona Internetowa"}
                                    />
                                </Link>

                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm">
                                        {node.date}
                                    </span>

                                    <h2 className="text-gray-800 w-[93%] lg:w-[70%] text-xl font-bold">
                                        <Link
                                            to="/"
                                            className="hoverLink  active:text-gray-900 transition duration-100"
                                        >
                                            {node.naglowek}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-700 w-[93%] lg:w-[70%]">
                                        {node.krotkiTekst}
                                    </p>

                                    <div>
                                        <Link
                                            to={node.slug}
                                            className="linkColor font-bold active:text-gray-900 py-1"
                                        >
                                            Zobacz
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mx-auto text-center">
                    <Link
                        className="text-center btn mt-6 md:mt-12 lg:mt-20"
                        to="/projekty"
                    >
                        Więcej Projektów
                    </Link>
                </div>
            </section> */}

            <section class="text-gray-900  body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <div class="lg:w-[90%] mx-auto">
                        <div class="rounded-lg h-64 overflow-hidden">
                            <StaticImage
                                alt="content"
                                class="object-cover object-center h-full w-full"
                                src="https://images.unsplash.com/photo-1462556791646-c201b8241a94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2896&q=80"
                            />
                        </div>
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-10 h-10"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h4 class="font-medium title-font mt-4 text-gray-900 text-lg">
                                        Phoebe Caulfield
                                    </h4>
                                    <div class="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                                    <p class="text-base">
                                        Raclette knausgaard hella meggs normcore
                                        williamsburg enamel pin sartorial venmo
                                        tbh hot chicken gentrify portland.
                                    </p>
                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p class="leading-relaxed text-lg mb-4">
                                    Meggings portland fingerstache lyft,
                                    post-ironic fixie man bun banh mi umami
                                    everyday carry hexagon locavore direct trade
                                    art party. Locavore small batch listicle
                                    gastropub farm-to-table lumbersexual salvia
                                    messenger bag. Coloring book flannel
                                    truffaut craft beer drinking vinegar
                                    sartorial, disrupt fashion axe normcore meh
                                    butcher. Portland 90's scenester
                                    vexillologist forage post-ironic
                                    asymmetrical, chartreuse disrupt butcher
                                    paleo intelligentsia pabst before they sold
                                    out four loko. 3 wolf moon brooklyn.
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
                            class="object-cover h-96 object-center rounded"
                            alt="hero"
                            src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80"
                        />
                    </div>
                </div>
            </section>

            <section class="text-gray-900 body-font mx-auto">
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
                            class="object-cover h-96 object-center rounded"
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
                            class="object-cover h-96 object-center rounded"
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
    }
`;

export const Head = () => <Seo title="Strona wwww" />;

export default IndexPage;
