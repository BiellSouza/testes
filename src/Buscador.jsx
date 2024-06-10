import React, { useState } from "react";

export default function Buscador() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    bairro: "",
    ddd: "",
    ibge: "",
    localidade: "",
    logradouro: "",
    uf: "",
    siafi: "",
  });

  const handleChange = (e) => {
    setCep(e.target.value);
  };

  const handleBlur = () => {
    const search = cep.replace("-", "");
    fetch(`https://viacep.com.br/ws/${search}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setAddress(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
  };

  return (
    <div id="buscador" className="bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10 py-[45px]"
      >
        <div className="">
          <div className="mb-4">
            <label htmlFor="cep" className="block text-gray-700 font-bold mb-2">
              CEP
            </label>
            <input
              type="text"
              id="cep"
              value={cep}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bairro"
              className="block text-gray-700 font-bold mb-2"
            >
              Bairro
            </label>
            <input
              type="text"
              id="bairro"
              value={address.bairro}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ddd" className="block text-gray-700 font-bold mb-2">
              DDD
            </label>
            <input
              type="text"
              id="ddd"
              value={address.ddd}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ibge"
              className="block text-gray-700 font-bold mb-2"
            >
              IBGE
            </label>
            <input
              type="text"
              id="ibge"
              value={address.ibge}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label
              htmlFor="localidade"
              className="block text-gray-700 font-bold mb-2"
            >
              Localidade
            </label>
            <input
              type="text"
              id="localidade"
              value={address.localidade}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="logradouro"
              className="block text-gray-700 font-bold mb-2"
            >
              Logradouro
            </label>
            <input
              type="text"
              id="logradouro"
              value={address.logradouro}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="uf" className="block text-gray-700 font-bold mb-2">
              UF
            </label>
            <input
              type="text"
              id="uf"
              value={address.uf}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="siafi"
              className="block text-gray-700 font-bold mb-2"
            >
              Siafi
            </label>
            <input
              type="text"
              id="siafi"
              value={address.siafi}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition duration-200"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
