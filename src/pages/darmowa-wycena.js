import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroLinks from "../components/HeroLinks";

const CalcPrice = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsBlog(sort: { position: ASC }, limit: 5) {
                edges {
                    node {
                        img {
                            gatsbyImageData(
                                placeholder: NONE
                                height: 178
                                width: 600
                                forceBlurhash: false
                            )
                        }
                        desc
                        slug
                        sdesc
                        title
                    }
                }
            }
        }
    `);
    const initialValues = Array.from({ length: 9 }, () => null);
    const [values, setValues] = useState(initialValues);

    const totalValue = values.reduce((acc, cur) => acc + cur, 0);

    const handleRadioChange = (event) => {
        const { id, value } = event.target;
        const index = parseInt(id);
        const newValues = [...values];
        newValues[index] = parseInt(value);
        setValues(newValues);
    };

    const handleCheckboxChange = (event) => {
        const { id, value, checked } = event.target;
        const index = parseInt(id);
        const newValues = [...values];
        newValues[index] = checked ? parseInt(value) : null;
        setValues(newValues);
    };

    return (
        <Layout>
            <HeroLinks />
            <div className="flex flex-col items-center justify-center text-center -mt-10 mb-16 px-2">
                <h1 className="title">
                    Kalkulator wyceny strony internetowej{" "}
                </h1>
                <div className="text-sm pl-4 text-start w-[90%] sm:w-4/5 md:w-4/6 lg:w-full mx-auto max-w-screen-2xl lg:text-center">
                    <p className="mb-2 lg:mb-1 text-base text-gray-700">
                        Wycena strony internetowej Kalkulator wyceny strony
                        internetowej to narzędzie, które pozwala określić
                        wartość danej strony w internecie.{" "}
                    </p>
                    <p className="mb-2 lg:mb-1 text-base text-gray-700">
                        Istnieje wiele czynników, które wpływają na wycenę
                        strony, takich jak ilość unikalnych użytkowników, liczba
                        wyświetleń, czas spędzony na stronie oraz poziom
                        zaangażowania odwiedzających.
                    </p>{" "}
                    <p className="mb-2 lg:mb-1 text-base text-gray-700">
                        Warto jednak pamiętać, że wycena strony internetowej
                        powinna uwzględniać nie tylko aspekty związane z ilością
                        ruchu na stronie, ale także jej jakość oraz potencjał
                        biznesowy.
                    </p>
                    <p className="mb-2 lg:mb-1 text-base text-gray-700">
                        Dlatego ważne jest, aby zwrócić uwagę na takie czynniki,
                        jak jakość treści, łatwość nawigacji, responsywność
                        strony czy jej pozycjonowanie w wynikach wyszukiwania
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap items-start justify-center max-w-screen-2xl mx-auto">
                <form
                    className="p-6 bg-gray-200 w-[90%] sm:w-4/5 md:w-4/6 lg:w-[55%] rounded-xl mb-12 md:mb-2 -mt-12 md:-mt-4 lg:mb-24"
                    action="https://public.herotofu.com/v1/d1061fe0-e21a-11ed-8300-fd92f9e8911a"
                    method="post"
                    accept-charset="UTF-8"
                >
                    <div className="mb-2 mt-2">
                        <p className="font-semibold mb-1">
                            Typ strony internetowej
                        </p>
                        <div className="ml-2 py-2">
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="0"
                                    name="Multi Page"
                                    value="1200"
                                    checked={values[0] === 1200}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="0">Multi Page</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="0"
                                    name="Landing Page"
                                    value="900"
                                    checked={values[0] === 900}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="0">Landing Page</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="0"
                                    name="Blog"
                                    value="700"
                                    checked={values[0] === 700}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="0">Blog</label>
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
                            Opisz czy posiadasz kolory firmowe, logo lub
                            wykonane grafiki jak wizytówki czy grafiki
                            socialmedia. Będzie to miało wpływ na ujednolicenie
                            strony z Twoją marką.
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
                            placeholder="Pomoze okreslic wyglad strony internetowej"
                            name="Inspiracja"
                        />
                        <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                            Jeżeli istnieją strony, które Ci się podobają to
                            załącz powyżej linki do nich lub skorzystaj z takich
                            źródeł inspiracji jak{" "}
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
                                    id="1"
                                    name="Domena Tak"
                                    value="0"
                                    checked={values[1] === 0}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="1">Tak</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="1"
                                    name="Domena Nie"
                                    value="50"
                                    checked={values[1] === 50}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="1">Nie</label>
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
                                    id="2"
                                    name="Hosting Tak"
                                    value="0"
                                    checked={values[2] === 0}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="2">Tak</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="2"
                                    name="Hosting Nie"
                                    value="50"
                                    checked={values[2] === 50}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="2">Nie</label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-2 mt-2">
                        <p className="font-semibold mb-1">
                            Ile podstron ma posiadać strona internetowa?
                        </p>
                        <div className="ml-2 py-2">
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="3"
                                    name="1-3 podstron"
                                    value="0"
                                    checked={values[3] === 0}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="3">1-3 podstron</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="3"
                                    name="4-6 podstron"
                                    value="200"
                                    checked={values[3] === 200}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="3">4-6 podstron</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="3"
                                    name="7-9 podstron"
                                    value="400"
                                    checked={values[3] === 400}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="3">7-9 podstron</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    id="3"
                                    name="Więcej Stron 9+"
                                    value="600"
                                    checked={values[3] === 600}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor="3">Więcej</label>
                            </div>
                            <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                                Możesz to wywnioskować z pola "Zakres Usług".
                                Każda usługa powinna posiadać podstronę. W
                                przypadku wyboru "Więcej" Wycena zostanie
                                ustalona indywidualnie.
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
                                    id="4"
                                    name="Sekcja Blog"
                                    value="50"
                                    checked={values[4] === 50}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="4">Sekcja Blog</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    id="5"
                                    name="Sekcja Newsy"
                                    value="50"
                                    checked={values[5] === 50}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="5">Sekcja Newsy</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    id="q14"
                                    name="Formularze kontaktowe"
                                />
                                <label htmlFor="q14">
                                    Formularze kontaktowe
                                </label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    id="6"
                                    name="Mapa Google Maps"
                                    value="100"
                                    checked={values[6] === 100}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="6">Mapa Google Maps</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    id="7"
                                    name="Kalkulator wyceny"
                                    value="400"
                                    checked={values[7] === 400}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="7">Kalkulator wyceny</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    id="8"
                                    name="Chat Online"
                                    value="200"
                                    checked={values[8] === 200}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="8">Chat Online</label>
                            </div>
                            <div>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    id="inne"
                                    name="inne"
                                />
                                <label htmlFor="inne">Inne</label>
                            </div>
                        </div>
                        <div className="mb-2 mt-2">
                            <p className="font-semibold mb-1">
                                Kto dostarczy treści?
                            </p>
                            <div className="ml-2 py-2">
                                <div>
                                    <input
                                        className="mr-2 scale-110"
                                        type="radio"
                                        id="q18"
                                        name="Treści"
                                        value="Zleceniodawca (Ty)"
                                    />
                                    <label htmlFor="q18">Zleceniodawca</label>
                                </div>
                                <div>
                                    <input
                                        className="mr-2 scale-110"
                                        type="radio"
                                        id="q19"
                                        name="Treści"
                                        value="Wykonawca"
                                    />
                                    <label htmlFor="q19">Wykonawca</label>
                                </div>
                                <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                                    W przypadku wyboru wykonawcy, cena napisania
                                    tekstów jest wyceniana indywidualnie.
                                </p>
                                <div>
                                    <input
                                        checked
                                        className="mr-2 hidden"
                                        type="radio"
                                        id="totalValue"
                                        value={totalValue}
                                        name="SUMA WYCENY"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-1 mt-8 md:mt-16">
                        <p className="font-bold w-28 md:text-xl text-emerald-700">
                            Cena: {totalValue}
                        </p>
                        <button className="inline-block px-3 md:px-7 py-3 bgLogoColor text-white font-medium text-sm leading-snug uppercase rounded bg-gradient-to-tr from-gray-900 to-gray-700 shadow-gray-900 hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition ease-in-out;">
                            Wyślij Zapytanie
                        </button>
                    </div>
                </form>
                <div className="flex flex-col space-y-5 lg:ml-6 w-full sm:px-8 lg:px-0 md:w-3/4 lg:w-1/4">
                    <p className="font-semibold mx-6">Ciekawe Posty:</p>
                    {data.allDatoCmsBlog.edges.map(({ node }) => (
                        <div className="flex mx-6 flex-col items-start gap-4 lg:gap-6">
                            <Link
                                to={`/blog/` + node.slug}
                                className="group w-full lg:w-full h-44 lg:h-44 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                            >
                                <GatsbyImage
                                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition"
                                    loading="eager"
                                    image={getImage(node.img)}
                                    alt={node.title}
                                />
                            </Link>

                            <div className="flex flex-col gap-2">
                                <h2 className="text-gray-800 w-full md:w-[90%] text-xl font-bold">
                                    <Link
                                        to={`/blog/` + node.slug}
                                        className="hoverLink active:text-gray-900 transition duration-100"
                                    >
                                        {node.title}
                                    </Link>
                                </h2>

                                <p className="text-gray-500 w-full text-sm md:w-[90%]">
                                    {node.sdesc}
                                </p>

                                <div className="mb-12">
                                    <Link
                                        to={`/blog/` + node.slug}
                                        className="linkColor hoverLink text-sm active:text-gray-900 font-semibold transition duration-100"
                                    >
                                        Zobacz Artykuł &#8594;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Strony Internetowe"
        siteUrl="https://seovileo.pl/darmowa-wycena"
    />
);
export default CalcPrice;
