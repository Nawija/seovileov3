import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Hero2Component = () => (
    <section className="relative flex items-center text-center justify-center h-screen md:h-auto text-white max-w-[1800px] mx-auto overflow-hidden">
        <div className="h-full w-full absolute -z-10 overflow-hidden">
        <StaticImage quality={0} className="h-full w-full z-0" src="../../assets/heroImg.jpg" />
        <div className="h-full w-full absolute top-0 bg-gray-800 mix-blend-multiply z-10" />
        </div>
        <div className="flex flex-col items-center text-center justify-center text-base md:py-4 mt-1">
            <h2 className=" changeColor capitalize font-extrabold text-green-400 text-xl md:ml-1 xl:text-3xl tracking-wider">
                Freelancer
            </h2>
            <h3 className="capitalize lg:drop-shadow text-3xl lg:text-5xl xl:text-6xl lg:py-2 font-bold">
                Stwórz z nami swoja wizytówkę
            </h3>
            <h1 className="capitalize text-base xl:text-xl mt-2">
                Strona Internetowa za darmo
            </h1>
            <p className="text-base xl:text-xl md:w-[90%]">
                Tak mozna powiedziec porównujac jakość w stosunku do ceny vs
                konkurencja, Nasze ceny są przystępne dla każdego i dopasowujemy
                je do indywidualnych potrzeb każdego klienta. Skontaktuj się z
                nami, aby uzyskać darmową wycenę i rozpocząć współpracę już
                dziś!
            </p>
            <div className="flex flex-col items-start justify-start mt-3">
                <div className="flex md:flex-col lg:flex-row items-start justify-start">
                    <div
                        data-sal="zoom-out"
                        data-sal-delay="0"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        className=" flex items-start justify-start mt-1"
                    >
                        <StaticImage
                            loading="eager"
                            height={30}
                            width={30}
                            src="../../assets/star.png"
                            placeholder="blurred"
                        />
                        <p className="  capitalize text-base md:font-medium xl:text-xl ml-1 font-semibold">
                            50% Szybsza
                        </p>
                    </div>
                    <div
                        data-sal="zoom-out"
                        data-sal-delay="100"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        className=" flex items-start justify-start mt-1 ml-1 font-semibold sm:ml-3"
                    >
                        <StaticImage
                            height={30}
                            width={30}
                            src="../../assets/star.png"
                            placeholder="blurred"
                        />
                        <p className="  capitalize text-base md:font-medium xl:text-xl ml-1 font-semibold">
                            2x SEO Boost
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-col lg:flex-row items-start justify-start">
                    <div
                        data-sal="zoom-out"
                        data-sal-delay="200"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        className=" flex items-start justify-start mt-1"
                    >
                        <StaticImage
                            height={30}
                            width={30}
                            src="../../assets/star.png"
                            placeholder="blurred"
                        />
                        <p className="  capitalize text-base md:font-medium xl:text-xl ml-1 font-semibold">
                            20x Lżejsza
                        </p>
                    </div>
                    <div
                        data-sal="zoom-out"
                        data-sal-delay="300"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        className=" flex items-start justify-start mt-1 ml-3 font-semibold sm:ml-3"
                    >
                        <StaticImage
                            height={30}
                            width={30}
                            src="../../assets/star.png"
                            placeholder="blurred"
                        />
                        <p className="  capitalize text-base md:font-medium xl:text-xl ml-1">
                            Od 300zł!
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-12 text-gray-700">
                <Link
                    to="/usługi"
                    className="bg-gradient-to-tl from-green-300 to-green-600 lg:text-lg text-base text-gray-100 shadow-xl shadow-green-500 transition-all hover:shadow-green-600 duration-300 py-3 px-6 -tracking-wide rounded-lg"
                >
                    Oferta
                </Link>
                <Link
                    to="/portfolio"
                    className="bg-gradient-to-tl from-orange-300 to-orange-600 text-slate-100 py-3 px-6 -tracking-wide rounded-lg shadow-xl shadow-orange-500 hover:shadow-orange-600 transition-all duration-300 lg:text-lg text-base md:ml-6 lg:ml-8 ml-4"
                >
                    Portfolio
                </Link>
            </div>
        </div>
    </section>
);

export default Hero2Component;
