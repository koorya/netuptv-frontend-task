import styled from 'styled-components';
import { Button } from '../components/Button.styled';

export const Container = styled.div`
  width: 1127px;
  /* border: 1px red solid; */
  height: 56px;
  margin: 0px auto;
  margin-top: 196px;
  display: flex;
`;

export const FindInbut = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px 12px 24px;
  gap: 8px;

  width: 976px;
  height: 56px;

  /* Disablet */

  background: rgba(255, 255, 255, 0.1);
  /* Black 0 */

  border-width: 1px 0px 1px 1px;
  border-style: solid;
  border-color: #ffffff;
  border-radius: 4px 0px 0px 4px;

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: flex-start;
  text-align: left;
  &::placeholder {
    color: #6f6f6f;
  }

  &:focus {
    outline: none;

    background: rgba(255, 255, 255, 1);
  }
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
  transition: background-color 0.5s;
`;

export const FindButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;

  width: 151px;
  height: 56px;

  background: #09bb53;
  border-radius: 0px 4px 4px 0px;
  border-color: none;

  &:hover {
    border-color: rgba(2, 231, 48, 1);
  }

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;
