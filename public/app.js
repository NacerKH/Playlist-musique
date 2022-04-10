var play=document.getElementById('play');
var audio=document.getElementById('audio');
var pause=document.getElementById('pause') ;
var btnstop=document.getElementById('stop');
var item =document.getElementById('item');
var playlist =document.getElementById('playlist');
// var playlist = document.getElementsByTagName("div")[0];
console.log(playlist.getElementsByTagName("div")[0]);

play.onclick = function() {playAudio()};
pause.onclick = function() {pauseAudio()};
btnstop.onclick = function() {stopAudio()};
item.onclick = function() {playlistSelect()};
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
function playlistSelect(){
    audio.src=item.getAttribute('value');
    playAudio();
}