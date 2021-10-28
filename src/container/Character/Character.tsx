import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css, jsx } from "@emotion/react"

type CharacterInfo = {
    name: string;
    describe: string;
    imgSrc: string;
};

const Character: React.FC<CharacterInfo> = ({ name, describe, imgSrc }) => {
  
  const data = useStaticQuery(graphql`
  {
    allImageSharp(
      filter: {fluid: {originalName: {in: ["jerry.png", "Kramer.png", "costanza.png", "elaine.png"]}}}
    ) {
      nodes {
        fluid {
          src
          srcSet
          originalName
        }
      }
    }
  }

  `);

  const image = data['allImageSharp']['nodes'].filter((node: Object) => node["fluid"]["originalName"] === imgSrc)
  console.log(image[0])
    
  return (
      <div>
          <div>
              <p>{describe}</p>
          </div>
      {image[0] && <img srcSet={image[0]['fluid']['srcSet']} alt={name} />}
          <p>{name}</p>
      </div>
  )
};

export default Character;
