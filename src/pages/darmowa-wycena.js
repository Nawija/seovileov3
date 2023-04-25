import React, { useState } from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const CalcPrice = () => {
    const initialValues = Array.from({ length: 8 }, () => null);
    const [values, setValues] = useState(initialValues);


    const totalValue = values.reduce((acc, cur) => acc + cur, 0);

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        const index = parseInt(name);
        const newValues = [...values];
        newValues[index] = parseInt(value);
        setValues(newValues);
    };

    return (
        <Layout>
            <section className="relative flex items-center justify-center w-full ">
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
            </section>
            <form
                className="p-6 bg-gray-200 w-[90%] sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto rounded-xl mb-12 md:mb-2 -mt-12 md:-mt-4 lg:mb-24"
                action="https://public.herotofu.com/v1/d1061fe0-e21a-11ed-8300-fd92f9e8911a"
                method="post"
                accept-charset="UTF-8"
            >
                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">
                        Typ strony internetowej *
                    </p>
                    <div className="ml-2 py-2">
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q1"
                                name="0"
                                value="1200"
                                checked={values[0] === 1200}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q1">Multi Page</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q2"
                                name="0"
                                value="900"
                                checked={values[0] === 900}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q2">Landing Page</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q3"
                                name="0"
                                value="700"
                                checked={values[0] === 700}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q3">Blog</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t1">
                        Opisz swoją firmę
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-xl"
                        type="text"
                        id="t1"
                        name="OpisFirmy"
                    />
                </div>

                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t2">
                        Zakres usług
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-xl"
                        type="text"
                        id="t2"
                        name="ZakresUsług"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                        Opisz zakres usług jakie wykonuje Twoja firma, ma to
                        również wpływ na ilość podstron.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t3">
                        Opisz konkurencję
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-xl"
                        type="text"
                        id="t3"
                        name="Konkurencja"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                        Możesz opisać konkurencję lub załączyć linki do ich
                        stron internetowych.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t4">
                        Posiadasz identyfikację wizualną firmy?
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-xl"
                        type="text"
                        id="t4"
                        name="IdentyfikacjaFirmy"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                        Opisz czy posiadasz kolory firmowe, logo lub wykonane
                        grafiki jak wizytówki czy grafiki socialmedia. Będzie to
                        miało wpływ na ujednolicenie strony z Twoją marką.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t5">
                        Wygląd strony - Inspirację
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-xl"
                        type="text"
                        id="t5"
                        placeholder="Pomoze okreslic oczekiwania wzgledem wygladu strony internetowej"
                        name="Inspiracja"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                        Jeżeli istnieją strony, które Ci się podobają to załącz
                        powyżej linki do nich lub skorzystaj z takich źródeł
                        inspiracji jak{" "}
                        <Link
                            className="text-gray-700 underline"
                            to="https://pl.pinterest.com/search/pins/?q=web%20design&rs=typed"
                        >
                            pinterest.com
                        </Link>
                    </p>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">Posiadasz domenę?</p>
                    <div className="ml-2 py-2">
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q4"
                                name="1"
                                value="0"
                                checked={values[1] === 0}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q4">Tak</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q5"
                                name="1"
                                value="50"
                                checked={values[1] === 50}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q5">Nie</label>
                        </div>
                    </div>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">Posiadasz Hosting?</p>
                    <div className="ml-2 py-2">
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q6"
                                name="2"
                                value="0"
                            />
                            <label htmlFor="q6">Tak</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q7"
                                name="2"
                                value="0"
                            />
                            <label htmlFor="q7">Nie</label>
                        </div>
                    </div>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">
                        Ile podstron ma posiadać strona internetowa? *
                    </p>
                    <div className="ml-2 py-2">
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q8"
                                name="3"
                                value="0"
                                checked={values[3] === 0}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q8">1-3 podstron</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q9"
                                name="3"
                                value="200"
                                checked={values[3] === 200}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q9">4-6 podstron</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q10"
                                name="3"
                                value="400"
                                checked={values[3] === 400}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q10">7-9 podstron</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                id="q11"
                                name="3"
                                value="600"
                                checked={values[3] === 600}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q11">Więcej</label>
                        </div>
                        <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                            Możesz to wywnioskować z pola "Zakres Usług". Każda
                            usługa powinna posiadać podstronę. W przypadku
                            wyboru "Więcej" Wycena zostanie ustalona
                            indywidualnie.
                        </p>
                    </div>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">Funkcjonalności</p>
                    <div className="ml-2 py-2">
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                id="q12"
                                name="4"
                                value="50"
                                checked={values[4] === 50}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q12">Sekcja Blog</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                id="q13"
                                name="5"
                                value="50"
                                checked={values[5] === 50}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q13">Sekcja Newsy</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                id="q14"
                                name="Funkcjonalność"
                            />
                            <label htmlFor="q14">Formularze kontaktowe</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                id="q15"
                                name="6"
                                value="100"
                                checked={values[6] === 100}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q15">Mapa Google Maps</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                id="q16"
                                name="7"
                                value="400"
                                checked={values[7] === 400}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q16">Kalkulator wyceny</label>
                        </div>
                        <div>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                id="q17"
                                name="8"
                                value="200"
                                checked={values[8] === 200}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="q17">Chat Online</label>
                        </div>
                    </div>
                    <div className="mb-2 mt-2">
                        <p className="font-semibold mb-1">
                            Kto dostarczy treści? *
                        </p>
                        <div className="ml-2 py-2">
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="q18"
                                    name="treści"
                                />
                                <label htmlFor="q18">Zleceniodawca (Ty)</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="q19"
                                    name="treści"
                                />
                                <label htmlFor="q19">Wykonawca</label>
                            </div>
                            <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                                W przypadku wyboru wykonawcy, cena napisania
                                tekstów jest wyceniana indywidualnie.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-1 mt-8 md:mt-16">
                    <p className="font-bold w-28 md:text-xl text-emerald-700">
                        Cena: {totalValue}
                    </p>
                    <button className="inline-block px-3 md:px-7 py-3 bgLogoColor text-white font-medium text-sm leading-snug uppercase rounded bg-gradient-to-tr from-gray-900 to-gray-700 shadow-gray-900 hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-200 ease-in-out;">
                        Wyślij Zapytanie
                    </button>
                </div>
            </form>
        </Layout>
    );
};
export default CalcPrice;
