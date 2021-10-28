import * as React from 'react'
import { css, jsx  } from "@emotion/react"
import { Link } from 'gatsby'

const LayoutStyle = css`
  min-height: 600px;
    display: flex;
    align-content: stretch;
    align-items: center;
    justify-content: center;
`

const SectionLayout: React.FC = ({ children }) => (
  <section css={LayoutStyle}>
    {children}
  </section>
)
export default SectionLayout