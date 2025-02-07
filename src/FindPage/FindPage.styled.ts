import styled from 'styled-components';

export const FindPageContainer = styled.div`
  display: flex;
  gap: 56px;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const BackGround = styled.div<{ url: string }>`
  z-index: -1;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(35, 35, 35, 0.8);
  background-image: url(${({ url }) => url});
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  transition: background-image 0s 0.25s;
`;

export const Title = styled.div`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;

  text-align: center;

  color: #ffffff;
`;
