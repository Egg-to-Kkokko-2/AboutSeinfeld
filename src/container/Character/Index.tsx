import * as React from "react";
import { graphql } from "gatsby";
import { css, jsx } from "@emotion/react";

import SectionLayout from "../../components/SectionLayout";
import Character from "./Character";

const CharacterWrapper = css``;

const Characters = () => {
    const characters = [
        {
            name: "제리 사인필드",
            describe:
                "실제로도, 그리고 극중에서도 스탠드업 코미디언으로 등장한다. 평소 벅스 버니를 즐겨보는 유치한 성격의 소유자지만, 친구가 부탁을 하면 잘 들어주며 사인 필드 세계관 속에서 이야기의 흐름을 이끌어간다.",
            imgSrc: "jerry.png"
        },
        {
            name: "일레인 베네스",
            describe:
                "제리와 옛 연인이자 친한 친구다. IQ가 150 이상으로 상당히 똑똑하지만, 가끔 특이한 행동을 할 때가 있다.  ",
            imgSrc: "elaine.png"
        },
        {
            name: "조지 코스탄자",
            describe:
                "제리와는 고등학교 친구이다. 질투심이 많고, 자신의 능력에 대한 자신감이 많이 부족한 편이다. 처음 보는 인물에게는 자신의 지위를 속이는 경향이 있다.",
            imgSrc: "costanza.png"
        },
        {
            name: "코스모 크레이머",
            describe:
                "제리의 앞집에 사는 이웃이다. 남의 눈치를 안 보며, 하고 싶은 일이 있으면 즉시 실행으로 옮기는 편이다. 평소에는 충동적이고 덤벙거리지만, 가끔 카리스마를 보여줄 때가 있다.",
            imgSrc: "kramer.png"
        }
    ];

    return (
        <SectionLayout>
            <h2>등장인물</h2>
            {characters.map(character => (
                <Character
                    name={character.name}
                    describe={character.describe}
                    imgSrc={character.imgSrc}
                />
            ))}
        </SectionLayout>
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

export default Characters;
