import React from "react";
import { StaticImage } from "gatsby-plugin-image";
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

    return (
        <Layout>
            <HeroLinks />
            <section className="relative">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <h3 className="text-center sm:text-start text-xl md:text-2xl mb-4 text-amber-600 font-bold tracking-wide ">
                        Usługi
                    </h3>
                    <div className="flex flex-col sm:flex-row mb-12 justify-between gap-8 items-center">
                        <p className="max-w-screen-sm text-center sm:text-start text-gray-900 lg:text-base">
                            Oferuję szeroki zakres usług związanych z
                            projektowaniem i tworzeniem szybkich stron
                            internetowych
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
        </Layout>
    );
};

export const Head = () => (
    <Seo title="Usługi Seovileo - Strony Seo Logo Design" />
);

export default Usługi;
