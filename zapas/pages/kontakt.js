import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { Link } from "gatsby";

const Kontakt = () => {
    return (
        <Layout>
            <div className="top-0 px-2 md:px-4 py-10 md:py-12 flex flex-col items-center justify-center text-center bg-gradient-to-tr from-green-100 to-green-200">
                    <h1 className="text-xl capitalize md:text-2xl text-emerald-700 font-bold">
                        Zamówienie strony internetowej
                    </h1>
                    <h2>
                        Zobacz{" "}
                        <strong className="font-medium">krok po kroku</strong>{" "}
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
            {/* <section>
                <div class="text-black py-24 lg:pt-36">
                    <div class="max-w-screen-2xl flex flex-col items-center justify-center lg:flex-row lg:items-start px-4 md:px-8 mx-auto">
                        <div class="mb-10 md:mb-16 flex flex-col items-center justify-center">
                            <h2 class="text-2xl lg:text-3xl changeColor font-semibold text-center mb-4 md:mb-6">
                                Formularz Kontaktowy
                            </h2>

                            <p class="max-w-screen-md w text-white w-4/5 md:text-lg text-center mx-auto">
                                {" "}
                                Skorzystaj z naszego formularza kontaktowego,
                                aby wysłać do nas wiadomość. Prosimy o podanie
                                swoich danych kontaktowych oraz treści
                                wiadomości, a my postaramy się odpowiedzieć na
                                nią jak najszybciej. Jesteśmy do Twojej
                                dyspozycji i z przyjemnością odpowiemy na
                                wszystkie Twoje pytania.
                            </p>
                            <div className="h-auto w-[30rem] mt-24 hidden lg:flex">
                            <StaticImage layout="fullWidth" src="../assets/responsMonitors.png" alt="Wyglad na 3 różnych monitorach" className="h-full w-full" />
                            </div>
                        </div>
                        <div className="bg-zinc-800 p-4 lg:mx-6 lg:p-6 rounded-xl changeShadow">
                            <form
                                action="https://formsubmit.io/send/seovileo@gmail.com"
                                method="POST"
                                class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
                            >
                                <div>
                                    <input
                                        name="_redirect"
                                        type="hidden"
                                        id="name"
                                        value="https://seovileo.pl/dziekujemy/"
                                    />

                                    <label
                                        htmlFor="first-name"
                                        for="first-name"
                                        className="inline-block text-zinc-300  text-sm sm:text-base mb-2"
                                    >
                                        Imię
                                    </label>
                                    <input
                                        name="first-name"
                                        placeholder="Imię"
                                        className="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="last-name"
                                        for="last-name"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Nazwisko
                                    </label>
                                    <input
                                        name="last-name"
                                        placeholder="Nazwisko"
                                        className="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        for="email"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
                                        placeholder="email@seovileo.pl"
                                        class="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        for="phone"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Tel
                                    </label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder="+48 521 521 500"
                                        pattern="[0-9+]{9,12}"
                                        required
                                        className="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="choosePlan"
                                        for="choosePlan"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Wybierz Plan
                                    </label>
                                    <Link
                                        class="text-amber-500 inline-block rounded-full ml-2 text-xs underline"
                                        to="/oferta"
                                    >
                                        Cennik
                                    </Link>
                                    <select
                                        name="choosePlan"
                                        className="w-full bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    >
                                        <option>Base</option>
                                        <option>Pro</option>
                                        <option>Special</option>
                                    </select>
                                </div>

                                <div class="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        for="message"
                                        className="inline-block text-zinc-300 text-sm sm:text-base mb-2"
                                    >
                                        Wiadomość
                                    </label>
                                    <textarea
                                        name="message"
                                        class="w-full h-64 bg-gray-50  border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
                                    ></textarea>
                                </div>

                                <div class="sm:col-span-2 flex justify-between items-center">
                                    <p class="text-gray-400 text-xs">
                                        Zapoznaj sie również z naszym{" "}
                                        <Link
                                            to="/regulamin"
                                            class="hover:text-amber-500 active:text-amber-600 underline transition duration-200 "
                                        >
                                            Regulaminem
                                        </Link>
                                        .
                                    </p>
                                    <button class="inline-block border-2 border-white bg-gray-800 hover:bg-gray-600 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-0 transition duration-200 hover:scale-95 px-8 py-3">
                                        Wyślij
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
        </Layout>
    );
};

export const Head = () => <Seo title="Kontakt" />;

export default Kontakt;
