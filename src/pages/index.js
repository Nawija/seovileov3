import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import {
    HeroCompon,
    CardsHeroCompon,
    SpeedTestCompon,
    ServicesCompon,
    ProjectsCompon,
    MediaCompon,
} from "../components/index";

const IndexPage = () => {
    return (
        <Layout>
            <HeroCompon />
            <CardsHeroCompon />
            <SpeedTestCompon />
            <ServicesCompon />
            <ProjectsCompon />
            <MediaCompon />

            <div class="bg-slate-100 py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div class="mb-10 md:mb-16">
                        <h4 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Najczęściej zadawanie pytania
                        </h4>

                        <p class="mx-auto max-w-screen-md text-center text-gray-700">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated.
                        </p>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2 md:gap-8">
                        <div class="rounded-lg bg-white drop-shadow-lg p-5">
                            <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                <h3 class="font-semibold text-amber-500 sm:text-lg md:text-xl">
                                    Co to strona firmowa?
                                </h3>

                                <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <p class="text-gray-500">
                                Strona firmowa to Twoja internetowa wizytówka
                                firmy w sieci, pamiętaj aby nie łączyć strony
                                firmowej z wizytówką Google Moja Firma, są to
                                dwa oddzielne byty ponieważ strona firmowa
                                znajduje się na danym serwerze i pod daną
                                domeną, to wizytówka Google Moja Firma jest tak
                                naprawdę wizytówką, która pojawia się po
                                wpisaniu nazwy firmy w wyszukiwarce czy Mapach
                                Google jest ona bardzo istotna przy zakadaniu
                                strony internetowej ponieważ wizytówkę Google
                                Moja Firma można połączyć ze stroną WWW . W
                                przypadku witryny firmowej (strona www) opiszę
                                Twoją firmę oraz stworzę podstrony na temat
                                usług jakie świadczysz lub produktów jakie
                                sprzedajesz. Dodanie galerii realizacji czy
                                nietypową funkcjonalności jak kalkulatory wyceny
                                czy formularze kontaktowe pozwoli pozyskać
                                większą ilość klientów.
                            </p>
                        </div>
                        <div class="rounded-lg bg-white drop-shadow-lg p-5">
                            <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                <h3 class="font-semibold text-amber-500 sm:text-lg md:text-xl">
                                    Co to Landing page?
                                </h3>

                                <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <p class="text-gray-500">
                                Jest to strona lądowania budowana głównie po to,
                                aby jak najdokładniej opisać produkt lub usługę
                                i ją sprzedać. Ukierunkowanie pisania treści
                                jest zazwyczaj precyzowane pod jeden produkt lub
                                usługę w celu zmaksymalizowania konwersji
                                kontaktu lub zakupu. Wygląd takiej pojedynczej
                                strony usługi lub produktu musi być wykonany
                                dokładnie oraz zachęcająca, ma budzić zaufanie u
                                klienta, który wejdzie na stronę w celu
                                pozyskania informacji, których szuka.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Strony Internetowe" />;

export default IndexPage;
