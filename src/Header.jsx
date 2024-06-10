import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="bg-gray-800 p-4 justify-between">
        <ul className="flex space-x-4 text-white justify-between">
          <li>
            <a href="#inicio" className="hover:opacity-[50%]">
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:opacity-[50%]">
              Sobre
            </a>
          </li>
          <li>
            <a href="#buscador" className="hover:opacity-[50%]">
              Buscador
            </a>
          </li>
          <li>
            <a href="index.html" className="hover:opacity-[50%]">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
