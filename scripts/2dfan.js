
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://2dfan.com/checkins`;
const method = `POST`;
const headers = {
'X-Requested-With' : `XMLHttpRequest`,
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'X-CSRF-Token' : `4PhH2VrcInAB+Dwn4OJDaBxtxsT8435BqqINKn6smwjnoGn649Q7m8PpGxwUcPbPe9iI1RgRxwcMojrtGwNL2A==`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://2dfan.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : `_project_hgc_session=SHVCMWtOOFNkOEVWcnNnZnpuNkwrZGxaMVpFUnZ3MVFybS8yTFgvSS9ueVU2Ti92MFc0eVhZODhqWEliRDFzbmlPbEM4MS9IakJVbHliaE55MDlpTGVKMWl3d2FKL2k2cFpvZXlJdmlzTVljQnkvdktpS1RucU15TTRKY3RXYUlRYlk2NjFYNG5ESDdib0lpUWtzcWUyeXptcHdWSjRoVXVWOGtOaVEvd09UeUF3QkJ4UFNVWlZFS2pDQkc3WUk2LS1BK0kvd3c2TnNoTXFuOUZERkEzRzh3PT0%3D--f72fd67764fd4bd67856693140850a9f321dd97b; remember_me_token=eyJfcmFpbHMiOnsibWVzc2FnZSI6IklsSnpXV3BtYTBaMlgyWnpNMVpwYTNkUlVYTmhJZz09IiwiZXhwIjoiMjAyNC0wMy0wM1QxNTo0NjoyNy45OTFaIiwicHVyIjpudWxsfX0%3D--89e41f7734b1c358b1d3b4a50473258361a7d5cd`,
'Referer' : `https://2dfan.com/`,
'Host' : `2dfan.com`,
'Accept-Language' : `ja`,
'Accept' : `application/json, text/javascript, */*; q=0.01`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
