const { URL } = require('url');

const date = "20231001";
const time_period = "q";

const reqUrl = new URL("NBUStatService/v1/statdirectory/banks", "https://bank.gov.ua/");

reqUrl.searchParams.append("date", date);
reqUrl.searchParams.append("period", time_period);
reqUrl.searchParams.append("json", "");

console.log(reqUrl.toString().replace('json=', 'json'));
