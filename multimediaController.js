
var videoPlayer = document.getElementById("videoPlayer");
vid.currentTime = 0;
videoPlayer.volume = 0.5;

function playVideo(){

    videoPlayer.play();

}


function pauseVideo(){
     videoPlayer.pause();   
}

function restartVideo(){
     videoPlayer.load();
            

}

