import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 72px;
  width: 100%;
  height: 56px;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12.5px);
`;
export const MenuStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  gap: 1px;

  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

export const MenuButtonStyled = styled.button`
  border: none;

  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 24px;
  gap: 8px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  background: none;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MenuButtonText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  font-family: 'Source Sans Pro';

  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const LogoStyled = styled.div`
  align-self: stretch;
  flex-grow: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const SubmenuStyled = styled.div`
  align-self: stretch;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 33px;
`;
export const MenuIconButtonStyled = styled(MenuButtonStyled)<{ isActive?: boolean }>`
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.35);
  }
  &::after {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    content: ' ';
    position: absolute;
    margin-left: 23px;
    margin-bottom: 30px;
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-color: green;
  }
`;
