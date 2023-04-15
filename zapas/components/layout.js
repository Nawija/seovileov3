import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import ScrollUpIcon from "./scrollUpIcon";
import Footer from "./footer";
import Messenger from "./messenger";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className="relative">
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <main>{children}</main>

            <Footer />
            <Messenger />
            <ScrollUpIcon />
        </div>
    );
};

export default Layout;
