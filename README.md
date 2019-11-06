# bilibili-online-count

## 使い方
下記URLでアクセス。id=以下にチャンネルIDを表示<br>
`(ファイルがある場所)/onlineCount.html?id=○○○○○○`
https://space.bilibili.com/(ここがチャンネルID)/

※ online-count-node.jsいじる人はわかってる人だと思うので適当に使ってください。

## 事前準備(node.js版)
とりあえずnode環境整えてから下記でnode-cronを入れれば動くはず
$ npm init -y
$ npm i node-cron

## 各種ファイルの説明
### online-count-node.js
nodeでbilibiliの特定チャンネルの同時視聴者数データ取得<br>
データ取得可能。<br>
コンソールログで出力してるのでいい感じにいじって使う。<br>
今度返り値で返すようにする

### onlineCount.html
online-count-view.jsを動かすためのhtml

### online-count-view.js
素のJSでbilibiliの特定チャンネルの同時視聴者数データ取得<br>
データ取得不可。Access-Control-Allow-Originでブロックされてる。<br>
ブロック無視する設定をすればできるけど良心にまかせます。

