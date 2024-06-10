import AccordionInstructions from "../components/Accordion";

export default function Instruction() {
  return (
    <div className="w-full h-auto flex justify-center py-[26px]" id="instrucoes">
      <div className="w-[292px] flex flex-col gap-[25px] font-poppins tela2:w-[350px] tela3:w-[375px] tela4:w-[564px] tela5:w-[676px] tela6:w-[922px]">
        <div className="text-[25px] flex justify-center">
          <h1 className="">Instruções</h1>
        </div>
        <div>
          <AccordionInstructions />
        </div>
      </div>
    </div>
  );
}
