import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { Link } from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <div className="h-[90vh] flex items-center justify-center flex-col text-gray-700">
        <p className="text-3xl capitalize font-semibold">Strona w budowie</p>
        <p className="text-3xl capitalize mb-6 font-semibold">zapraszamy pózniej</p>
        <Link to="/" className="py-3 text-gray-100 m-0 px-5 bg-gradient-to-tl from-red-500 to-red-700 rounded-lg shadow-lg shadow-red-500">
            Strona Główna
        </Link>
        </div>
    </Layout>
);

export const Head = () => <Seo title="Upss 404: Bład Ładowania Strony" />;

export default NotFoundPage;
