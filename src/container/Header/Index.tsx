import * as React from "react"
import { graphql } from "gatsby";
import { css, jsx } from "@emotion/react"

import Tab from "../../components/Tab";

const HeaderStyle = css`
    width: 160px;
    height: 100vh;
    /* position: fixed; */
    background-color: #F7F8FF;
    color: #888EBA;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 30px;
    justify-content: center;
`


const Header = () => {
  return (
      <header css={HeaderStyle}>
        <Tab />
      </header>
  )
};

export default Header
