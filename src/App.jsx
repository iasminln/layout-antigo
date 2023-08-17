import React from 'react';
import './css/style.scss'
import { HashRouter, Route, Routes } from 'react-router-dom';
import HeaderAntigo from './components/EstruturaAntiga/HeaderAntigo';
import PlayerMusica from './components/EstruturaAntiga/PlayerMusica/PlayerMusica';
import BodyAntigo from './components/EstruturaAntiga/BodyAntigo';
import MaisCoisas from './components/EstruturaAntiga/MaisCoisas';
import FooterAntigo from './components/EstruturaAntiga/FooterAntigo';


const App = () => {
  return (
    <>
      <HashRouter>
        <PlayerMusica />
        <HeaderAntigo />
        <Routes>
          <Route path="/*" element={<BodyAntigo />} />
          <Route path="/mais-coisas" element={<MaisCoisas />} />
        </Routes>
      </HashRouter>
      <FooterAntigo />
    </>
  );
};

export default App;
