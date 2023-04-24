import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import LiveBackground from "../liveBackground";

const ServicesCompon = () => {
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
        <section class="md:-mt-24 -mt-12  pb-24 pt-16 lg:py-48 relative ">
            <svg
                className="absolute w-full -top-1 left-0 z-10"
                viewBox="0 0 2004 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className=" fill-[#1f2937] lg:fill-[#f8f8f8]"
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
                    fill="#f8f8f8"
                />
            </svg>

            <LiveBackground />
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
                        Oferuję szeroki zakres usług związanych z projektowaniem
                        i tworzeniem szybkich stron internetowych
                    </p>
                </div>
                <div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-8 xl:grid-cols-4 md:gap-6 xl:gap-8">
                    {data.allDatoCmsUslugi.edges.map(({ node }) => (
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
    );
};

export default ServicesCompon;
