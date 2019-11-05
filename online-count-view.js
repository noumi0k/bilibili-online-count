window.onload = function(){
  setInterval("showOnlineCount()", 1000);
}

function showOnlineCount(){
    var mid = "452189" //チャンネルID
    var json = getJson(mid);
    console.log(json["data"]["online"]);
}

//ちゃんとブロックされててできなかった
function getJson(mid){
    fetch("https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=" + mid
    ,{
        mode: 'no-cors',
        credentials: 'include'
    })
        .then(async response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Request failed: ${response.status}`);
            }
        })
        .catch(err => console.error(err));
}