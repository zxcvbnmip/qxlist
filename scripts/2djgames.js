// 文件名: 2djgame-task.js
// 需在 Surge 配置中添加以下规则：
// [Script]
// http-request ^https:\/\/bbs4\.2djgame\.net\/home\/home\.php\?mod=task script-path=2djgame-task.js

const targetURL = 'https://bbs4.2djgame.net/home/home.php?mod=task&do=apply&id=1';
const cookie = [
  'dvVE_3b03_lastact=1732790303%09home.php%09task',
  'dvVE_3b03_sid=CZelCL',
  'dvVE_3b03_noticeTitle=1',
  'dvVE_3b03_sendmail=1',
  'dvVE_3b03_member_login_status=1',
  'dvVE_3b03_mobile=no',
  'dvVE_3b03_auth=b050YRgiD1wJCEuFw4KMGCuRMuA1aLcCBkaahROpKve3Ot%2Bs7pWDuNQet6zr6BLu3fVaP0RvLqVVgb9nI9I6OOG9IMc',
  'dvVE_3b03_lastcheckfeed=327291%7C1732790261',
  'dvVE_3b03_ot_lastupdate=8b05vPCk5jiJMMhPVgQiBfjk1PodDtwBSytRY9ueojDm59BbPvba',
  'dvVE_3b03_ulastactivity=cd7cHIoeSFa6MBzAehzhH%2ByucLoVUeKsfrmnvSTtfHybBSOyHN6h',
  'dvVE_3b03_lastvisit=1732786650',
  'dvVE_3b03_onlineusernum=655',
  'dvVE_3b03_saltkey=HwBB4YLN',
  'dvVE_3b03_nofavfid=1'
].join('; ');

const headers = {
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Referer': 'https://bbs4.2djgame.net/home/home.php?mod=task&do=view&id=1',
  'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
  'Priority': 'u=0, i',
  'Cookie': cookie
};

$httpClient.get({
  url: targetURL,
  headers: headers
}, (error, response, data) => {
  if (error) {
    console.log(`请求失败: ${error}`);
    $done();
    return;
  }

  if (response.status === 302) {
    const location = response.headers['Location'];
    console.log(`检测到重定向: ${location}`);
    // 如果需要跟踪重定向，可以在此发起新的请求
  }

  console.log(`响应状态: ${response.status}`);
  console.log(`响应内容: ${data.substring(0, 100)}...`); // 限制日志长度
  $done();
});

// 如果需定时执行，可添加 cron 事件 (需 Surge iOS 4.9.3+)
// $event.on('cron', () => {
//   // 在此处放置需要定时执行的代码
// });