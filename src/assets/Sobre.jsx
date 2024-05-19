import ImagensGaleriaSlides from "./ImagesGaleria";
import slide1 from "../../src/assets/Integrador/img1.jpeg";
import slide2 from "../../src/assets/Integrador/img2.jpeg";
// import slide3 from "../../src/assets/Integrador/img3.jpeg"
import slide4 from "../../src/assets/Integrador/img4.jpeg";
import slide5 from "../../src/assets/Integrador/img5.jpeg";

export default function Sobre() {
  return (
    <div id="sobre" className="flex items-center px-[3%] justify-between py-[45px]">
      <div className=" w-[45%]">
        <h1 className="font-bold text-[30px] text-gray-800 ">
          Nascimento do Projeto
        </h1>
        <h6 className="font-semibold text-[18px] text-gray-800">
          Nossa História
        </h6>
        <p className="text-[12px]">
          O projeto "Buscador de Endereços" foi desenvolvido por Gabriel,
          integrante do grupo Futuro Promissor, formado por jovens talentosos do
          SENAI São Gonçalo. A ideia surgiu durante uma conversa entre quatro
          membros do grupo, movidos pelo desejo de criar um projeto integrador
          que tivesse um impacto positivo na sociedade. Com isso em mente,
          decidiram focar em uma ferramenta que pudesse ajudar profissionais
          cuja principal função envolve a localização precisa de endereço. Esse
          site é uma ferramenta indispensável para entregadores, carteiros e
          qualquer outra pessoa que necessite encontrar endereços com eficiência
          e rapidez. O Buscador de Endereços foi projetado para ser intuitivo e
          fácil de usar, garantindo que os usuários possam encontrar as
          informações necessárias de forma rápida. O objetivo é proporcionar uma
          solução prática que auxilie esses profissionais em suas rotinas
          diárias, melhorando a precisão e a eficácia de suas entregas e
          serviços.
        </p>
      </div>
      <div className="w-[45%]">
        <ImagensGaleriaSlides
          slide1={slide1}
          slide2={slide2}
          // slide3={slide3}
          slide4={slide4}
          slide5={slide5}
        />
      </div>
    </div>
  );
}
