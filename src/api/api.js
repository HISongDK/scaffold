import { service } from "./service";

const Request = (url,params={},type="GET")=>{
  return new Promise((resolve,reject)=>{

    let promise;
    if (type==="GET") {
      promise = service.get(url,params)
    }else{
      promise = service.post(url,params)
    }

    promise.then(res=>{
      console.log("请求成功",res);
      resolve(res)
    }).catch(err=>{
      console.log("请求失败",err.message);
      reject(err)
    })
  })
}

export default Request;
