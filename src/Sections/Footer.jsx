export default function Footer() {
  return (
    <div
      className="w-full h-[150px] flex flex-col justify-center items-center px-[26px] bg-green-700"
      id="contato"
    >
      <div className="w-[292px] flex flex-col items-center gap-[10px] text-white tela2:w-[350px] tela3:w-[375px] tela4:w-[640px] tela5:w-[676px] tela6:w-[922px]">
        <div className="w-[296px] h-[25px] flex justify-center tela2:w-full">
          <a href="#" className="flex items-center gap-[5px]">
            <ion-icon name="mail-outline"></ion-icon>futuropromissor@gmail.com
          </a>
        </div>
        <div className="w-[292px] h-auto flex justify-center">
          <a href="#" className="flex items-center gap-[5px]">
            <ion-icon name="logo-whatsapp"></ion-icon>(21)9726-13067
          </a>
        </div>
        <div className="w-[292px] h-auto flex justify-center">
          <p className="text-center">
            Agradecemos pela sua preferência em utilizar nosso sistema!
          </p>
        </div>
      </div>
    </div>
  );
}
