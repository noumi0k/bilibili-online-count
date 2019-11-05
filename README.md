# bilibili-online-count

## online-count-node.js
nodeでbilibiliの特定チャンネルの同時視聴者数データ取得<br>
データ取得可能。<br>
コンソールログで出力してるのでいい感じにいじって使う。<br>
今度返り値で返すようにする

## onlineCount.html
online-count-view.jsを動かすためのhtml

## online-count-view.js
素のJSでbilibiliの特定チャンネルの同時視聴者数データ取得<br>
データ取得不可。Access-Control-Allow-Originでブロックされてる。<br>
ブロック無視する設定をすればできるけど良心にまかせます。

## 使い方
下記URLでアクセス。id=以下にチャンネルIDを表示<br>
`(ファイルがある場所)/onlineCount.html?id=○○○○○○`

https://space.bilibili.com/(ここがチャンネルID)/
