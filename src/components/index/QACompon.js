import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const QACompon = () => {
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
        <div class="bg-slate-100 py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                <div class="mb-10 md:mb-16">
                    <h4 class="mb-4 text-center text-2xl font-semibold -tracking-wide text-emerald-900 md:mb-6 lg:text-3xl">
                        Najczęściej zadawanie pytania
                    </h4>

                    <p class="mx-auto max-w-screen-md text-center text-gray-800">
                        This is a section of some simple filler text, also known
                        as placeholder text. It shares some characteristics of a
                        real written text but is random or otherwise generated.
                    </p>
                </div>

                {/* <div class="grid gap-4 sm:grid-cols-2 md:gap-8"> */}
                <div class="flex flex-wrap justify-center items-start mx-auto">
                    {data.allDatoCmsQa.edges.map(({ node }) => (
                        <div class="flex flex-col sm:flex-row items-start justify-start w-full sm:w-1/2 p-4">
                            <div class="flex-grow flex-shrink rounded-lg bg-white drop-shadow-lg p-5 mb-4 sm:mb-0">
                                <div class="flex items-center justify-between gap-4 pb-4 border-b">
                                    <h3 class="font-semibold drop-shadow-lg text-lime-700 sm:text-lg md:text-xl">
                                        {node.title}
                                    </h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-700">
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

                                <p class="text-gray-700">{node.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QACompon;
