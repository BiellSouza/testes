function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("cepDatabase", 1);

    request.onerror = (event) => {
      reject("Database error: " + event.target.errorCode);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("ceps", { keyPath: "cep" });
    };
  });
}

export function saveCepData(cep, data) {
  openDatabase()
    .then((db) => {
      const transaction = db.transaction(["ceps"], "readwrite");
      const store = transaction.objectStore("ceps");
      store.put({ cep, data });
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
}

export function getCepData(cep) {
  return new Promise((resolve, reject) => {
    openDatabase()
      .then((db) => {
        const transaction = db.transaction(["ceps"], "readonly");
        const store = transaction.objectStore("ceps");
        const request = store.get(cep);

        request.onerror = (event) => {
          reject("Error retrieving data: " + event.target.errorCode);
        };

        request.onsuccess = (event) => {
          resolve(event.target.result);
        };
      })
      .catch((error) => {
        reject("Database error: " + error);
      });
  });
}
