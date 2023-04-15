import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { Link } from "gatsby";

const Usługi = () => (
    <Layout>
        <div className="top-0 px-2 md:px-4 py-10 md:py-12 flex flex-col items-center justify-center text-center bg-gradient-to-tr from-green-100 to-green-200">
            <h1 className="text-xl capitalize md:text-2xl text-emerald-700 font-bold">
                Zamówienie strony internetowej
            </h1>
            <h2>
                Zobacz <strong className="font-medium">krok po kroku</strong>{" "}
                jak zamówic stronę internetową:
            </h2>
        </div>
        <div className="h-[40vh] flex items-center justify-center flex-col text-gray-700">
            <p className="text-3xl capitalize font-semibold">
                Strona w budowie
            </p>
            <p className="text-3xl capitalize mb-6 font-semibold">
                zapraszamy pózniej
            </p>
            <Link
                to="/"
                className="py-3 text-gray-100 m-0 px-5 bg-gradient-to-tl from-red-500 to-red-700 rounded-lg shadow-lg shadow-red-500"
            >
                Strona Główna
            </Link>
        </div>
    </Layout>
);

export const Head = () => (
    <Seo title="Strona Internetowa, Grafika Komputerowa, Seo" />
);

export default Usługi;
