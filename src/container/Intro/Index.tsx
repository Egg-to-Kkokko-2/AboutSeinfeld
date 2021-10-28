import * as React from "react";
import { css, jsx } from "@emotion/react";
import { graphql } from "gatsby";
import LanguaageMenu from "./LanguageMenu";
import IntroSection from "./IntroSection";
import Divider from "../../components/Divder";

const IntroSectionWrapper = css`
    position: relative;
    background-color: #1c4ca0;
`;

const Intro = () => {
    return (
        <section css={IntroSectionWrapper}>
            <LanguaageMenu />
            <IntroSection />
            <Divider />
        </section>
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

export default Intro;
