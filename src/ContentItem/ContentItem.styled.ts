import styled from 'styled-components';

export const Container = styled.div`
  color: white;
`;

export const Title = styled.h4`
  /* H4 */

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */

  /* Black 0 */

  color: #ffffff;
`;
export const Description = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: #a6a6a6;
`;
export const Genres = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  /* Black 0 */

  color: #ffffff;
`;

export const Button = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  width: 160px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  &::after {
    content: 'More details';
    display: block;
  }
  border: 2px lightgreen solid;
  color: lightgreen;
  &:hover {
    background-color: green;
  }

  /* align-self: center; */
  justify-self: center;

  margin: auto;
  margin-top: 160px;
`;

export const FlexBreak = styled.div`
  height: 0px;
  flex-basis: 100%;
`;

export const Poster = styled.div<{ poster: string; keyframe: string }>`
  overflow: hidden;
  flex-wrap: wrap;
  width: 368px;
  height: 208px;
  display: flex;
  gap: 16px;
  background-color: rgba(0, 0, 0, 0.3);
  background-image: url(${({ poster }) => poster});

  background-size: cover;
  padding: 8px;
  &:hover {
    background-image: url(${({ keyframe }) => keyframe});
    background-color: rgba(0, 0, 0, 0.4);
  }
  & div {
    transition: margin-top 0.5s;
    transition-timing-function: cubic-bezier(0.39, 0.575, 0, 1.2);
  }
  &:hover div {
    margin-top: -60px;
  }
  background-blend-mode: overlay;
  transition: background-image 0.5s, background-color 0.5s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0, 1.2);
`;

export const Label = styled.div`
  background: #de8b0f;
  color: #ffffff;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
  height: 28px;
`;

export const IMBDLabel = styled(Label)`
  background: #09bb53;
  font-weight: 700;
  &::before {
    content: 'IMDB';
    font-weight: 400;
  }
`;
