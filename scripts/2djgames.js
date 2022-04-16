/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://bbs4.2djgame.net/home/home.php?mod=task&do=apply&id=1`;
const method = `GET`;
const headers = {
'Cookie' : `dvVE_3b03_lastact=1649865874%09home.php%09task; dvVE_3b03_sid=F5555T; dvVE_3b03_noticeTitle=1; dvVE_3b03_sendmail=1; dvVE_3b03_member_login_status=1; dvVE_3b03_mobile=no; dvVE_3b03_onlineusernum=338; dvVE_3b03_ot_lastupdate=3351GpPp2uvYJL7Vxz%2BhHZiQ7IXYKEwgw%2BHzRidkLma4uPwABoU7; dvVE_3b03_ulastactivity=b7d9rDQKmTR79Z60hfImH%2FOkfWWE94byjbOQmfbB%2Fn8nYZim1Mtj; dvVE_3b03_visitedfid=44; dvVE_3b03_auth=4730zEXgG0AowPWpFCcrfX%2FpoHFZAASff1zmhGI359krprrSU6qeBZZ7aqbkEhnKn0vztxhwXCsMRNP65tA4v4SzvuY; dvVE_3b03_lastcheckfeed=327291%7C1648887546; dvVE_3b03_lastvisit=1648883932; dvVE_3b03_saltkey=B46eRbtM; dvVE_3b03_nofavfid=1`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
'Connection' : `keep-alive`,
'Referer' : `https://bbs4.2djgame.net/home/home.php?mod=task&do=view&id=1`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `bbs4.2djgame.net`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1`,
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
    $notify("2djgame签到完成");
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});