import * as React from "react";
import { css, jsx } from "@emotion/react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import SectionLayout from "../../components/SectionLayout";

const SectionStyle = css`
    display: flex;
    padding: 0 48px 48px 48px;
    justify-content: space-between;
    align-items: center;
`;
const IntroParagraphStyle = css`
    width: 55%;
    height: 350px;
    color: #f7f8ff;

    h1 {
        font-size: 4rem;
        font-weight: bold;
        color: #ff8473;
        margin-bottom: 1.5rem;
    }

    p:first-of-type {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        font-style: italic;
    }

    p:last-of-type {
        font-size: 1.4rem;
        line-height: 1.8rem;
    }
`;

const PosterStyle = css`
    max-width: 400px;

    @media screen and (max-width: 720px) {
        max-width: 300px;
    }

    img {
        width: 100%;
    }
`;

const Intro = () => {
    return (
        <SectionLayout>
            <div css={SectionStyle}>
                <div css={PosterStyle}>
                    <StaticImage src="../images/poster.png" alt="Seinfeld poster" />
                </div>
                <div css={IntroParagraphStyle}>
                    <h1>
                        <Trans>SeinFeld</Trans>
                    </h1>
                    <p>What NOTHING really means</p>
                    <p>
                        <Trans>
                            The continuing misadventures of neurotic New York City
                            stand-up comedian Jerry Seinfeld and his equally neurotic New
                            York City friends.
                        </Trans>
                    </p>
                </div>
            </div>
        </SectionLayout>
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
