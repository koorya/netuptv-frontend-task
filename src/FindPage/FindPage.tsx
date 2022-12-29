import { useEffect, useState } from 'react';
import { ContentScroll } from '../ContentScroll/ContentScroll';
import { FindForm } from '../FindForm/FindForm';
import { Header } from '../header/Header';
import { BackGround, FindPageContainer } from './FindPage.styled';

const urls = ['../../api/background/sherlok.jpg', '../../api/background/stranger_things.jpg'];

export const FindPage: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [className, setClassName] = useState('');

  useEffect(() => {
    // return;
    const interval = setTimeout(() => {
      let new_idx = idx + 1;
      if (new_idx === urls.length) new_idx = 0;
      setIdx(new_idx);
      setClassName('animated_dark_05s');
      setTimeout(() => setClassName(''), 1_000);
    }, 5_000);
    return () => clearTimeout(interval);
  }, [idx]);

  return (
    <FindPageContainer>
      <Header />
      <BackGround url={urls[idx]} className={className} />
      <FindForm />
      <ContentScroll />
    </FindPageContainer>
  );
};
