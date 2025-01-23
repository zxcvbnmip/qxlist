// 文件名: 2djgame-direct.js
const STORE_KEY = '2dj_cookies';

// 1. 直接读取原始 Cookie 字符串
const cookieHeader = $persistentStore.read(STORE_KEY);

// 2. 打印调试信息
// console.log("Test:",cookieHeader)


// 3. 直接发送请求
$httpClient.get({
  url: 'https://bbs4.2djgame.net/home/home.php?mod=task&do=apply&id=1',
  headers: {
    'Cookie': cookieHeader,
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1',
    'Referer': 'https://bbs4.2djgame.net/home/home.php?mod=task&do=view&id=1',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Priority': 'u=0, i'
  }
}, (error, response, data) => {
  console.log("🔥 响应状态码:", response?.status);
  console.log("🔥 响应头:", JSON.stringify(response?.headers));
  $done();
});