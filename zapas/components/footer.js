import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => (
    <footer className="w-full flex flex-col items-center justify-center bg-gray-800 px-1 py-12 mt-12">
        <Link to="/" className="text-xl md:text-2xl hover:text-gray-50 transition-colors duration-200 lg:text-3xl font-semibold capitalize text-gray-300">
            seovileo
        </Link>
        <div className="flex items-center justify-center mt-2">
            <Link
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                to="/"
            >
                Home
            </Link>
            <Link
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200 ml-2 md:ml-3"
                to="/poradnik"
            >
                Poradnik
            </Link>
            <Link
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200 ml-2 md:ml-3"
                to="/portfolio"
            >
                Portfolio
            </Link>
            <Link
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200 ml-2 md:ml-3"
                to="/kontakt"
            >
                Kontakt
            </Link>
        </div>
        <div className="flex items-center justify-center mt-4">
            <Link to="https://www.facebook.com/profile.php?id=100090402000669">
                <StaticImage  className="hover:scale-110 transition-transform duration-200 h-auto w-8" src="../assets/socialMedia/facebook.png" />
            </Link>
            <Link to="https://www.instagram.com/seovileo/">
                <StaticImage
                    className="hover:scale-110 transition-transform duration-200 ml-2 md:ml-3 h-auto w-8"
                    src="../assets/socialMedia/instagram.png"
                />
            </Link>
            <Link to="https://twitter.com/seovileo">
                <StaticImage
                    className="hover:scale-110 transition-transform duration-200 ml-2 md:ml-3 h-auto w-8"
                    src="../assets/socialMedia/twitter.png"
                />
            </Link>
            <Link to="https://github.com/Nawija">
                <StaticImage
                    className="hover:scale-110 transition-transform duration-200 ml-2 md:ml-3 h-auto w-8"
                    src="../assets/socialMedia/github.png"
                />
            </Link>
        </div>
            <p className="mt-12 text-gray-400">© 2023 Seovileo —<Link to="https://seovileo.pl/" className="hover:text-gray-200 transition-colors duration-200">@seovileo.pl</Link></p>
    </footer>

);

export default Footer;
