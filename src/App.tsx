import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { FindPage } from './FindPage/FindPage';
import { Global } from './App.styled';

const App: React.FC = () => {
  return (
    <>
      <Global />
      <FindPage />
    </>
  );
};

export default App;
