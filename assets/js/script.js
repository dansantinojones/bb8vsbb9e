// function play() {
//     var audio = document.getElementById("audio");
//     audio.play();
// }

var a = document.getElementById("audio");
		function playaudio() {
			a.play();
		}
		function pauseaudio() {
			a.pause();
		}
		function stopaudio() {
			a.pause();
			a.currentTime = 0;
        }