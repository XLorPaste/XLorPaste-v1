import axios from "axios";
import { Base64 } from "js-base64";

import { apiUrl as baseURL, LANG, RLANG } from "./config";

const api = axios.create({
  baseURL
});

export function uploadCode(code, lang) {
  return api.post("/", {
    body: Base64.encodeURI(code),
    lang: LANG[lang]
  });
}

export async function getCode(token) {
  let { data } = await api.get(`/${token}`);
  if (data.lang in RLANG) {
    return {
      body: Base64.decode(data.body),
      lang: RLANG[data.lang]
    };
  } else {
    throw new Error("lang error");
  }
}
