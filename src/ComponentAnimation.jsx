import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const TypingAnimation = () => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-[45px] font-bold ">
        <TypeAnimation
          sequence={[
            'Olá, amigo(a)!', 2000,
            'Bem-vindo ao Buscador de Endereços', 2000,
            'Encontre endereços rapidamente', 2000,
            () => {
              console.log('Sequence completed');
            }
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
        />
      </h1>
    </div>
  );
};

export default TypingAnimation;
