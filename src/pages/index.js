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

            <section id="projects" className="-mt-8 lg:-mt-4 mb-6 md:mb-16">
                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                            Projekty
                        </h2>

                        <p className="max-w-screen-md text-gray-500 w-[90%] md:text-lg text-center mx-auto">
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
                                        alt={node.img.alt || "Facades"}
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

                                    <p className="text-gray-500 w-[93%] lg:w-[70%]">
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
                        className="text-center btn my-6 sm:my-10 xl:mt-20 xl:mb-8"
                        to="/projekty"
                    >
                        Więcej Projektów
                    </Link>
                </div>
            </section>

            <section class="text-gray-900 body-font bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20 max-w-screen-lg mx-auto">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Zalety Naszych Stron Internetowych
                            </h2>
                            <div class="h-1 w-20 bg-yellow-500 rounded"></div>
                        </div>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">
                            Whatever cardigan tote bag tumblr hexagon brooklyn
                            asymmetrical gentrify, subway tile poke
                            farm-to-table. Franzen you probably haven't heard of
                            them man bun deep jianbing selfies heirloom prism
                            food truck ugh squid celiac humblebrag.
                        </p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 shadow-lg p-6 rounded-lg">
                                <StaticImage
                                    class="h-40 rounded w-full object-cover object-center mb-6"
                                    src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                    alt="content"
                                />
                                <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">
                                    SUBTITLE
                                </h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                                    Chichen Itza
                                </h2>
                                <p class="leading-relaxed text-base">
                                    Fingerstache flexitarian street art 8-bit
                                    waistcoat. Distillery hexagon disrupt edison
                                    bulbche.
                                </p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 shadow-lg p-6 rounded-lg">
                                <StaticImage
                                    class="h-40 rounded w-full object-cover object-center mb-6"
                                    src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                    alt="content"
                                />
                                <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">
                                    SUBTITLE
                                </h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                                    Colosseum Roma
                                </h2>
                                <p class="leading-relaxed text-base">
                                    Fingerstache flexitarian street art 8-bit
                                    waistcoat. Distillery hexagon disrupt edison
                                    bulbche.
                                </p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 shadow-lg p-6 rounded-lg">
                                <StaticImage
                                    class="h-40 rounded w-full object-cover object-center mb-6"
                                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                    alt="content"
                                />
                                <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">
                                    SUBTITLE
                                </h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                                    Great Pyramid of Giza
                                </h2>
                                <p class="leading-relaxed text-base">
                                    Fingerstache flexitarian street art 8-bit
                                    waistcoat. Distillery hexagon disrupt edison
                                    bulbche.
                                </p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 shadow-lg p-6 rounded-lg">
                                <StaticImage
                                    class="h-40 rounded w-full object-cover object-center mb-6"
                                    src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                                    alt="content"
                                />
                                <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">
                                    SUBTITLE
                                </h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                                    San Francisco
                                </h2>
                                <p class="leading-relaxed text-base">
                                    Fingerstache flexitarian street art 8-bit
                                    waistcoat. Distillery hexagon disrupt edison
                                    bulbche.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="text-gray-900 body-font mx-auto">
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

            <section class="text-gray-900 bg-white body-font mx-auto">
                <div class="container max-w-screen-xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="order-1 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center">
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

            <section class="text-gray-900 body-font mx-auto">
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

            <section class="text-gray-900 bg-white body-font">
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
                                <a class="text-yellow-500 inline-flex items-center">
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
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
