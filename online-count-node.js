'use strict';

const cron = require('node-cron');
//毎秒実行
cron.schedule('*/1 * * * * *', () => {
	console.log(new Date());

	var https = require('https');
	var url = "https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=452189";
	var data = [];

	https.get(url, function (res) {
  		res.on('data', function(chunk) {
  			data.push(chunk);
  		}).on('end', function() {
			var events = Buffer.concat(data);
			try {
				var jsonData = JSON.parse(events)["data"];
				var onlineCount = jsonData["online"];
				var titleName = jsonData["title"]
				console.log(titleName);
				console.log("Online: " +onlineCount + "人");
			} catch(e) {
				console.log(e);
			}
		});
	});
});
