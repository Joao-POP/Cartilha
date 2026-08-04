var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 4;

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: (vw/16 * 9).toString(),
        width: vw.toString(),
        videoId: "p7ZsBPK656s", //placeholder for publicity video
        playerVars: {
            "playsinline": 1,
        },
    });
}
