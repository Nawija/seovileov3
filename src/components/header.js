import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    const [showMenu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!showMenu);
    const closeMenu = () => setMenu(false);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    });

    return (
        <header
            className="
                    z-50 mx-auto sticky top-0 text-center
            "
        >
            <div
                className={
                    "absolute top-0 bg-transparent mx-auto transition-colors w-full"
                }
            >
                <div
                    className={`h-full w-full mx-auto py-1 absolute top-0 -z-10 transition-colors duration-300 ${
                        navbar
                            ? "bg-white lg:bg-white/90 lg:backdrop-blur-xl shadow-lg"
                            : ""
                    }`}
                />
                <nav
                    className={`max-w-screen-2xl mx-auto px-4 py-2 flex items-center justify-between w-full navTextColor transition-colors duration-100 z-50 ${
                        showMenu ? "bg-gray-900" : ""
                    }`}
                >
                    <Link
                        to="/"
                        className="flex items-center justify-center"
                        title="Logo Seovileo"
                        aria-label="Logo"
                    >
                        <div className="h-auto w-10 ">
                            <StaticImage
                                quality={100}
                                className="h-full w-full"
                                loading="eager"
                                placeholder="blurred"
                                src="../assets/favicon.png"
                            />
                        </div>
                        <p
                            className={`ml-1 tracking-wide transition-colors font-bold ${
                                navbar && !showMenu
                                    ? "first-color"
                                    : "second-color"
                            }`}
                        >
                            Seovileo
                        </p>
                    </Link>
                    <button
                        aria-label="Menu"
                        onClick={handleMenu}
                        className="lg:hidden bg-gray-100 p-2.5 transition-colors z-50 rounded-lg"
                    >
                        <div
                            className={`w-5 h-1 transition burgerColor m-1 rounded-lg ${
                                showMenu ? "translate-y-2 rotate-45" : ""
                            }`}
                        />
                        <div
                            className={`w-3 h-1 transition burgerColor m-1 rounded-lg ${
                                showMenu ? "opacity-0" : ""
                            }`}
                        />
                        <div
                            className={`w-5 h-1 transition burgerColor m-1 rounded-lg ${
                                showMenu ? "-translate-y-2 -rotate-45" : ""
                            }`}
                        />
                    </button>
                    <ul
                        className={`absolute top-full left-0 w-full text-center ${
                            showMenu
                                ? "text-lg bg-gray-900 opacity-100 transition py-2 -translate-y-0 -z-10"
                                : "py-2 lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-end lg:top-0 lg:translate-y-0 lg:py-0 opacity-0 -translate-y-full transition -z-10 lg:z-10 lg:ml-8"
                        }`}
                    >
                        <li className="mx-5 my-2">
                            <Link
                                onClick={closeMenu}
                                title="Strona Główna"
                                aria-label="Strona Główna"
                                className={
                                    navbar && !showMenu
                                        ? "font-semibold first-color text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                        : "font-semibold second-color text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                }
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mx-5 my-2">
                            <Link
                                onClick={closeMenu}
                                title="Projekty"
                                aria-label="Projekty"
                                className={
                                    navbar && !showMenu
                                        ? "font-semibold first-color text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                        : "font-semibold second-color text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                }
                                to="/projekty"
                            >
                                Projekty
                            </Link>
                        </li>
                        <li className="mx-5 my-2">
                            <Link
                                onClick={closeMenu}
                                title="Usługi"
                                aria-label="Usługi"
                                className={
                                    navbar && !showMenu
                                        ? "font-semibold first-color text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                        : "font-semibold second-color text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                }
                                to="/usługi"
                            >
                                Usługi
                            </Link>
                        </li>

                        <li className="mx-5 my-2">
                            <Link
                                onClick={closeMenu}
                                title="Blog"
                                aria-label="Blog"
                                className={
                                    navbar && !showMenu
                                        ? "font-semibold first-color text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                        : "font-semibold second-color text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                }
                                to="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="mx-5 my-2">
                            <Link
                                onClick={closeMenu}
                                title="Kontakt"
                                aria-label="Kontakt"
                                className={
                                    navbar && !showMenu
                                        ? "font-semibold first-color text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                        : "font-semibold second-color text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                }
                                to="/kontakt"
                            >
                                Kontakt
                            </Link>
                        </li>
                        <li className="mx-5 my-2">
                            <Link
                                onClick={closeMenu}
                                title="Darmowa Wycena"
                                aria-label="Darmowa Wycena"
                                className={`flex items-center justify-center border-yellow-500 text-sm w-max mx-auto font-semibold shadow-lg px-4 py-2 border rounded-lg transition md:hover:scale-[.98] ${
                                    navbar && !showMenu
                                        ? ""
                                        : "text-yellow-500 shadow-yellow-400/30 md:hover:shadow-xl"
                                }`}
                                to="/darmowa-wycena"
                            >
                                <p className="mr-1">Darmowa Wycena</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-brand-wechat"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z"></path>
                                    <path d="M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233"></path>
                                    <path d="M10 8h.01"></path>
                                    <path d="M7 8h.01"></path>
                                    <path d="M15 14h.01"></path>
                                    <path d="M18 14h.01"></path>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
