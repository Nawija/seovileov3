import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroLinks from "../components/HeroLinks";

const ProjectPage = ({ data }) => {
    const { allDatoCmsProjekty } = data;

    return (
        <Layout>
            <HeroLinks />
            <section className="max-w-screen-xl mx-auto -mt-10">
                <p className="title">Projekty</p>

                <div className="grid grid-cols-2 text-center gap-2">
                    {allDatoCmsProjekty.edges.map(({ node }) => (
                        <div className="relative">
                            <div className="relative">
                                <GatsbyImage
                                    className=""
                                    image={getImage(node.img)}
                                    alt={node.title}
                                />
                                <p className="absolute top-3 left-4 text-[12px] font-medium text-gray-700">{node.data}</p>
                            </div>
                            <p>{node.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query {
        allDatoCmsProjekty(sort: { data: DESC }) {
            edges {
                node {
                    img {
                        gatsbyImageData(
                            placeholder: NONE
                            height: 260
                            width: 260
                            forceBlurhash: false
                            aspectRatio: 1.5
                        )
                    }
                    data
                    sdesc
                    link
                    title
                    slug
                }
            }
        }
    }
`;

export const Head = () => (
    <Seo
        title="Strona wwww projekty - seovileo.pl"
        siteUrl="https://seovileo.pl/projekty"
    />
);

export default ProjectPage;
