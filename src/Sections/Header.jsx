import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaHome,
  FaInfoCircle,
  FaClipboardList,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="relative" id="inicio">
      <div className="flex flex-col w-full h-auto bg-green-800 gap-[20px] pb-[32px] ">
        <div className="flex justify-center gap-[10px]">
          <div className="flex justify-between w-[292px] h-auto py-[26px] font-poppins tela2:w-[350px] tela3:w-[375px] tela4:w-[564px] tela5:w-[676px] tela6:w-[922px]">
            <img
              className="flex h-auto max-h-[150px] self-center"
              src="src/assets/imgs/LogoTracking.png"
              alt="Logo"
            />

            <button onClick={toggleSidebar} className="flex self-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="15" />
                <rect x="20" y="30" width="60" height="10" rx="5" fill="#fff" />
                <rect x="20" y="45" width="60" height="10" rx="5" fill="#fff" />
                <rect x="20" y="60" width="60" height="10" rx="5" fill="#fff" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[292px] flex flex-col h-auto gap-[34px] bg-grey-500 tela2:w-[350px] tela3:w-[375px] tela4:w-[564px] tela5:w-[676px] tela6:w-[922px]">
            <h1 className="flex w-full h-[232px] text-[38px] text-white font-poppins tela2:h-auto">
              Apenas um aluno hoje, amanhã um profissional
            </h1>
            <p className="flex text-[16px] text-white font-poppins">
              Desenvolvemos essa ideia de projeto especialmente para ajudar
              profissionais nas áreas que envolvem localização
            </p>
            <div className="flex justify-center">
              <button className="flex justify-center items-center text-white font-poppins bg-blue-900 w-[122px] h-[58px] rounded-[50px] mb-4 cursor-pointer tela2:mb-0 hover:bg-white hover:text-blue-900 transition-colors">
                <ScrollLink
                  to="tracking"
                  smooth={true}
                  duration={500}
                  className="flex items-center"
                >
                  <span>Buscador</span>
                </ScrollLink>
              </button>
            </div>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-blue-800 w-64 z-20 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4">
            <img
              className="flex h-auto max-h-[100px] mx-auto"
              src="src/assets/imgs/LogoTracking.png"
              alt="Logo"
            />
          </div>
          <nav className="flex flex-col p-4 flex-grow">
            <ScrollLink
              to="inicio"
              smooth={true}
              duration={500}
              onClick={closeSidebar}
              className="mb-4 cursor-pointer flex items-center text-white"
            >
              <FaHome className="mr-2" /> Início
            </ScrollLink>
            <ScrollLink
              to="sobre-nos"
              smooth={true}
              duration={500}
              onClick={closeSidebar}
              className="mb-4 cursor-pointer flex items-center text-white"
            >
              <FaInfoCircle className="mr-2" /> Sobre nós
            </ScrollLink>
            <ScrollLink
              to="instrucoes"
              smooth={true}
              duration={500}
              onClick={closeSidebar}
              className="mb-4 cursor-pointer flex items-center text-white"
            >
              <FaClipboardList className="mr-2" /> Instruções
            </ScrollLink>
            <ScrollLink
              to="tracking"
              smooth={true}
              duration={500}
              onClick={closeSidebar}
              className="mb-4 cursor-pointer flex items-center text-white"
            >
              <FaMapMarkerAlt className="mr-2" /> Tracking
            </ScrollLink>
            <ScrollLink
              to="doacoes"
              smooth={true}
              duration={500}
              onClick={closeSidebar}
              className="mb-4 cursor-pointer flex items-center text-white"
            >
              <FaMapMarkerAlt className="mr-2" /> Doações
            </ScrollLink>
            <ScrollLink
              to="contato"
              smooth={true}
              duration={500}
              onClick={closeSidebar}
              className="mb-4 cursor-pointer flex items-center text-white"
            >
              <FaEnvelope className="mr-2" /> Contato
            </ScrollLink>
          </nav>
          <div className="p-4">
            <img
              className="flex h-auto max-h-[150px] mx-auto rounded-md"
              src="src/assets/imgs/imgGallery/grupo Projeto Integrador.jpg"
              alt="Your Photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
