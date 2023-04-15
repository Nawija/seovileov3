import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const QandAComponent = () => {
    return (
        <section className="text-gray-100 flex flex-col lg:flex-row items-center justify-center px-4 pt-8 md:pt-12 relative mx-auto max-w-screen-xl w-full">
            <div className="flex flex-col items-center justify-center w-[95%] sm:w-[80%] md:w-[60%] lg:w-1/2">
                <Link
                    to="poradnik/#seo"
                    className="group mb-2 flex items-center px-2 mx-auto bg-white w-[19rem] rounded-xl
                shadow-lg hover:shadow-amber-700 transition-all duration-300 shadow-blue-400"
                >
                    <div className="text-white group-hover:scale-110 group-hover:-translate-y-3 bg-gradient-to-tl from-yellow-400 to-amber-600 py-2 px-4 rounded-full w-10 h-10 -tracking-wide shadow-lg group-hover:shadow-xl group-hover:shadow-amber-700 transition-all duration-300 shadow-amber-600 text-base">
                        Q
                    </div>
                    <h5 className="text-gray-700 group-hover:text-emerald-800 ml-2 font-bold transition-all duration-500">
                        Co to jest SEO?
                    </h5>
                </Link>

                <Link
                    to="poradnik/#hosting"
                    className="group mb-2 flex items-center px-2 mx-auto bg-white w-[18.5rem] rounded-xl
                shadow-lg hover:shadow-amber-700 transition-all duration-300 shadow-blue-400"
                >
                    <div className="text-white group-hover:scale-110 group-hover:-translate-y-3 bg-gradient-to-tl from-yellow-400 to-amber-600 py-2 px-4 rounded-full w-10 h-10 -tracking-wide shadow-lg group-hover:shadow-xl group-hover:shadow-amber-700 transition-all duration-300 shadow-amber-600 text-base">
                        Q
                    </div>
                    <h5 className="text-gray-700 group-hover:text-emerald-800 ml-2 font-bold transition-all duration-500">
                        Czym Jest Hosting?
                    </h5>
                </Link>

                <Link
                    to="poradnik/#domena"
                    className="group mb-2 flex items-center px-2 mx-auto bg-white w-[19rem] rounded-xl
                shadow-lg hover:shadow-amber-700 transition-all duration-300 shadow-blue-400"
                >
                    <div className="text-white group-hover:scale-110 group-hover:-translate-y-3 bg-gradient-to-tl from-yellow-400 to-amber-600 py-2 px-4 rounded-full w-10 h-10 -tracking-wide shadow-lg group-hover:shadow-xl group-hover:shadow-amber-700 transition-all duration-300 shadow-amber-600 text-base">
                        Q
                    </div>
                    <h5 className="text-gray-700 group-hover:text-emerald-800 ml-2 font-bold transition-all duration-500">
                        Co To Jest Domena?
                    </h5>
                </Link>

                <Link
                    to="poradnik/#onepage"
                    className="group mb-2 flex items-center px-2 mx-auto bg-white w-[19rem] rounded-xl
                shadow-lg hover:shadow-amber-700 transition-all duration-300 shadow-blue-400"
                >
                    <div className="text-white group-hover:scale-110 group-hover:-translate-y-3 bg-gradient-to-tl from-yellow-400 to-amber-600 py-2 px-4 rounded-full w-10 h-10 -tracking-wide shadow-lg group-hover:shadow-xl group-hover:shadow-amber-700 transition-all duration-300 shadow-amber-600 text-base">
                        Q
                    </div>
                    <h5 className="text-gray-700 group-hover:text-emerald-800 ml-2 font-bold transition-all duration-500">
                        Co to Strona One Page?
                    </h5>
                </Link>

                <Link
                    to="poradnik/#multipage"
                    className="group mb-2 flex items-center px-2 mx-auto bg-white w-[19rem] rounded-xl
                shadow-lg hover:shadow-amber-700 transition-all duration-300 shadow-blue-400"
                >
                    <div className="text-white group-hover:scale-110 group-hover:-translate-y-3 bg-gradient-to-tl from-yellow-400 to-amber-600 py-2 px-4 rounded-full w-10 h-10 -tracking-wide shadow-lg group-hover:shadow-xl group-hover:shadow-amber-700 transition-all duration-300 shadow-amber-600 text-base">
                        Q
                    </div>
                    <h5 className="text-gray-700 group-hover:text-emerald-800 ml-2 font-bold transition-all duration-500">
                        Co to Strona Multi Page?
                    </h5>
                </Link>

                <Link
                    to="poradnik/#hosting"
                    className="group mb-2 flex items-center px-2 mx-auto bg-white w-[19rem] rounded-xl
                shadow-lg hover:shadow-amber-700 transition-all duration-300 shadow-blue-400"
                >
                    <div className="text-white group-hover:scale-110 group-hover:-translate-y-3 bg-gradient-to-tl from-yellow-400 to-amber-600 py-2 px-4 rounded-full w-10 h-10 -tracking-wide shadow-lg group-hover:shadow-xl group-hover:shadow-amber-700 transition-all duration-300 shadow-amber-600 text-base">
                        Q
                    </div>
                    <h5 className="text-gray-700 group-hover:text-emerald-800 ml-2 font-bold transition-all duration-500">
                        Co to Strona Multi Page?
                    </h5>
                </Link>
                <Link
                    to="poradnik/#hosting"
                    className="group mb-2 flex items-center px-2 mx-auto bg-white w-[19rem] rounded-xl
                shadow-lg hover:shadow-amber-700 transition-all duration-300 shadow-blue-400"
                >
                    <div className="text-white group-hover:scale-110 group-hover:-translate-y-3 bg-gradient-to-tl from-yellow-400 to-amber-600 py-2 px-4 rounded-full w-10 h-10 -tracking-wide shadow-lg group-hover:shadow-xl group-hover:shadow-amber-700 transition-all duration-300 shadow-amber-600 text-base">
                        Q
                    </div>
                    <h5 className="text-gray-700 group-hover:text-emerald-800 ml-2 font-bold transition-all duration-500">
                        Co To Jest Responsywna Strona?
                    </h5>
                </Link>
                <Link
                    to="poradnik/#hosting"
                    className="group mb-2 flex items-center px-2 mx-auto bg-white w-[19rem] rounded-xl
                shadow-lg hover:shadow-amber-700 transition-all duration-300 shadow-blue-400"
                >
                    <div className="text-white group-hover:scale-110 group-hover:-translate-y-3 bg-gradient-to-tl from-yellow-400 to-amber-600 py-2 px-4 rounded-full w-10 h-10 -tracking-wide shadow-lg group-hover:shadow-xl group-hover:shadow-amber-700 transition-all duration-300 shadow-amber-600 text-base">
                        Q
                    </div>
                    <h5 className="text-gray-700 group-hover:text-emerald-800 ml-2 font-bold transition-all duration-500">
                        Czym Jest Design?
                    </h5>
                </Link>
            </div>
            <div className="w-full lg:w-1/2 mt-6">
                <StaticImage
                    className="w-full h-full rounded-2xl"
                    src="https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                />
            </div>
        </section>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsPoradnik(sort: { id: ASC }) {
            edges {
                node {
                    hook
                    naglowek
                    opis
                    img {
                        alt
                        gatsbyImageData
                    }
                    order
                }
            }
        }
    }
`;

export default QandAComponent;
