import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const SpeedTestCompon = () => {
    return (
        <section className="lg:-mt-10 py-10 md:pt-0 lg:pt-10 max-w-screen-2xl mx-auto">
            <h2 className="text-center px-12 text-lg uppercase md:text-xl titleSection font-bold -tracking-wider drop-shadow-lg ">
                Szybka <strong>Strona Internetowa</strong>
            </h2>
            <div className=" bg-gradient-to-r from-amber-400 w-[30%] md:w-[18%] h-1 rounded-3xl mb-20 lg:mb-6 mx-auto" />
            <div className="flex flex-col lg:mt-20 px-4 lg:flex-row py-6 md:pb-16">
                <div className="sm:w-4/5 -mt-24 w-full lg:w-1/2 mx-auto lg:my-auto flex mb-8 items-center justify-center lg:order-1">
                    <StaticImage
                        className="lg:-mt-20"
                        quality={100}
                        width={682}
                        loading="eager"
                        placeholder="blurred"
                        src="../../assets/speedTest.png"
                        alt="test szybkosci strony internetowej"
                    />
                </div>
                <div className="lg:w-[60%] lg:px-2">
                    <p class=" px-2 md:px-12 font-bold text-emerald-700 text-sm">
                        TECHNOLOGIA GATSBY
                    </p>
                    <p class=" px-2 md:px-12 text-gray-700 font-bold text-xl mb-4 md:mb-0">
                        UZYSKAJ NAJSZYBSZĄ STRONĘ INTERNETOWĄ!
                    </p>
                    <p class=" px-2 md:px-12 md:mt-4 text-gray-700">
                        Nasze strony internetowe tworzymy w technologii Gatsby,
                        aby zapewnić naszym klientom najlepsze doświadczenie
                        użytkownika. Dzięki szybkości i wydajności, nasze strony
                        są łatwo dostępne dla każdego, bez względu na
                        urządzenie, z jakiego korzystają. Integracja z różnymi
                        źródłami danych pozwala nam łączyć dane z wielu źródeł i
                        tworzyć dynamiczne strony internetowe.
                    </p>
                    <p class=" px-2 md:px-12 pb-6 mt-3 md:mt-4 text-gray-700">
                        Optymalizacja SEO sprawia, że nasze strony są łatwo
                        widoczne dla wyszukiwarek i znajdują się na szczycie
                        wyników wyszukiwania. Wsparcie i dobre praktyki, na
                        jakich opiera się Gatsby, zapewniają nam bezpieczeństwo
                        i pewność, że nasze strony są zawsze najlepszej jakości.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SpeedTestCompon;
