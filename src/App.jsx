import React from 'react';
import './css/style.scss'
import { HashRouter } from 'react-router-dom';
import HeaderAntigo from './components/EstruturaAntiga/HeaderAntigo';
import PlayerMusica from './components/EstruturaAntiga/PlayerMusica/PlayerMusica';
import BodyAntigo from './components/EstruturaAntiga/BodyAntigo';
import FooterAntigo from './components/EstruturaAntiga/FooterAntigo';


const App = () => {
  return (
    <>
      <HashRouter>
        <PlayerMusica />
        <div className='blog-inteiro'>
          <HeaderAntigo />
          <BodyAntigo />
          <FooterAntigo />
        </div>
      </HashRouter>
    </>
  );
};

export default App;
