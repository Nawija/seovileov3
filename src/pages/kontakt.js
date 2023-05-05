import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import LiveBackground from "../components/liveBackground";

const Kontakt = () => (
    <Layout>
        <div className="relative flex items-center justify-center w-full ">
            <LiveBackground />
            <div className="relative w-full -z-20">
                <StaticImage
                    className="h-40 lg:h-52 xl:h-56 w-full md:w-full"
                    quality={100}
                    src="../assets/hero.png"
                    loading="eager"
                    alt="Seovileo Strony internetowe"
                    placeholder="blurred"
                />
                <svg
                    className="absolute -bottom-3 left-0 z-10"
                    width="2004"
                    height="154"
                    viewBox="0 0 2004 154"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 37.9955C0 37.9955 458.5 122.495 1002 37.9955C1545.5 -46.5045 2004 37.9955 2004 37.9955V153.996H0V37.9955Z"
                        fill="#f8f8f8"
                    />
                </svg>
                <div className="absolute w-full h-full top-0 left-0 bg-gray-900/80" />
            </div>
        </div>

        <section className="flex flex-col lg:flex-row items-start justify-center max-w-screen-2xl mx-auto px-3">
            <div class="py-6 sm:py-8 lg:py-12 w-full lg:w-1/3 md:w-3/4 order-1">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div class="grid gap-8 lg:gap-12">
                        <div>
                            <div class="rounded-lg border p-4">
                                <h1 class="mb-3 text-lg font-bold text-gray-800 lg:text-xl">
                                    Seovileo - strony internetowe
                                </h1>

                                <div class="mb-0.5 flex items-center gap-2">
                                    <div class="-ml-1 flex gap-0.5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>

                                    <span class="text-sm font-semibold">
                                        5/5
                                    </span>
                                </div>

                                <span class="block text-sm text-gray-500">
                                    27 recenzji
                                </span>

                                <div class="my-5 flex flex-col gap-2 border-t border-b py-5">
                                    <div class="flex items-center gap-3">
                                        <span class="w-10 whitespace-nowrap text-right text-sm text-gray-600">
                                            5 Star
                                        </span>

                                        <div class="flex h-4 flex-1 overflow-hidden rounded bg-gray-200">
                                            <span class="h-full w-full rounded bg-yellow-400"></span>
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-3">
                                        <span class="w-10 whitespace-nowrap text-right text-sm text-gray-600">
                                            4 Star
                                        </span>

                                        <div class="flex h-4 flex-1 overflow-hidden rounded bg-gray-200">
                                            <span class="h-full w-[3%] rounded bg-yellow-400"></span>
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-3">
                                        <span class="w-10 whitespace-nowrap text-right text-sm text-gray-600">
                                            3 Star
                                        </span>

                                        <div class="flex h-4 flex-1 overflow-hidden rounded bg-gray-200">
                                            <span class="h-full w-0 rounded bg-yellow-400"></span>
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-3">
                                        <span class="w-10 whitespace-nowrap text-right text-sm text-gray-600">
                                            2 Star
                                        </span>

                                        <div class="flex h-4 flex-1 overflow-hidden rounded bg-gray-200">
                                            <span class="h-full w-0 rounded bg-yellow-400"></span>
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-3">
                                        <span class="w-10 whitespace-nowrap text-right text-sm text-gray-600">
                                            1 Star
                                        </span>

                                        <div class="flex h-4 flex-1 overflow-hidden rounded bg-gray-200">
                                            <span class="h-full w-0 rounded bg-yellow-400"></span>
                                        </div>
                                    </div>
                                </div>

                                <p class="block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base cursor-not-allowed">
                                    Napisz Opinię
                                </p>
                            </div>
                        </div>

                        <div>
                            <div class="border-b pb-4 md:pb-6">
                                <h2 class="text-lg font-bold text-gray-800 lg:text-xl">
                                    Najlepsze Opinie
                                </h2>
                            </div>

                            <div class="divide-y">
                                <div class="flex flex-col gap-3 py-4 md:py-8">
                                    <div>
                                        <span class="block text-sm font-bold">
                                            Pixel Piotr
                                        </span>
                                        <span class="block text-sm text-gray-500">
                                            Luty 23, 2023
                                        </span>
                                    </div>

                                    <div class="-ml-1 flex gap-0.5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>

                                    <p class="text-gray-600">
                                        Zakup strony internetowej był najlepszą
                                        decyzją, jaką mogłem podjąć dla mojego
                                        biznesu. Strona pomogła mi zwiększyć
                                        zasięg i sprzedaż produktów, a także
                                        zyskać nowych klientów.
                                    </p>
                                </div>

                                <div class="flex flex-col gap-3 py-4 md:py-8">
                                    <div>
                                        <span class="block text-sm font-bold">
                                            Net Ninja
                                        </span>
                                        <span class="block text-sm text-gray-500">
                                            Marzec 11, 2023
                                        </span>
                                    </div>

                                    <div class="-ml-1 flex gap-0.5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>

                                    <p class="text-gray-600">
                                        Zamówienie strony internetowej było
                                        bardzo proste i bezproblemowe.
                                        Programista, z którą współpracowałem,
                                        zapewnił mi pełne wsparcie i pomoc na
                                        każdym etapie procesu.
                                    </p>
                                </div>

                                <div class="flex flex-col gap-3 py-4 md:py-8">
                                    <div>
                                        <span class="block text-sm font-bold">
                                            Katarzyna Zając
                                        </span>
                                        <span class="block text-sm text-gray-500">
                                            Kwiecień 18, 2023
                                        </span>
                                    </div>

                                    <div class="-ml-1 flex gap-0.5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>

                                    <p class="text-gray-600">
                                        Byłam bardzo zdziwionya, kiedy
                                        dowiedziałam się, że mogę zamówić
                                        profesjonalną stronę internetową za tak
                                        niską cenę. Przemyślałam, ale
                                        ostatecznie zdecydowałam się na to i
                                        byłam bardzo zadowolona z wykonanej
                                        pracy.
                                    </p>
                                </div>
                            </div>

                            <div class="border-t pt-6"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-gray-700 bg-gray-200 rounded-2xl lg:order-3 shadow-lg py-6 sm:py-8 lg:py-12 body-font relative w-full lg:w-1/2 mx-auto px-6">
                <div class="flex flex-col text-center w-full mb-12">
                    <h2 class="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
                        Kontakt
                    </h2>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Ze względu na charakter wykonywanej pracy proszę o
                        przesyłanie zgłoszeń w formie maila lub skorzystanie z
                        formularza kontaktowego
                    </p>
                    <Link
                        to="mailto:seovileo@email.com"
                        class="text-amber-500 w-max mx-auto"
                    >
                        seovileo@gmail.com
                    </Link>
                </div>
                <form
                    action="https://public.herotofu.com/v1/d1061fe0-e21a-11ed-8300-fd92f9e8911a"
                    method="post"
                    accept-charset="UTF-8"
                >
                    <div class="md:w-3/4 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label
                                        for="name"
                                        class="leading-7 text-sm text-gray-600"
                                    >
                                        Imię
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label
                                        for="email"
                                        class="leading-7 text-sm text-gray-600"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label
                                        for="message"
                                        class="leading-7 text-sm text-gray-600"
                                    >
                                        Wiadomość
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button class="flex mx-auto text-white bg-amber-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                                    Wyślij Wiadomość
                                </button>
                            </div>

                            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <span class="inline-flex">
                                    <Link
                                        to="https://www.facebook.com/seovileo/"
                                        class="text-gray-500"
                                    >
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </Link>
                                    <Link
                                        to="https://twitter.com/seovileo"
                                        class="ml-4 text-gray-500"
                                    >
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </Link>
                                    <Link
                                        to="https://www.instagram.com/seovileo/"
                                        class="ml-4 text-gray-500"
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <rect
                                                width="20"
                                                height="20"
                                                x="2"
                                                y="2"
                                                rx="5"
                                                ry="5"
                                            ></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </Link>
                                    <Link
                                        to="mailto:
seovileo@email.com"
                                        class="ml-4 text-gray-500"
                                    >
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </Layout>
);

export default Kontakt;
