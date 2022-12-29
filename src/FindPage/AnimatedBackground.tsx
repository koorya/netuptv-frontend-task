import { useState, useEffect } from 'react';
import { BackGround } from './FindPage.styled';

export const AnimatedBackground = (props: { urls: string[] }) => {
  const { urls } = props;
  const [idx, setIdx] = useState(0);
  const [className, setClassName] = useState('');

  useEffect(() => {
    const interval = setTimeout(() => {
      let new_idx = idx + 1;
      if (new_idx === urls.length) new_idx = 0;
      setIdx(new_idx);
      setClassName('animated_dark_05s');
      setTimeout(() => setClassName(''), 1_000);
    }, 5_000);
    return () => clearTimeout(interval);
  }, [idx]);

  return <BackGround url={urls[idx]} className={className} />;
};
