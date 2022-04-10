var play=document.getElementById('play');
var audio=document.getElementById('audio');
var pause=document.getElementById('pause') ;
var btnstop=document.getElementById('stop');
var item =document.getElementById('item');
console.log(item);

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