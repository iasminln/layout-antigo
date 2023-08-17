import React from 'react';
import LyaoutAntigo from "../../assets/layout-antigo.png"
import { Link } from 'react-router-dom';


const HeaderAntigo = () => {


  return (
    <header className='container-antigo header-antigo'>
      <div className='content-antigo'>
        <div>
          <Link to='/mais-coisas'>Mais</Link>
        </div>
        <img src={LyaoutAntigo} alt="" />
      </div>
    </header>
  )
}

export default HeaderAntigo;