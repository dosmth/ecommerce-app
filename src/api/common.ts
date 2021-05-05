/*
ОБЩИЕ ФУНКЦИИ ДЛЯ ВСЕХ АПИ ОБРАБОТЧИКОВ
*/
function generateFetchMethod(method: string, data: any): Object {
  if (method == "POST") {
    return {
      mode: "cors",
      method: method,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };
  } else if (method == "GET") {
    return {
      mode: "cors",
      method: method,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
  }
}

// export const postRequest = (fetchUrl: string, data: any) => {
//   let fetchMethod = generateFetchMethod("POST", data);
//   return fetch(fetchUrl, fetchMethod).then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Что-то пошло не так...");
//     }
//   });
// };

export const getRequest = (fetchUrl: string) => {
  let fetchMethod = generateFetchMethod("GET", "");
  return fetch(fetchUrl, fetchMethod).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Что-то пошло не так...");
    }
  });
};
