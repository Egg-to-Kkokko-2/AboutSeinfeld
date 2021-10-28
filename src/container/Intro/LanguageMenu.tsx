import * as React from "react";
import { css, jsx } from "@emotion/react";
import { graphql } from "gatsby";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

const LanguageMenuStyle = css`
    height: 5vh;
    padding: 0 48px;
    display: flex;
    align-items: flex-end;
    color: white;
    align-items: center;
    gap: 20px;
    font-size: 1.1rem;
`;

const LanguaageMenu = () => {
    const { languages, originalPath } = useI18next();

    return (
        <nav>
            <ul className="languages" css={LanguageMenuStyle}>
                {languages.map(lng => (
                    <li key={lng}>
                        <Link to={originalPath} language={lng}>
                            {lng}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(
            filter: { ns: { in: "IntroSection" }, language: { eq: $language } }
        ) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;

export default LanguaageMenu;
