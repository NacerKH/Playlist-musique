var play=document.getElementById('play');
var audio=document.getElementById('audio');
var pause=document.getElementById('pause') ;
var btnstop=document.getElementById('stop');
var item =document.getElementById('item');
var playlist =document.getElementById('playlist');

 const n = playlist.getElementsByTagName("div").length;

console.log(playlist.getElementsByTagName("value")[1].getAttribute('value'));

play.onclick = function() {playAudio()};
pause.onclick = function() {pauseAudio()};
btnstop.onclick = function() {stopAudio()};
playlist.onclick = function() {alert(playlist)};
function playAudio(){
    audio.play();
    play.classList.add("hide")
    pause.classList.add("display")
    
}
function pauseAudio(){
audio.pause();
play.classList.remove("hide")
    pause.classList.remove("display")
}
function stopAudio(){
    pauseAudio();
    audio.currentTime = 0;
}
function checkTrack(){
for (let i=0;pas < n ; i++){

}
    
}
function playlistSelect(){
    audio.src=playlist.getElementsByTagName("div")[2].getAttribute('value');
    playAudio();
}