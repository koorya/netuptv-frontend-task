import { useState } from 'react';
import { ContentScroll } from '../ContentScroll/ContentScroll';
import { FindForm } from '../FindForm/FindForm';
import { Header } from '../header/Header';
import { useApi } from '../utils/useApi';
import { AnimatedBackground } from './AnimatedBackground';
import { FindPageContainer, Title } from './FindPage.styled';

export const FindPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { backgrounds, items } = useApi(searchValue);

  return (
    <FindPageContainer>
      <Header />
      <AnimatedBackground urls={backgrounds.map(({ url }) => url)} />
      <FindForm value={searchValue} setValue={setSearchValue} />
      <Title>in the spotlight</Title>
      <ContentScroll items={items} />
    </FindPageContainer>
  );
};
