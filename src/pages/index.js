import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import {
    Hero,
    CardsHero,
    SpeedTest,
    Services,
    Projects,
    Media,
    Question,
} from "../components/index/index";

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <CardsHero />
            <SpeedTest />
            <section class="text-gray-700 body-font max-w-screen-2xl mx-auto">
                <div class="px-5 pb-12 mx-auto">
                    <div class="flex flex-wrap w-full pb-20 flex-col items-center text-center">
                        <h2 class=" px-2 md:px-12 text-gray-700 font-bold text-2xl mb-4 md:mb-0">
                            Własna strona internetowa - po co mi ona ?
                        </h2>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                            W dzisiejszym cyfrowym świecie posiadanie
                            responsywnej strony internetowe jest niezwykle
                            istotne. Dlaczego warto zainwestować w strony www?
                            Oto kilka powodów:
                        </p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-yellow-500 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gradient-to-t from-emerald-500 to-emerald-300 shadow-md shadow-emerald-600 text-white mb-4">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h3 class="text-xl text-gray-900 font-medium title-font mb-3">
                                    Wyraz indywidualności i profesjonalizmu
                                </h3>
                                <p class="leading-relaxed text-base">
                                    Posiadanie swojej strony www to idealny
                                    sposób, aby wyróżnić się spośród
                                    konkurencji. Dzięki starannie
                                    zaprojektowanemu projektowi graficznemu i
                                    atrakcyjnym elementom graficznym, będzie
                                    odbierana jako profesjonalna i wiarygodna.
                                </p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class="border border-yellow-500 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gradient-to-t from-emerald-500 to-emerald-300 shadow-md shadow-emerald-600 text-white mb-4">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <h3 class="text-xl text-gray-900 font-medium title-font mb-3">
                                    Kontrola nad treścią i prezentacją
                                </h3>
                                <p class="leading-relaxed text-base">
                                    Posiadając własną stronę www, masz pełną
                                    kontrolę nad treściami, jakie prezentujesz.
                                    Możesz zarządzać treściami na podstronach i
                                    stronie głównej oraz dostosowywać je do
                                    potrzeb i oczekiwań Twojej grupy docelowej.
                                </p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4 mx-auto">
                            <div class="border border-yellow-500 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gradient-to-t from-emerald-500 to-emerald-300 shadow-md shadow-emerald-600 text-white mb-4">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h3 class="text-xl text-gray-900 font-medium title-font mb-3">
                                    Zwiększenie widoczności i konwersji
                                </h3>
                                <p class="leading-relaxed text-base">
                                    Strona stanowi punkt dla Twojej obecności
                                    online. Dzięki optymalizacji dla
                                    wyszukiwarek (SEO), Twoja strona będzie
                                    lepiej widoczna w wynikach wyszukiwania. To
                                    prowadzi do większej ilości odwiedzających,
                                    a co za tym idzie, zwiększa szanse na
                                    konwersję
                                </p>
                            </div>
                        </div>
                        <p className="sm:w-3/4 text-start lg:text-center mx-auto lg:pl-0 lg:pr-0 lg:py-12 py-4 pl-6 pr-3">
                            Ważne jest również, aby regularnie sprawdzać
                            działanie strony i jej szybkość. Dobrej jakości
                            serwer lub serwis hostingowy zapewni niezawodność i
                            szybkość działania strony Zobacz również mój artykuł
                            o darmowym niezawodnym hostingu dla klientów
                            Wnioskiem jest to, że posiadanie własnej strony to
                            nie tylko inwestycja, ale również strategiczny krok,
                            który przyniesie korzyści w postaci większej
                            widoczności,
                        </p>
                    </div>
                </div>
            </section>
            <Services />
            <Projects />
            <Media />
            <Question />
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Projektowanie i tworzenie stron internetowych | Strony www | CMS"
        description="Przygotuj się na prawdziwą rewolucję w świecie stron www. Usługi projektowania i tworzenia stron internetowych, które przynoszą prawdziwe rezultaty !!"
    />
);
export default IndexPage;
