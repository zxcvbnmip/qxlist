// 文件名: 2djgame-checkin-final.js
const STORE_KEY = '2dj_cookies';

$httpClient.get({
  url: 'https://bbs4.2djgame.net/home/home.php?mod=task&do=apply&id=1',
  headers: {
    'Cookie': $persistentStore.read(STORE_KEY),
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1',
    'Referer': 'https://bbs4.2djgame.net/home/home.php?mod=task&do=view&id=1'
  }
}, (error, response, data) => {
  // 提取积分信息 (优化正则兼容不同空格)
  const pointsMatch = data.match(/積分[\s:：]*(\d+)[,，]\s*距離下一級還需[\s:：]*(\d+)/);
  let noticeMessage = '';
  
  // 构建通知内容
  if (pointsMatch) {
    noticeMessage = `✅ 當前積分：${pointsMatch[1]} | 🎯 升級需要：${pointsMatch[2]}`;
    console.log(`积分数据：${pointsMatch[1]} | 需要积分：${pointsMatch[2]}`);
  }

  // 检测签到状态
  if (/您已申請過此任務/.test(data)) {
    console.log("签到状态：重复签到");
    $notification.post('⚠️ 2DJGAME 重复签到', noticeMessage, '');
  } else if (/任務已成功完成/.test(data)) {
    console.log("签到状态：签到成功");
    $notification.post('🎉 2DJGAME 签到成功', noticeMessage, '');
  } else {
    console.log("签到状态：未知状态");
    $notification.post('❓ 2DJGAME 签到异常', '请查看控制台日志', '');
  }

  $done();
});