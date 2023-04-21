import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HeroCompon } from "../components/index";

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
                <h2 className="text-center px-12 text-xl md:text-2xl titleSection font-bold tracking-wide ">
                    Szybka <strong>Strona Internetowa</strong>
                </h2>
                <div className=" bg-gradient-to-r from-amber-400 w-[26%] h-1 rounded-3xl mb-12 mx-auto" />
                <div className="flex flex-col lg:mt-20 px-4 lg:flex-row my-6 md:mb-16">
                    <div className="sm:h-72 md:h-72 w-[80%] lg:w-1/2 mx-auto lg:my-auto flex sm:mt-3 md:mt-24 items-center justify-center order-1 lg:order-0">
                        <StaticImage
                            className="lg:-mt-20"
                            src="../assets/speedTest.png"
                        />
                    </div>
                    <div className="lg:w-3/4 lg:px-2">
                        <p class=" px-2 md:px-12 font-bold text-emerald-600 text-sm">
                            TECHNOLOGIA GATSBY
                        </p>
                        <p class=" px-2 md:px-12 text-gray-700 font-bold text-2xl mb-4 md:mb-0">
                            UZYSKAJ NAJSZYBSZĄ STRONĘ INTERNETOWĄ!
                        </p>
                        <p class=" px-2 md:px-12 md:pt-6 text-gray-700">
                            Nasze strony internetowe tworzymy w technologii
                            Gatsby, aby zapewnić naszym klientom najlepsze
                            doświadczenie użytkownika. Dzięki szybkości i
                            wydajności, nasze strony są łatwo dostępne dla
                            każdego, bez względu na urządzenie, z jakiego
                            korzystają. Integracja z różnymi źródłami danych
                            pozwala nam łączyć dane z wielu źródeł i tworzyć
                            dynamiczne strony internetowe.
                        </p>
                        <p class=" px-2 md:px-12 pb-6 md:pt-6 text-gray-700">
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

            <section class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <h3 className="text-center sm:text-start text-xl md:text-2xl mb-4 text-gray-700 font-bold tracking-wide ">
                        Usługi
                    </h3>
                    <div class="flex flex-col sm:flex-row mb-12 justify-between gap-8 items-center">
                        <p class="max-w-screen-sm text-center sm:text-start text-gray-500 lg:text-base">
                            Oferuję szeroki zakres usług związanych z
                            projektowaniem i tworzeniem szybkich stron
                            internetowych
                        </p>
                    </div>
                    <div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-8 xl:grid-cols-4 md:gap-6 xl:gap-8">
                        {allDatoCmsUslugi.edges.map(({ node }) => (
                            <div>
                                <Link
                                    to={node.slug}
                                    class="group relative flex h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-xl md:h-52"
                                >
                                    <GatsbyImage
                                        className="w-full h-52 group-hover:scale-110 transition-transform duration-200"
                                        loading="lazy"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={
                                            node.img.alt || "Strona Internetowa"
                                        }
                                    />
                                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                    <p className="absolute group text-white text-sm rounded-xl font-semibold bg-gray-900/70 py-2 px-4 bottom-2 right-4">
                                        Zobacz
                                    </p>
                                </Link>
                                <div className="p-2">
                                    <h2 class="text-lg font-bold text-start  text-gray-800">
                                        {node.title}
                                    </h2>
                                    <div className=" bg-gradient-to-r from-amber-400 w-1/3 h-1 rounded-3xl mb-4" />
                                    <p>
                                        Strona internetowa dla restauracji:
                                        Byłem zaangażowany w projekt tworzenia
                                        strony internetowej dla restauracji,
                                        która specjalizuje się w kuchni
                                        włoskiej. Strona była zoptymalizowana
                                        pod kątem wydajności i zawierała wiele
                                        zaawansowanych funkcjonalności
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section class=" py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-2 md:px-10">
                    <div class="flex flex-row justify-between mb-4 px-4 items-center">
                        <h3 className="text-center sm:text-start text-xl md:text-2xl  text-gray-700 font-bold tracking-wide ">
                            Projekty www
                        </h3>
                        <Link to="/projekty" class="btnEmerald">
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
                            <Link
                                to={node.slug}
                                class="group relative flex h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-xl md:h-64"
                            >
                                <GatsbyImage
                                    className="w-full h-full hover:scale-110 transition-transform duration-200"
                                    loading="eager"
                                    image={getImage(node.img.gatsbyImageData)}
                                    alt={node.img.alt || "Strona Internetowa"}
                                />
                                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                <span class="absolute bg-gray-900/50 text-sm rounded-3xl px-2 ml-2 mb-3 inline-block text-white md:ml-3">
                                    {node.naglowek}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section class="text-gray-900 bg-white  body-font">
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

            <section class="mb-40">
                <nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between"></nav>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute block w-full"
                    style={{ margin: "auto", "z-index": "-10;" }}
                    height="680"
                    preserveAspectRatio="none"
                    viewBox="0 0 1920 880"
                >
                    <g transform="translate(960,440) scale(1,1) translate(-960,-440)">
                        <linearGradient
                            id="lg-0.047955344060927496"
                            x1="0"
                            x2="1"
                            y1="0"
                            y2="0"
                        >
                            <stop
                                stop-color="hsl(221, 61%, 13%)"
                                offset="0"
                            ></stop>
                            <stop
                                stop-color="hsl(221, 46%, 36%)"
                                offset="1"
                            ></stop>
                        </linearGradient>
                        <path
                            d=""
                            fill="url(#lg-0.047955344060927496)"
                            opacity="0.4"
                        >
                            <animate
                                attributeName="d"
                                dur="33.333333333333336s"
                                repeatCount="indefinite"
                                keyTimes="0;0.333;0.667;1"
                                calcmod="spline"
                                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                                begin="0s"
                                values="M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z;M0 0L 0 877.6839081951588Q 320 668.0720922803877  640 649.0018928349388T 1280 328.7087077664202T 1920 162.95038242563396L 1920 0 Z;M0 0L 0 724.9886210051687Q 320 661.4364572061575  640 623.2173947479624T 1280 359.20353038907734T 1920 135.51673041732283L 1920 0 Z;M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z"
                            ></animate>
                        </path>
                        <path
                            d=""
                            fill="url(#lg-0.047955344060927496)"
                            opacity="0.4"
                        >
                            <animate
                                attributeName="d"
                                dur="33.333333333333336s"
                                repeatCount="indefinite"
                                keyTimes="0;0.333;0.667;1"
                                calcmod="spline"
                                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                                begin="-6.666666666666667s"
                                values="M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z;M0 0L 0 842.1984196370487Q 320 570.6690721707517  640 540.6844954979398T 1280 439.92879442880593T 1920 200.29713960445451L 1920 0 Z;M0 0L 0 796.6802345094818Q 320 721.9216894353016  640 696.8815669355181T 1280 373.6367381440213T 1920 196.63169821789495L 1920 0 Z;M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z"
                            ></animate>
                        </path>
                        <path
                            d=""
                            fill="url(#lg-0.047955344060927496)"
                            opacity="0.4"
                        >
                            <animate
                                attributeName="d"
                                dur="33.333333333333336s"
                                repeatCount="indefinite"
                                keyTimes="0;0.333;0.667;1"
                                calcmod="spline"
                                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                                begin="-13.333333333333334s"
                                values="M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z;M0 0L 0 821.0401780336218Q 320 670.8690783540507  640 637.0744123031742T 1280 456.40745286432224T 1920 278.1294357804296L 1920 0 Z;M0 0L 0 744.0534225112256Q 320 637.6425395409125  640 593.2079605185819T 1280 457.03995196824286T 1920 254.87693899994804L 1920 0 Z;M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z"
                            ></animate>
                        </path>
                        <path
                            d=""
                            fill="url(#lg-0.047955344060927496)"
                            opacity="0.4"
                        >
                            <animate
                                attributeName="d"
                                dur="33.333333333333336s"
                                repeatCount="indefinite"
                                keyTimes="0;0.333;0.667;1"
                                calcmod="spline"
                                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                                begin="-20s"
                                values="M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z;M0 0L 0 802.0504889976935Q 320 561.3963273210122  640 537.6024084387631T 1280 430.41283267566695T 1920 256.1972069733954L 1920 0 Z;M0 0L 0 789.4448177495887Q 320 561.9675446430498  640 531.6192318019404T 1280 414.76018143244175T 1920 265.9163329632971L 1920 0 Z;M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z"
                            ></animate>
                        </path>
                        <path
                            d=""
                            fill="url(#lg-0.047955344060927496)"
                            opacity="0.4"
                        >
                            <animate
                                attributeName="d"
                                dur="33.333333333333336s"
                                repeatCount="indefinite"
                                keyTimes="0;0.333;0.667;1"
                                calcmod="spline"
                                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                                begin="-26.666666666666668s"
                                values="M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z;M0 0L 0 871.4928294956283Q 320 618.9784567388518  640 593.1183717103518T 1280 376.5051942642811T 1920 141.32293927545027L 1920 0 Z;M0 0L 0 782.0118384610068Q 320 727.3267836497654  640 694.0476176759635T 1280 518.1545471640493T 1920 276.0053882957168L 1920 0 Z;M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z"
                            ></animate>
                        </path>
                    </g>
                </svg>

                <div class="container mx-auto px-6 md:px-12 xl:px-32">
                    <div class="text-center text-gray-800">
                        <div
                            class="block rounded-lg shadow-xl px-6 py-10 md:py-12 md:px-10"
                            style={{
                                "margin-top": "180px",
                                "background-color": "hsla(0, 0%, 100%, 0.8)",
                                "backdrop-filter": "saturate(200%) blur(8px)",
                            }}
                        >
                            <h3 class="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight mb-6">
                                Zdobądz Przewage dzięki <br />
                                <strong class="text-amber-500 mt-1 lg:drop-shadow-md">
                                    Stronie Internetowej
                                </strong>
                            </h3>
                            <Link
                                to="/projekty"
                                class="btnOrange mr-4"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                role="button"
                            >
                                Projekty
                            </Link>
                            <Link
                                to="/kontakt"
                                class="inline-block px-7 py-3 font-semibold text-sm bg-transparent text-gray-900 leading-tight uppercase rounded hover:text-gray-700 hover:bg-gray-100 focus:bg-gray-100 hover:shadow-md focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-200"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                role="button"
                            >
                                Kontakt &#8594;
                            </Link>
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
