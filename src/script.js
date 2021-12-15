var cld = cloudinary.Cloudinary.new({ cloud_name: 'demo' });
var mainScreen = cld.videoPlayer('main-screen');
mainScreen.source("snow_deer");
var preview = cld.videoPlayers('.preview', {videojs: { bigPlayButton: false } });
var sources = ["snow_deer","sea_turtle","elephants" ];
for(var i = 0; i < preview.length; i++){
    preview[i].on("mouseover",function(event) {event.Player.play()});
    preview[i].on("mouseout",function(event) {event.Player.videojs.load()});
    preview[i].on("click",function(event) {playMain(event.Player.currentPublicId())});
    preview[i].source(sources[i], {transformation: {effect: "preview"}});   
}

function playMain(src) {
    mainScreen.source(src);
    mainScreen.controls(true);
    mainScreen.play();
}

























