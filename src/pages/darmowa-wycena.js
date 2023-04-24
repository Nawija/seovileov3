import * as React from "react";
import Layout from "../components/layout";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const CalcPrice = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedValue2, setSelectedValue2] = useState(null);
    const [sum, setSum] = useState(0);

    const handleValueChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        calculateSum(newValue, selectedValue2);
    };

    const handleOptionN1Change = (event) => {
        const newValue = event.target.value;
        setSelectedValue2(newValue);
        calculateSum(selectedValue, newValue);
    };
    const handleOptionN2Change = (event) => {
        const newValue = event.target.value;
        setSelectedValue2(newValue);
        calculateSum(selectedValue, newValue);
    };
    const handleOptionN3Change = (event) => {
        const newValue = event.target.value;
        setSelectedValue2(newValue);
        calculateSum(selectedValue, newValue);
    };
    const handleOptionN4Change = (event) => {
        const newValue = event.target.value;
        setSelectedValue2(newValue);
        calculateSum(selectedValue, newValue);
    };

    const calculateSum = (value1, value2) => {
        const sum = parseInt(value1) + (value2 ? parseInt(value2) : 0);
        setSum(sum);
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
                className="p-6 bg-gray-200 w-[90%] sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto rounded-xl mb-12 md:mb-20 lg:mb-24"
                action="https://public.herotofu.com/v1/d1061fe0-e21a-11ed-8300-fd92f9e8911a"
                method="post"
                accept-charset="UTF-8"
            >
                <div className="mb-2">
                    <p className="font-semibold mb-1">
                        Typ strony internetowej *
                    </p>
                    <div className="ml-2">
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="option1"
                                name="options1"
                                value="1200"
                                checked={selectedValue === "1200"}
                                onChange={handleValueChange}
                            />
                            <label htmlFor="option1">Multi Page</label>
                        </div>
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="option2"
                                name="options2"
                                value="900"
                                checked={selectedValue === "900"}
                                onChange={handleValueChange}
                            />
                            <label htmlFor="option2">Landing Page</label>
                        </div>
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="option3"
                                name="options3"
                                value="700"
                                checked={selectedValue === "700"}
                                onChange={handleValueChange}
                            />
                            <label htmlFor="option3">Blog</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-2">
                    <label className="font-semibold mb-1" htmlFor="t1">
                        Opisz swoją firmę
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-2 rounded-xl"
                        type="text"
                        id="t1"
                        name="OpisFirmy"
                    />
                </div>

                <div className="flex flex-col items-start justify-start px-1 py-2">
                    <label className="font-semibold mb-1" htmlFor="t2">
                        Zakres usług
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-2 rounded-xl"
                        type="text"
                        id="t2"
                        name="ZakresUsług"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1">
                        Opisz zakres usług jakie wykonuje Twoja firma, ma to
                        również wpływ na ilość podstron.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-2">
                    <label className="font-semibold mb-1" htmlFor="t3">
                        Opisz konkurencję
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-2 rounded-xl"
                        type="text"
                        id="t3"
                        name="Konkurencja"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1">
                        Możesz opisać konkurencję lub załączyć linki do ich
                        stron internetowych.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-2">
                    <label className="font-semibold mb-1" htmlFor="t4">
                        Posiadasz identyfikację wizualną firmy?
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-2 rounded-xl"
                        type="text"
                        id="t4"
                        name="IdentyfikacjaFirmy"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1">
                        Opisz czy posiadasz kolory firmowe, logo lub wykonane
                        grafiki jak wizytówki czy grafiki socialmedia. Będzie to
                        miało wpływ na ujednolicenie strony z Twoją marką.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-2">
                    <label className="font-semibold mb-1" htmlFor="t5">
                        Wygląd strony - Inspirację
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-2 rounded-xl"
                        type="text"
                        id="t5"
                        placeholder="Pomoze okreslic Twoje oczekiwaniawzgledem wygladu strony internetowej np: kolorystyki i ukladu sekcji"
                        name="Inspiracja"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1">
                        Jeżeli istnieją strony, które Ci się podobają to załącz
                        powyżej linki do nich lub skorzystaj z takich źródeł
                        inspiracji jak pinterest.com
                    </p>
                </div>

                <div className="mb-2">
                    <p className="font-semibold mb-1">Posiadasz domenę?</p>
                    <div className="ml-2">
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="optionN1"
                                name="optionsN1"
                                value="0"
                                checked={selectedValue2 === "0"}
                                onChange={handleOptionN1Change}
                            />
                            <label htmlFor="optionN1">Tak</label>
                        </div>
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="optionN2"
                                name="optionsN2"
                                value="50"
                                checked={selectedValue2 === "50"}
                                onChange={handleOptionN1Change}
                            />
                            <label htmlFor="optionN2">Nie</label>
                        </div>
                    </div>
                </div>

                <div className="mb-2">
                    <p className="font-semibold mb-1">Posiadasz Hosting?</p>
                    <div className="ml-2">
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="optionN7"
                                name="optionsN7"
                                value="0"
                                checked={selectedValue2 === "0"}
                                onChange={handleOptionN3Change}
                            />
                            <label htmlFor="optionN7">Tak</label>
                        </div>
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="optionN8"
                                name="optionsN8"
                                value="50"
                                checked={selectedValue2 === "0"}
                                onChange={handleOptionN3Change}
                            />
                            <label htmlFor="optionN8">Nie</label>
                        </div>
                    </div>
                </div>

                <div className="mb-2">
                    <p className="font-semibold mb-1">
                        Ile podstron ma posiadać strona internetowa? *
                    </p>
                    <div className="ml-2">
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="optionN3"
                                name="optionsN3"
                                value="0"
                                checked={selectedValue2 === "0"}
                                onChange={handleOptionN2Change}
                            />
                            <label htmlFor="optionN3">1-3 podstron</label>
                        </div>
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="optionN3"
                                name="optionsN3"
                                value="200"
                                checked={selectedValue2 === "200"}
                                onChange={handleOptionN2Change}
                            />
                            <label htmlFor="optionN3">4-6 podstron</label>
                        </div>
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="optionN3"
                                name="optionsN3"
                                value="400"
                                checked={selectedValue2 === "400"}
                                onChange={handleOptionN2Change}
                            />
                            <label htmlFor="optionN3">7-9 podstron</label>
                        </div>
                        <div>
                            <input
                                className="mr-2"
                                type="radio"
                                id="optionN3"
                                name="optionsN3"
                                value="600"
                                checked={selectedValue2 === "600"}
                                onChange={handleOptionN2Change}
                            />
                            <label htmlFor="optionN3">Więcej</label>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 mt-4">
                    <p className="font-bold text-emerald-700">
                        Suma: <span className="scale-110">{sum}</span>PLN
                    </p>
                    <button className="btn">Wyślij Zapytanie</button>
                </div>
            </form>
        </Layout>
    );
};
export default CalcPrice;
