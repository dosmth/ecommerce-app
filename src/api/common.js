/*
ОБЩИЕ ФУНКЦИИ ДЛЯ ВСЕХ АПИ ОБРАБОТЧИКОВ
*/
function generateFetchMethod(method, data) {
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

export const postRequest = (fetchUrl, data) => {
  let fetchMethod = generateFetchMethod("POST", data);
  return fetch(fetchUrl, fetchMethod).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Что-то пошло не так...");
    }
  });
};

export const getRequest = (fetchUrl) => {
  let fetchMethod = generateFetchMethod("GET", "");
  return fetch(fetchUrl, fetchMethod).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Что-то пошло не так...");
    }
  });
};
