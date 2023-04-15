import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const WhyGatsbyComponent = () => (
    <section className="text-gray-700 px-4 relative mx-auto max-w-screen-xl overflow-hidden">
        <div className="flex flex-col md:flex-row mx-auto items-center justify-around px-3 w-full mt-1">
        
             <div className="md:order-1">
             <StaticImage
                    className="h-auto w-full"
                    placeholder="blurred"
                    src="../../assets/speedPage.png"
                    quality={100}
                />
             </div>
            <div className="w-full md:w-1/2">
                <h3 className="drop-shadow capitalize text-lg md:text-xl lg:text-3xl my-2 tracking-wide font-bold mb-6">
                    DLACZEGO WARTO ZAINWESTOWAĆ W STRONĘ OPARTĄ NA GATSBYJS?
                </h3>
                <p>
                    Inwestycja w stronę zakodowaną na GatsbyJS jest tego warta
                    przede wszystkim z powodu jej wysokiej wydajności i większej
                    szansy na zrealizowanie postawionych sobie celów biznesowych
                    Strony powstające przy wykorzystaniu Gatsbiego działają
                    płynnie, a ich czas ładowania jest błyskawiczny w porównaniu
                    do starszych technologii takich jak Joomla, Drupal, stron
                    opartych na gotowych motywach
                </p>
                <div className="my-12 text-gray-100 flex items-center justify-center md:justify-start ">
                    <Link
                        to="/portfolio"
                        className="bg-gradient-to-tl from-blue-400 to-blue-500 text-base hover:shadow-blue-700 transition-all duration-300 py-2 px-6 -tracking-wide rounded-lg shadow-lg shadow-blue-500"
                    >
                        Projekty
                    </Link>
                    <Link
                        to="/kontakt"
                        className="bg-gradient-to-tl from-yellow-400 to-amber-600 py-2 px-6 -tracking-wide rounded-lg shadow-lg hover:shadow-amber-700 transition-all duration-300 shadow-amber-600 text-base md:ml-6 lg:ml-8 ml-4"
                    >
                        Kontakt
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

export default WhyGatsbyComponent;
