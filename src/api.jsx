import { saveCepData, getCepData } from "./dataBase";

export async function fetchCepData(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function buscarCep(cep) {
  try {
    const localData = await getCepData(cep);
    if (localData) {
      return localData.data;
    } else {
      const data = await fetchCepData(cep);
      if (!data.erro) {
        saveCepData(cep, data);
      }
      return data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
