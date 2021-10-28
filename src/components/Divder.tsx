import * as React from "react";
import { css, jsx } from "@emotion/react";

const DividerStyle = css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);

    svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 90px;
        transform: rotateY(180deg);

        path {
            fill: #ffffff;
        }
    }
`;

const Divider = () => {
    return (
        <div css={DividerStyle}>
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path d="M1200 0L0 0 892.25 114.72 1200 0z"></path>
            </svg>
        </div>
    );
};

export default Divider;
