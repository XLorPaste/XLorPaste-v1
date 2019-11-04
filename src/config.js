export const appUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/"
    : "https://xlorpaste.cn/";

export const apiUrl =
  process.env.NODE_ENV === "development"
    ? "https://api.xlorpaste.cn/"
    : "https://api.xlorpaste.cn/";

export const LANG = {
  text: "text",
  cpp: "cpp",
  python: "python",
  java: "java",
  javascript: "js"
};

let RLANG = {};
for (let key in LANG) {
  RLANG[LANG[key]] = key;
}
export { RLANG };
