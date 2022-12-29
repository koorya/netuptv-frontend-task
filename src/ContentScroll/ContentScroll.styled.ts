import styled from 'styled-components';

export const Container = styled.div`
  margin: 56px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 16px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
