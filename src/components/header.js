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
                        navbar ? "bg-white shadow-lg" : ""
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
                        className={`absolute top-full left-0 w-full text-center text-main ${
                            showMenu
                                ? "text-lg bg-gray-900 opacity-100 transition -translate-y-0 -z-10"
                                : "py-2 lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-end lg:top-0 lg:translate-y-0 lg:py-0 opacity-0 -translate-y-full transition -z-10 lg:z-10 lg:ml-8"
                        }`}
                    >
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                title="Strona Główna"
                                aria-label="Strona Główna"
                                className={
                                    navbar
                                        ? "font-semibold first-color text-sm hover-link transition-colors"
                                        : "font-semibold second-color text-sm hover-link transition-colors"
                                }
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                title="Projekty"
                                aria-label="Projekty"
                                className={
                                    navbar
                                        ? "font-semibold first-color text-sm hover-link transition-colors"
                                        : "font-semibold second-color text-sm hover-link transition-colors"
                                }
                                to="/projekty"
                            >
                                Projekty
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                title="Usługi"
                                aria-label="Usługi"
                                className={
                                    navbar
                                        ? "font-semibold first-color text-sm hover-link transition-colors"
                                        : "font-semibold second-color text-sm hover-link transition-colors"
                                }
                                to="/usługi"
                            >
                                Usługi
                            </Link>
                        </li>

                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                title="Blog"
                                aria-label="Blog"
                                className={
                                    navbar
                                        ? "font-semibold first-color text-sm hover-link transition-colors"
                                        : "font-semibold second-color text-sm hover-link transition-colors"
                                }
                                to="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                title="Kontakt"
                                aria-label="Kontakt"
                                className={
                                    navbar
                                        ? "font-semibold first-color text-sm hover-link transition-colors"
                                        : "font-semibold second-color text-sm hover-link transition-colors"
                                }
                                to="/kontakt"
                            >
                                Kontakt
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                title="Darmowa Wycena"
                                aria-label="Darmowa Wycena"
                                className="orange-btn"
                                to="/darmowa-wycena"
                            >
                                Darmowa Wycena
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
