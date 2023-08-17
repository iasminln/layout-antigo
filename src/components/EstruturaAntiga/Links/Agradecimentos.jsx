import React from 'react';
import ImageGif from '../../../assets/sapo-caco.gif'


const Agradecimentos = () => {

  return (
    <div className='agradecimentos'>
      <p className='title-text'>Obrigada por ter chego tão longe!</p>

      <div className='div-image'>
        <img src={ImageGif} alt="Gif do sapo Caco dançando" />
      </div>

      <p className='normal-text'>Já fazia uns quase 10 anos que eu pensava em recriar essa página só para vê-la novamente. Obrigada por ter passeado comigo! 😊 </p>
    </div>
  )
}

export default Agradecimentos;