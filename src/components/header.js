import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    const [showMenu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!showMenu);
    const closeMenu = () => setMenu(false);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
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
                    "absolute top-0 bg-transparent mx-auto transition-colors duration-200 w-full"
                }
            >
                <div
                    className={
                        !navbar
                            ? "h-full w-full mx-auto py-1 absolute top-0 -z-10 transition-colors duration-300"
                            : "h-full w-full mx-auto py-1 bg-white shadow-lg absolute top-0 -z-10 transition-colors duration-300"
                    }
                ></div>
                <nav
                    className={
                        showMenu
                            ? "max-w-screen-2xl mx-auto px-4 py-2 md:py-4 flex items-center justify-between w-full navTextColor bg-gray-900 transition-colors duration-100 z-50"
                            : "max-w-screen-2xl mx-auto px-4 py-2 md:py-2 flex items-center justify-between w-full navTextColor transition-colors duration-100 z-50"
                    }
                >
                    <Link
                        to="/"
                        className="flex items-center justify-center"
                        aria-label="logo"
                    >
                        <div className="h-auto w-10 ">
                            <StaticImage
                                quality={100}
                                className="h-full w-full"
                                loading="eager"
                                placeholder="blurred"
                                src="../assets/logoBrowser.png"
                            />
                        </div>
                        <p
                            className={
                                navbar
                                    ? "text-slate-500 ml-1 -tracking-wide transition-all duration-200 font-bold"
                                    : "text-gray-100 ml-1 tracking-wide transition-all duration-200 font-bold"
                            }
                        >
                            Seovileo
                        </p>
                    </Link>
                    <button
                        aria-label="Menu"
                        onClick={handleMenu}
                        className="group lg:hidden bg-gray-100 p-2.5 transition-colors duration-200 z-50 rounded-lg"
                    >
                        <div
                            className={
                                !showMenu
                                    ? "w-5 h-1 transition-all duration-200 bgLogoColor m-1 rounded-lg"
                                    : "w-5 h-1 transition-all duration-200 bgLogoColor m-1 translate-y-2 rotate-45 rounded-lg"
                            }
                        />
                        <div
                            className={
                                !showMenu
                                    ? "w-3 h-1 transition-all duration-200 bgLogoColor m-1 rounded-lg"
                                    : "w-3 h-1 transition-all duration-200 bgLogoColor m-1 opacity-0"
                            }
                        />
                        <div
                            className={
                                !showMenu
                                    ? "w-5 h-1 transition-all duration-200 bgLogoColor m-1 rounded-lg"
                                    : "w-5 h-1 transition-all duration-200 bgLogoColor m-1 -translate-y-2 -rotate-45 rounded-lg"
                            }
                        />
                    </button>
                    <ul
                        className={
                            showMenu
                                ? "absolute text-lg top-full left-0 pb-4 flex flex-col lg:static text-main text-center w-full bg-gray-900 opacity-100 transition duration-200 -translate-y-0 -z-10"
                                : "absolute top-full left-0 py-2 flex flex-col lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-end lg:top-0 lg:translate-y-0 lg:py-0 text-main text-center w-full opacity-0 -translate-y-full transition duration-100 -z-10 lg:z-10 lg:ml-8"
                        }
                    >
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                aria-label="Home"
                                className={
                                    navbar
                                        ? "font-semibold lg:text-gray-600 hoverLink link transition-colors duration-200"
                                        : "font-semibold hoverLink link transition-colors duration-200"
                                }
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                aria-label="portfolio"
                                className={
                                    navbar
                                        ? "font-semibold lg:text-gray-600 hoverLink link transition-colors duration-200"
                                        : "font-semibold hoverLink link transition-colors duration-200"
                                }
                                to="/projekty"
                            >
                                Projekty
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                aria-label="usługi"
                                className={
                                    navbar
                                        ? "font-semibold lg:text-gray-600 hoverLink link transition-colors duration-200"
                                        : "font-semibold hoverLink link transition-colors duration-200"
                                }
                                to="/usługi"
                            >
                                Usługi
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2 order-1 lg:order-0">
                            <Link
                                onClick={closeMenu}
                                aria-label="portfolio"
                                className={
                                    navbar
                                        ? "font-semibold text-amber-500 text-[14px] border border-amber-500 drop-shadow-md py-2 px-3 rounded-xl shadow-lg lg:ml-12 transition-colors duration-200"
                                        : "font-semibold text-amber-500 text-[14px] border border-amber-500 py-2 px-3 rounded-xl shadow-lg lg:ml-12 shadow-amber-500/30 transition-colors duration-200"
                                }
                                to="/darmowa-wycena"
                            >
                                Darmowa Wycena
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                aria-label="portfolio"
                                className={
                                    navbar
                                        ? "font-semibold lg:text-gray-600 hoverLink link transition-colors duration-200"
                                        : "font-semibold hoverLink link transition-colors duration-200"
                                }
                                to="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                aria-label="kontakt"
                                className={
                                    navbar
                                        ? "font-semibold lg:text-gray-600 hoverLink link transition-colors duration-200"
                                        : "font-semibold hoverLink link transition-colors duration-200"
                                }
                                to="/kontakt"
                            >
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
