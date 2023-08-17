import React from 'react';
import LyaoutAntigo from "../../assets/layout-antigo.png"
import { Link } from 'react-router-dom';


const HeaderAntigo = () => {


  return (
    <header className='container-antigo header-antigo'>
      <div className='content-antigo'>
        <nav className='navegacao'>
          <ul>
            <li className='nav-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/mais-coisas'>Mais</Link>
            </li>
            <li className='nav-item'>
              <Link to='/agradecimentos'>Agradecimentos</Link>
            </li>
          </ul>

        </nav>
        <img src={LyaoutAntigo} alt="" />
      </div>
    </header>
  )
}

export default HeaderAntigo;