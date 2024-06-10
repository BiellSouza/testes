// import React, { useState } from "react";
// import { buscarCep } from "../api";

// const CepSearch = () => {
//   const [cep, setCep] = useState("");
//   const [address, setAddress] = useState(null);
//   const [error, setError] = useState("");

//   const handleSearch = async () => {
//     setError("");
//     setAddress(null);
//     try {
//       const data = await buscarCep(cep);
//       if (data.erro) {
//         setError("CEP não encontrado.");
//       } else {
//         setAddress(data);
//       }
//     } catch (err) {
//       setError("Erro ao buscar o CEP.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4" id="tracking">
//       <h1 className="text-2xl font-bold mb-4">Buscador de CEP</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           className="border p-2 w-full"
//           placeholder="Digite o CEP"
//           value={cep}
//           onChange={(e) => setCep(e.target.value)}
//         />
//       </div>
//       <button
//         onClick={handleSearch}
//         className="bg-blue-500 text-white p-2 w-full"
//       >
//         Buscar
//       </button>
//       {error && <p className="text-red-500 mt-4">{error}</p>}
//       {address && (
//         <div className="mt-4 p-4 border rounded">
//           <p>
//             <strong>Logradouro:</strong> {address.logradouro}
//           </p>
//           <p>
//             <strong>Bairro:</strong> {address.bairro}
//           </p>
//           <p>
//             <strong>Cidade:</strong> {address.localidade}
//           </p>
//           <p>
//             <strong>Estado:</strong> {address.uf}
//           </p>
//           <p>
//             <strong>Ibge:</strong> {address.ibge}
//           </p>
//           <p>
//             <strong>Siafi:</strong> {address.siafi}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CepSearch;






import React, { useState } from "react";
import cepsData from "./Endereços";

const CepSearch = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const [error, setError] = useState("");

  const normalizeCep = (cep) => {
    return cep.replace("-", "");
  };

  const handleSearch = async () => {
    setError("");
    setAddress(null);
    const normalizedCep = normalizeCep(cep);

    console.log("Normalized CEP:", normalizedCep);

    // Verificar se os dados do CEP estão na lista local
    if (cepsData[normalizedCep]) {
      console.log("CEP encontrado na lista local.");
      setAddress(cepsData[normalizedCep]);
      return;
    }

    // Verificar se os dados do CEP estão no armazenamento local
    const cachedData = localStorage.getItem(normalizedCep);
    if (cachedData) {
      console.log("CEP encontrado no armazenamento local.");
      setAddress(JSON.parse(cachedData));
      return;
    }

    // Se não estiverem na lista local nem no armazenamento local, buscar online
    try {
      const response = await fetch(`https://viacep.com.br/ws/${normalizedCep}/json/`);
      const data = await response.json();
      if (data.erro) {
        setError("CEP não encontrado.");
      } else {
        console.log("CEP encontrado online, armazenando no localStorage.");
        setAddress(data);
        // Armazenar os dados do CEP no armazenamento local
        localStorage.setItem(normalizedCep, JSON.stringify(data));
      }
    } catch (err) {
      setError("Erro ao buscar o CEP.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4" id="tracking">
      <h1 className="text-2xl font-bold mb-4">Tracking</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 w-full"
      >
        Buscar
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {address && (
        <div className="mt-4 p-4 border rounded">
          <p><strong>Logradouro:</strong> {address.logradouro}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade}</p>
          <p><strong>Estado:</strong> {address.uf}</p>
          <p><strong>Ibge:</strong> {address.ibge}</p>
          <p><strong>Siafi:</strong> {address.siafi}</p>
        </div>
      )}
    </div>
  );
};

export default CepSearch;
