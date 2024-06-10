export default function AboutUs() {
  return (
    <div
      className="w-full h-auto bg-blue-800 flex justify-center py-[26px] text-white"
      id="sobre-nos"
    >
      <div className="w-[292px] h-auto px-[px] py-[26px] font-poppins tela2:w-[350px] tela3:w-[375px] tela4:w-[564px] tela5:w-[676px] tela6:w-[922px]">
        <div className="flex flex-col justify-center gap-[15px] tela4:gap-[30px]">
          <h1 className="flex justify-center w-[292px] h-auto font-medium text-[30px] tela2:w-full">
            Como surgiu a ideia do Projeto
          </h1>
          <div className="w-[292px] h-auto flex flex-col gap-[20px] tela2:w-full ">
            <p>
              A equipe Futuro Promissor teve início no ano de 2023, na
              instituição de ensino Senai, em São Gonçalo. Do dia 03 de agosto
              de 2023 até o presente momento, 5 jovens da turma de administração
              decidiram se unir nessa trajetória.
            </p>
            <p>
              Em meio a provas escritas e práticas, foi sendo cada vez mais
              evidenciada a capacidade que tinham de trabalhar juntos em equipe,
              seja para criar projetos ou até mesmo para fornecer soluções para
              exercícios propostos.
            </p>
            <p>
              Ao se aproximar do final dessa jornada, a turma U632 teria um
              desafio grande pela frente, a criação de um projeto integrador. A
              intensão deles era desenvolver algo que fosse útil e que pudesse
              ajudar pessoas de alguma forma, e ao longo de várias conversas e
              ideias surgiu a proposta de criar um site que fosse preciso e que
              beneficiasse pessoas.
            </p>
          </div>
          <div className="flex ">
            <img
              className="rounded-[3%] flex"
              src="src/assets/imgs/imgGallery/grupo Projeto Integrador.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
