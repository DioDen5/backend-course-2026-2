const { URL } = require('url');
const date = "202202";
const reqUrl = new URL("NBUStatService/v1/statdirectory/res", "https://bank.gov.ua/");

reqUrl.searchParams.append("date", date);
reqUrl.searchParams.append("json", "");

console.log(reqUrl.toString());