import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const MediaCompon = () => {
    return (
        <section class="text-gray-900 bg-white relative  body-font">
            <div class="container px-5 py-20 mx-auto flex flex-col">
                <div class="lg:w-[90%] mx-auto">
                    <div class="rounded-lg h-64 overflow-hidden relative">
                        <StaticImage
                            className="absolute h-full w-full top-0 left-0"
                            quality={30}
                            width={300}
                            loading="lazy"
                            placeholder="blurred"
                            alt="strony internetowe tło"
                            src="https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80"
                        />
                        <div className="absolute inset-0 w-full h-full z-10 bg-gray-900/70" />
                    </div>
                    <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-400">
                                <StaticImage
                                    className="w-12 h-12 mt-1"
                                    loading="lazy"
                                    placeholder="blurred"
                                    src="../../assets/favicon.png"
                                    alt="seovileo strony internetowe"
                                />
                            </div>
                            <div class="flex flex-col items-center text-center justify-center">
                                <h4 class="font-medium capitalize title-font mt-4 text-gray-900 text-lg">
                                    Strony internetowe
                                </h4>
                                <div class="w-12 h-1 bg-amber-400 rounded mt-2 mb-4"></div>
                                <p class="text-base">
                                    Optymalizacja SEO sprawia, że nasze strony
                                    są łatwo widoczne dla wyszukiwarek i
                                    znajdują się na szczycie wyników
                                    wyszukiwania. Wsparcie i dobre praktyki, na
                                    jakich opiera się Gatsby, zapewniają nam
                                    bezpieczeństwo i pewność, że nasze strony są
                                    zawsze najlepszej jakości.
                                </p>
                            </div>
                        </div>
                        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p class="leading-relaxed text-lg mb-4">
                                Nasze strony internetowe tworzymy w technologii
                                Gatsby, aby zapewnić naszym klientom najlepsze
                                doświadczenie użytkownika. Dzięki szybkości i
                                wydajności, nasze strony są łatwo dostępne dla
                                każdego, bez względu na urządzenie, z jakiego
                                korzystają. Integracja z różnymi źródłami danych
                                pozwala nam łączyć dane z wielu źródeł i tworzyć
                                dynamiczne strony internetowe.
                            </p>
                            <p class="leading-relaxed text-lg mb-4">
                                Optymalizacja SEO sprawia, że nasze strony są
                                łatwo widoczne dla wyszukiwarek i znajdują się
                                na szczycie wyników wyszukiwania. Wsparcie i
                                dobre praktyki, na jakich opiera się Gatsby,
                                zapewniają nam bezpieczeństwo i pewność, że
                                nasze strony są zawsze najlepszej jakości.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaCompon;
