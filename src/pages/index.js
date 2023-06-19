import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import {
    Hero,
    CardsHero,
    SpeedTest,
    Services,
    Projects,
    Media,
    Question,
} from "../components/index/index";

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <CardsHero />
            <SpeedTest />
            <Services />
            <Projects />
            <Media />
            <Question />
        </Layout>
    );
};

export const Head = () => <Seo title="Strony Internetowe" />;
export default IndexPage;
