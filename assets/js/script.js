setTimeout(function(){	
    	document.getElementById("tah_audio").play();
    }, 3000) ;

	
const muteButton = document.getElementById('mute');

function mute(){
  if(document.getElementById('tah_audio').muted == false){
	 document.getElementById('tah_audio').muted = true;
	 muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
		} else {
		  document.getElementById('tah_audio').muted = false;
		  muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i></i>';
		}

}
