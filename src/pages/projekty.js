import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = ({ data }) => {
    const { allDatoCmsPortfolio } = data;

    return (
        <Layout>
            <div className="overflow-hidden w-full z-10">
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
                        fill="#f1f1f1"
                    />
                </svg>
                <div className="absolute w-full h-full top-0 left-0 bg-gray-900/80" />
            </div>

                <section class="container -mt-24 lg:-mt-32 px-2 mx-auto">
                    <section class=" mb-6 md:mb-12 text-gray-800">
                        <div class="container mx-auto xl:px-32 text-center lg:text-left">
                            <div class="flex flex-col lg:flex-row items-center lg:items-start">
                                <div>
                                    <StaticImage
                                        className="h-72 w-72 xl:py-64 xl:px-64 rounded-lg shadow-lg"
                                        src="https://images.unsplash.com/photo-1598121210875-08d6cf351459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                        alt="projekt strona internetowa"
                                    />
                                </div>
                                <div class="mb-6 lg:mb-0 pl-4">
                                    <div class=" block lg:mt-12 rounded-lg py-4 lg:py-12 md:px-12 lg:-mr-14 text-start">
                                        <h1 class="text-3xl font-bold pb-2">
                                            Projekty Stron Internetowych
                                        </h1>
                                        <p class="text-gray-700 text-start mb-4 pb-2">
                                            Freelancer, który tworzy strony
                                            internetowe, to specjalista z
                                            doświadczeniem w projektowaniu i
                                            tworzeniu różnego rodzaju witryn
                                            internetowych. Tutaj znajdziesz i
                                            zobaczysz "Live" projekty, które
                                            zostały wykonane przeze mnie, które
                                            są prezentowane w pełni
                                            funkcjonalnej formie. Dzięki temu
                                            możesz nie tylko zobaczyć, jak
                                            wyglądają projekty, ale także
                                            przetestować ich funkcjonalność i
                                            interaktywność.
                                        </p>
                                        <p class="text-gray-700 text-start mb-4 pb-2">
                                            Oglądając te projekty, możesz
                                            znaleźć inspirację dla swojego
                                            własnego projektu lub po prostu
                                            podziwiać kreatywność i umiejętności
                                            tych specjalistów. Każdy projekt
                                            jest inny i unikalny, z
                                            uwzględnieniem potrzeb i wymagań
                                            klienta oraz specyfikacji
                                            technicznej.
                                        </p>

                                        <Link
                                            to="/projekty"
                                            type="button"
                                            className="btn my-1 mr-4"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Projekty
                                        </Link>

                                        <button
                                            type="button"
                                            className="btnOrange my-1"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Kontakt
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="mt-2 mb-16 max-w-screen-xl mx-auto">
                    <p className="ml-4 lg:ml-[10vw] mb-4">Wiecej Projektów:</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 xl:ml-32">
                        {allDatoCmsPortfolio.edges.map(({ node }) => (
                            <div className="flex mx-6 flex-col md:flex-row items-start gap-4 lg:gap-6">
                                <Link
                                    to={`/` + node.slug}
                                    className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                                >
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.img.alt}
                                    />
                                </Link>

                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm">
                                        {node.date}
                                    </span>

                                    <h2 className="text-gray-800 w-full md:w-[70%] text-xl font-bold">
                                        <Link
                                            to={`/` + node.slug}
                                            className="hoverLink active:text-gray-900 transition duration-100"
                                        >
                                            {node.naglowek}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-500 w-full md:w-[70%]">
                                        {node.krotkiTekst}
                                    </p>

                                    <div>
                                        <Link
                                            to={`/` + node.slug}
                                            className="linkColor hoverLink active:text-gray-900 font-semibold transition duration-100"
                                        >
                                            Zobacz
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsPortfolio(sort: { data: DESC }) {
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
