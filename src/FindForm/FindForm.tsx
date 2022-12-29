import { Container, FindButton, FindInbut } from './FindForm.styled';

import FindSvg from '../icons/find.svg';
export const FindForm = () => {
  return (
    <Container>
      <FindInbut placeholder='Search' />
      <FindButton>
        search
        <FindSvg />
      </FindButton>
    </Container>
  );
};
