import * as React from "react";
import { graphql } from "gatsby";
import { css, jsx } from "@emotion/react";

import Header from "../container/Header/Index";
import Intro from "../container/Intro/Index";
import Trailer from "../container/Trailer/Index";
import Characters from "../container/Character/Index";
import "./index.css";

const Wrapper = css`
    display: flex;
`;

const IndexPage = () => {
    return (
        <div css={Wrapper}>
            <Header />
            <main>
                <Intro />
                <Trailer />
                <Characters />
            </main>
        </div>
    );
};

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
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

export default IndexPage;
