import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const CompaniesComponent = () => (
    <section className="flex flex-col text-gray-700 items-center justify-center px-4 relative mx-auto max-w-screen-xl overflow-hidden sm:mt-2">
        <h2 className="drop-shadow text-center px-3 uppercase text-lg md:text-xl lg:text-3xl my-2 tracking-wide font-bold mb-3">
            Jakie światowe firmy korzystaja z technologii gatsby
        </h2>
        <p className="text-center md:w-[80%] lg:w-[60%]">Światowe firmy decydują się na wykorzystanie technologii Gatsby z kilku powodów, szybkość, wydajność, skalowalność, bezpieczeństwo, wsparcie dla SEO oraz łatwą integrację z różnymi źródłami danych</p>
        <StaticImage quality={100} placeholder="blurred" src="../../assets/companies.png" />
    </section>
);

export default CompaniesComponent;
