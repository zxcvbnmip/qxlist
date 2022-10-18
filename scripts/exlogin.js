
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://e-hentai.org/g/2351771/d11af2384b/`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `event=1665894957; hath_perks=a.t1.m1-f63353df51; sk=m1fc0l2d2dq38o4mkkipjelm9s9q; star=1-33ff113a66; ipb_member_id=6219189; ipb_pass_hash=0b27434112574de1b335f0d9694a0003`,
'Connection' : `keep-alive`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
'Host' : `e-hentai.org`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
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
    $notify('You gain 30 EXP, <>2,010</> Credits and <>2,000</> GP!')
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
