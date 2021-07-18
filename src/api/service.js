import axios from "axios";

let BASE_RUL;

if (process.env.NODE_ENV === "production") {
  //正式环境网关代理后地址
  // BASE_RUL = "https://smartgate.baoan.gov.cn/fywzglz/bacovid/materials/"
  //正式环境内网ip地址
  // BASE_RUL = "http://10.99.85.234/bacovid/materials/"
  //测试环境地址
  BASE_RUL = "http://10.99.85.234/bacovid-test/materials/";
} else {
  //正式环境网关代理后地址
  // BASE_RUL = "https://smartgate.baoan.gov.cn/fywzglz/bacovid/materials/"
  //正式环境内网ip地址
  // BASE_RUL = "http://10.99.85.234/bacovid/materials/"
  //测试环境地址
  BASE_RUL = "http://10.99.85.234/bacovid/materials/";
}

const service = axios.create({
  baseURL: BASE_RUL
});

export { service };
