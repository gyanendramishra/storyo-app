import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8082/", //import.meta.env.BASE_URL,
});

// set an HTTP-only cookie with name "myCookie" and value "myValue"
// document.cookie = "myCookie=myValue; HttpOnly";

// // read the value of the "myCookie" cookie
// const cookies = document.cookie.split("; ");
// for (let i = 0; i < cookies.length; i++) {
//   const [name, value] = cookies[i].split("=");
//   if (name === "myCookie") {
//     console.log(value); // "myValue"
//     break;
//   }
// }

/**
 * Intercept the response
 */
instance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      window.dispatchEvent(
        new CustomEvent("sessionExpired", { bubbles: true, cancelable: true })
      );
    }
    return response;
  },
  (error) => {
    if (
      error?.response &&
      error?.response?.data &&
      error?.response?.data?.status === 401
    ) {
      window.dispatchEvent(
        new CustomEvent("sessionExpired", { bubbles: true, cancelable: true })
      );
    } else {
      window.dispatchEvent(
        new CustomEvent("apiError", {
          bubbles: true,
          cancelable: true,
          detail: { error: error?.response?.data },
        })
      );
    }
    return Promise.reject(error);
  }
);

const api = async (options: any) => {
  const getToken = () => {
    return localStorage.getItem("token") || null;
  };

  if (!options.headers) options.headers = {};

  if (!options.method) {
    options.method = "POST";
  }

  const token = getToken();

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  } else {
    options.headers.Authorization = null;
  }

  try {
    const res = await instance(options);

    return res.data;
  } catch (err) {
    throw err;
  }
};

export default api;
