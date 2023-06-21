import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import LiveBackground from "../liveBackground";

const ServicesCompon = () => {
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

    return (
        <section className="py-16 relative">
            <LiveBackground />
            <div className="absolute inset-0 -z-20 w-full h-full bg-gradient-to-t from-[#1f2d57] to-[#0C1530]" />

            <div
                className="absolute inset-0 -z-10 opacity-20 bg-fixed"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80)",
                }}
            ></div>

            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <h3 className="text-center sm:text-start text-xl md:text-2xl mb-4 text-amber-400 font-bold tracking-wide ">
                    Usługi
                </h3>
                <div className="flex flex-col sm:flex-row mb-12 justify-between gap-8 items-center">
                    <p className="max-w-screen-sm text-center sm:text-start text-gray-200 lg:text-base">
                        Oferuję szeroki zakres usług związanych z projektowaniem
                        i tworzeniem szybkich stron internetowych
                    </p>
                </div>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:mb-8 xl:grid-cols-4 md:gap-6 xl:gap-8">
                    {data.allDatoCmsUsluga.edges.map(({ node }) => (
                        <Link
                            to={node.slug}
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
                            <p className="font-medium text-sm">{node.desc}</p>
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
    );
};

export default ServicesCompon;
