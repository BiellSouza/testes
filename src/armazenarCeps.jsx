// src/utils.js
export const fetchAndStoreCepData = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        localStorage.setItem(cep, JSON.stringify(data));
      }
    } catch (error) {
      console.error(`Erro ao buscar o CEP ${cep}:`, error);
    }
  };
  
  export const preLoadCeps = async (ceps) => {
    for (const cep of ceps) {
      await fetchAndStoreCepData(cep);
    }
  };
  