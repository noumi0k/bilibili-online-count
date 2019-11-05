# bilibili-online-count

## online-count-node.js
nodeでbilibiliの特定チャンネルの同時視聴者数データ取得
データ取得可能。
コンソールログで出力してるのでいい感じにいじって使う。
今度返り値で返すようにする

## onlineCount.html
online-count-view.jsを動かすためのhtml

## online-count-view.js
素のJSでbilibiliの特定チャンネルの同時視聴者数データ取得
データ取得不可。Access-Control-Allow-Originでブロックされてる。
ブロック無視する設定をすればできるけど良心にまかせます。

## 使い方
下記URLでアクセス。id=以下にチャンネルIDを表示
(ファイルがある場所)/onlineCount.html?id=○○○○○○

https://space.bilibili.com/(ここがチャンネルID)/
