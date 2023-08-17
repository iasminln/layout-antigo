import React from 'react';
import Imagebody from '../../assets/body-layout-antigo.png'
import { Route, Routes } from 'react-router-dom';
import MaisCoisas from './Links/MaisCoisas';
import Agradecimentos from './Links/Agradecimentos';
import Home from './Links/Home';

const BodyAntigo = () => {


  return (
    <section className='container-antigo'>
      <img className='image-body' src={Imagebody} />

      <div className='body-antigo'>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/mais-coisas" element={<MaisCoisas />} />
          <Route path="/agradecimentos" element={<Agradecimentos />} />
        </Routes>
      </div>
    </section>
  )
}

export default BodyAntigo;