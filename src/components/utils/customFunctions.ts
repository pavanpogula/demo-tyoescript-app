const CryptoJS = require("crypto-js");


export const encrypt =  (key:string,secret:string):string =>{
    return CryptoJS.AES.encrypt(key, secret).toString();
}

export const decrypt = (key:string,sceret:string):string =>{
const decryptedValue =   CryptoJS.AES.decrypt(key, sceret);
  return  decryptedValue.toString(CryptoJS.enc.Utf8)
}