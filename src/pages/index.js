import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import {
    HeroCompon,
    CardsHeroCompon,
    SpeedTestCompon,
    ServicesCompon,
    ProjectsCompon,
    MediaCompon,
    QACompon,
} from "../components/index";

const IndexPage = () => {
    return (
        <Layout>
            <HeroCompon />
            <CardsHeroCompon />
            <SpeedTestCompon />
            <ServicesCompon />
            <ProjectsCompon />
            <MediaCompon />
            <QACompon />
        </Layout>
    );
};

export const Head = () => <Seo title="Strony Internetowe" />;
export default IndexPage;
