import * as React from "react";
import Layout from "../components/layout";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const CalcPrice = () => {
    const [sum, setSum] = useState(0);
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);

    const handleOption1Change = () => {
        setOption1(!option1);
        setSum(sum + (option1 ? -1 : 1));
    };
    const handleOption2Change = () => {
        setOption2(!option2);
        setSum(sum + (option2 ? -2 : 2));
    };
    const handleOption3Change = () => {
        setOption3(!option3);
        setSum(sum + (option3 ? -3 : 3));
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
                className="p-6 bg-gray-200 w-1/2 mx-auto rounded-xl mb-44"
                action="https://public.herotofu.com/v1/d1061fe0-e21a-11ed-8300-fd92f9e8911a"
                method="post"
                accept-charset="UTF-8"
            >
                <div>
                    <input
                        className="mr-2"
                        type="radio"
                        id="option1"
                        name="options"
                        value="1"
                        onChange={handleOption1Change}
                    />
                    <label htmlFor="option1">Option 1</label>
                </div>
                <div>
                    <input
                        className="mr-2"
                        type="radio"
                        id="option2"
                        name="options"
                        value="2"
                        onChange={handleOption2Change}
                    />
                    <label htmlFor="option2">Option 2</label>
                </div>
                <div>
                    <input
                        className="mr-2"
                        type="radio"
                        id="option3"
                        name="options"
                        value="3"
                        onChange={handleOption3Change}
                    />
                    <label htmlFor="option3">Option 3</label>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-2">
                    <label htmlFor="optionTxt1">Option 3</label>
                    <input
                        className="mr-2 w-1/2 h-32 rounded-xl"
                        type="text"
                        id="optionTxt1"
                        name="optionTxt1"
                    />
                </div>
                <input id={sum} checked className="h-1 w-1" />
                <div className="flex items-center justify-between">
                    <p className="font-bold text-emerald-700">Sum: {sum}</p>
                    <button className="btn" type="submit">
                        Wyślij
                    </button>
                </div>
            </form>
        </Layout>
    );
};

export default CalcPrice;
