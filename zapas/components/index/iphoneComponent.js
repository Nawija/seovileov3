import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const CardsComponents = () => (
    <section className="text-gray-700 px-4 pt-8 md:pt-12 relative mx-auto max-w-screen-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center w-full ">
        <div className="bg-[#ff003c] -translate-x-1/2 md:hidden top-[12%] left-0 h-20 w-20 absolute rounded-full blur-3xl -z-10" />
        <div className="bg-[#00d5ff] translate-x-1/2 md:hidden top-[22%] right-0 h-20 w-20 absolute rounded-full blur-3xl -z-10" />
            <StaticImage
                layout="fixed"
                placeholder="blurred"
                className="w-full h-auto ml-12 sm:ml-0"
                width={300}
                quality="100"
                src="../../assets/iphone.png"
            />
            <div className="w-full md:w-1/2">
                <h3 className="drop-shadow capitalize text-lg md:text-xl lg:text-3xl my-2 tracking-wide font-bold mb-6">
                    UZYSKAJ NAJSZYBSZĄ STRONĘ INTERNETOWĄ!
                </h3>
                <p>
                    Nasze strony internetowe tworzymy w technologii Gatsby, aby
                    zapewnić naszym klientom najlepsze doświadczenie
                    użytkownika. Dzięki szybkości i wydajności, nasze strony są
                    łatwo dostępne dla każdego, bez względu na urządzenie, z
                    jakiego korzystają. Integracja z różnymi źródłami danych
                    pozwala nam łączyć dane z wielu źródeł i tworzyć dynamiczne
                    strony internetowe. Optymalizacja SEO sprawia, że nasze
                    strony są łatwo widoczne dla wyszukiwarek i znajdują się na
                    szczycie wyników wyszukiwania. Wsparcie i dobre praktyki, na
                    jakich opiera się Gatsby, zapewniają nam bezpieczeństwo i
                    pewność, że nasze strony są zawsze najlepszej jakości.
                </p>
            </div>
        </div>
    </section>
);

export default CardsComponents;
