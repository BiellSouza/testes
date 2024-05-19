import TypingAnimation from "./ComponentAnimation";

export default function Inicio() {
  return (
    <div id="inicio" className="h-[50vh] flex items-center bg-gray-800">
      <div className="px-[2%] text-white">
        <TypingAnimation />
      </div>
    </div>
  );
}
