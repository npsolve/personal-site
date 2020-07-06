import React, { useCallback, useState } from 'react';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import styled from 'styled-components';
import 'react-medium-image-zoom/dist/styles.css';

const StyledFigcaption = styled.figcaption`
  text-align: right;
  font-size: 1.2rem;
  padding 0.25rem 0;
  text-transform: uppercase;
  color: #999;
`;

const ZoomImage = ({ src, width, alt, caption }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // const handleImgLoad = useCallback(() => {
  //   setIsZoomed(true);
  // }, []);

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <figure>
      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
        <img alt={alt} src={src} width="600" />
      </ControlledZoom>
      {caption && <StyledFigcaption>{caption}</StyledFigcaption>}
    </figure>
  );
};

export default ZoomImage;
