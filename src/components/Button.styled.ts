import styled from 'styled-components';

export const Button = styled.div`
  border: 1px rgba(2, 231, 48, 1) solid;
  cursor: pointer;

  color: rgba(171, 255, 206, 1);
  &:hover {
    background-color: rgba(0, 143, 60, 1);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  justify-self: center;
`;
