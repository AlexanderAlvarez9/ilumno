import React from 'react';
import './Success.scss';
import success from '../../assets/imgs/Success.png';

const Success = () => {
  return (
    <div className="message">
      <img className="message__image" src={success} alt="" />
      <h1 className="message__title">
        Estamos realizando tu cotizacion, y te la enviaremos lo mas pronto
        posible.
      </h1>
    </div>
  );
};

export default Success;
