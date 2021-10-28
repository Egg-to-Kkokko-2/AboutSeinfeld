import React, {useState, useRef, useEffect} from "react"
import { css, jsx } from "@emotion/react"

import SectionLayout from "../../components/SectionLayout";

const TrailerWrapper = css`
  display: flex;
  justify-content: center;
`
const Trailer = () => {
  const tarilerRef = useRef<HTMLDivElement>(null);
  const [autoplay, setAutoPlay] = useState<number>(0);

  const onIntersect:IntersectionObserverCallback = ([entry], observer) => {
    if (entry.isIntersecting) {
      setAutoPlay(1);
    }
  };
 
  useEffect(() => {
    let observer: IntersectionObserver;
    if (tarilerRef.current && autoplay === 0) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(tarilerRef.current as Element);
    }
    
    return () => observer && observer.disconnect();
  }, [tarilerRef]);

  return (
    <SectionLayout>
      <div css={TrailerWrapper} ref={tarilerRef}>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/hQXKyIG_NS4?autoplay=${autoplay}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </SectionLayout>
  )
};

export default Trailer;
