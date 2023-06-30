import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const MediaCompon = () => {
    return (
        <section class="text-gray-900 relative body-font">
            <div class="container px-5 py-20 mx-auto flex flex-col">
                <div class="lg:w-[90%] mx-auto">
                    <div class="rounded-lg h-64 overflow-hidden relative flex items-center justify-center">
                        <div
                            className="absolute inset-0 z-10 opacity-70 bg-fixed"
                            style={{
                                backgroundImage:
                                    "url(https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80)",
                            }}
                        />
                        <div className="absolute inset-0 w-full h-full z-0 bg-gray-900/70" />
                        <h2 className="text-2xl md:w-[60%] md:text-3xl xl:text-4xl xl:py-0 font-bold text-gray-100 text-center px-6 z-10">
                            Jak krok po kroku budujemy stronę internetową?
                        </h2>
                    </div>
                    <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-400">
                                <StaticImage
                                    className="w-12 h-12 mt-1"
                                    loading="lazy"
                                    src="../../assets/favicon.png"
                                    alt="seovileo strony internetowe"
                                />
                            </div>
                            <div class="flex flex-col items-center text-center justify-center">
                                <h3 class="font-medium capitalize title-font mt-4 text-gray-900 text-lg">
                                    Seovileo
                                </h3>
                                <div class="w-12 h-1 bg-amber-400 rounded mt-2 mb-4"></div>
                                <p class="text-base">
                                    Twoja obecność w sieci to klucz do sukcesu w
                                    dzisiejszym cyfrowym świecie. Odpowiednio
                                    zaprojektowana strona www może być wizytówką
                                    Twojej firmy i przyciągnąć nowych klientów.
                                    Jak jednak krok po kroku zbudować taką
                                    stronę?
                                </p>
                            </div>
                        </div>
                        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p class="leading-relaxed text-lg mb-4">
                                Kod i grafika są nieodłącznymi elementami
                                projektowania stron. Dobrze napisany kod
                                zapewnia solidne podstawy, podczas gdy
                                estetyczna i przykuwająca wzrok grafika
                                przyciąga uwagę odwiedzających.
                            </p>
                            <p class="leading-relaxed text-lg mb-4">
                                Pierwszym krokiem jest wybór darmowego projektu
                                strony, który będzie odpowiadał Twoim potrzebom.
                                Istnieje wiele platform, które oferują gotowe
                                szablony do wyboru. Warto jednak pamiętać o
                                wyjątkowości strony, dlatego dostosuj projekt do
                                swojej wizji.
                            </p>
                            <p class="leading-relaxed text-lg mb-4">
                                Następnie musisz wybrać system CMS, czyli system
                                zarządzania treścią, który umożliwi Ci łatwą
                                edycję i aktualizację treści na stronie. Wielu
                                popularnych CMS-ów, takich jak WordPress czy
                                Joomla, oferuje wiele funkcjonalności i łatwą
                                obsługę.
                            </p>
                            <p class="leading-relaxed text-lg mb-4">
                                Proces tworzenia to kolejny ważny etap.
                                Zbieranie treści, dodawanie zdjęć i innych
                                mediów – to wszystko jest częścią tworzenia
                                funkcjonalnej strony. Pamiętaj o sprawdzeniu
                                poprawności działania strony na różnych
                                urządzeniach i przeglądarkach.
                            </p>
                            <p class="leading-relaxed text-lg mb-4">
                                Gdy strona jest gotowa, czas otrzymać opinię od
                                innych. Poproś znajomych lub klientów o
                                feedback, abyś mógł wprowadzić ewentualne
                                poprawki i usprawnienia.
                            </p>
                            <p class="leading-relaxed text-lg mb-4">
                                Podsumowując, zbudować stronę to proces, który
                                wymaga uwagi na każdym etapie. Połączenie
                                dobrego kodu, estetycznej grafiki i
                                funkcjonalności systemu CMS stworzy strukturę,
                                na której możesz zbudować swoją obecność w
                                sieci.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaCompon;
