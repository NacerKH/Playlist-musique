var play=document.getElementById('play');
var audio=document.getElementById('audio');
var pause=document.getElementById('pause') ;
var btnstop=document.getElementById('stop');
var item =document.getElementById('item');
var playlist =document.getElementById('playlist');
var items = document.querySelectorAll('.item');
var n =playlist.getElementsByTagName("div").length-1;
var previousId=document.getElementById('previous');
var nextId=document.getElementById('next');
console.log(n);

play.onclick = function() {playAudio()};
pause.onclick = function() {pauseAudio()};
btnstop.onclick = function() {stopAudio()};
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

function playlistSelect(index){
    audio.src=playlist.getElementsByTagName("div")[index].getAttribute('value');
    console.log(audio.src)
    playAudio();
}
items.forEach(function (sandwich, index) {
    playlist.getElementsByTagName("div")[index].addEventListener('click', function (event) {
      
        playlistSelect(index)
      
    });
    previousId.addEventListener('click', function (event) {
      
        previous(index)
      
    });
   nextId.addEventListener('click', function (event) {
      
        next(index)
      
    });

});
function previous(index){

if (index > 0 && index < n ){
           index= index--;
        playlistSelect(index)

}
}
function next(index){

    if (index > 0 && index <= n ){
               index= index++;
            playlistSelect(index)
    
    }
    }