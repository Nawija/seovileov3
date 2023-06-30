import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../../styles/template.css";

const Question = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsQa(sort: { position: ASC }) {
                edges {
                    node {
                        title
                        description
                    }
                }
            }
        }
    `);

    return (
        <div class="bg-sky-50 py-8 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                <div class="mb-8 md:mb-10">
                    <h2 class="mb-4 text-center text-2xl font-semibold bg-gradient-to-t from-amber-400 to-amber-200 shadow-amber-500 shadow-lg py-2 px-4 w-max mx-auto text-gray-700 md:mb-6 lg:text-3xl rounded-lg">
                        Najczęściej zadawanie pytania
                    </h2>

                    <p class="mx-auto max-w-screen-md text-center text-gray-800">
                        Masz pytania? Mamy odpowiedzi! Nie trać czasu na
                        przeszukiwanie internetu w poszukiwaniu informacji
                        znajdź wszystkie potrzebne odpowiedzi poniżej
                    </p>
                </div>
                <div class="flex flex-wrap justify-center items-start mx-auto">
                    {data.allDatoCmsQa.edges.map(({ node }) => (
                        <div class="flex flex-col sm:flex-row items-start justify-start w-full sm:w-1/2 p-4">
                            <div class="flex-grow flex-shrink rounded-lg bg-white drop-shadow-lg p-5 mb-4 sm:mb-0">
                                <div class="flex items-center justify-between gap-4 pb-4 border-b">
                                    <h2 class="font-semibold text-sky-800 sm:text-lg md:text-xl">
                                        {node.title}
                                    </h2>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-t from-amber-500 to-amber-300 shadow-amber-600 shadow-lg text-gray-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div
                                    id="descHtml"
                                    dangerouslySetInnerHTML={{
                                        __html: node.description,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Question;
