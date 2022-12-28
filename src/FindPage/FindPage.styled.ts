import styled from 'styled-components';

export const FindPageContainer = styled.div<{ url: string }>``;

export const BackGround = styled.div<{ url: string }>`
  background-color: rgba(35, 35, 35, 0.8);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &::after {
    content: ' ';
    z-index: -1;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    transition: background-image 0s 0.25s;
  }
`;
