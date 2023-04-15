import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { Link } from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <div className="h-[50vh] flex items-center justify-center flex-col text-gray-700">
        <p className="text-3xl capitalize font-semibold mb-6">Panel Admin:</p>
        <Link to="https://seovileo.admin.datocms.com/editor" className="py-3 text-gray-100 m-0 px-5 bg-gradient-to-tl from-red-500 to-red-700 hover:shadow-red-700 transition-all duration-200 rounded-lg shadow-lg shadow-red-500">
            DatoCMS
        </Link>
        </div>
    </Layout>
);

export const Head = () => <Seo title="Upss 404: Bład Ładowania Strony" />;

export default NotFoundPage;
