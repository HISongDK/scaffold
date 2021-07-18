import axios from "axios";

let BASE_RUL;

if (process.env.NODE_ENV === "production") {
 BASE_RUL = "http://localhost:3000/api";
} else {
 BASE_RUL = "http://localhost:3000/api";
}

const service = axios.create({
  baseURL: BASE_RUL
});

export { service };
