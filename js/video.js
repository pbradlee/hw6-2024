var video;

// PAGE LOAD
// Initialize the video element and turn off autoplay and turn off looping
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")

	video.autoplay=false;
	video.loop=false;

	console.log("Autoplay is set to "+ video.autoplay)
	console.log("Loop is set to "+ video.loop)
});

// PLAY BUTTON
// Play the video and update the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	let volume = video.volume * 100;

	console.log(volume);
	document.querySelector("#volume").textContent = volume + "%";
});

// PAUSE BUTTON
// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// SLOW DOWN
// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");

	let vidSpeed = video.playbackRate;
	video.playbackRate = vidSpeed * 0.9;
	console.log("New speed is "+ video.playbackRate);
});

// SPEED UP
// Increase the current video speed each time the button is clicked and log the new speed to the console. Change it by an amount proportional to the slow down. CHECK THIS!! If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");

	let vidSpeed = video.playbackRate;
	video.playbackRate = vidSpeed / 0.9;
	console.log("New speed is " + video.playbackRate);
});

// SKIP AHEAD
// Advance the current video by 10 seconds. If the video length has been exceeded go back to the start of the video - no farther. Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");

	let videoDuration = video.duration;
	let videoCurrentTime = video.currentTime;

	if ((videoCurrentTime + 10) <= videoDuration) {
		video.currentTime = videoCurrentTime + 10;
	}
	else {
		video.currentTime = 0;
	}

	console.log("Current time is " + video.currentTime);
});

// MUTE
// Mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute");

	if (video.muted) {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
	}
	else {
		console.log("Mute");
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
	}
});

// VOLUME SLIDER
// Change the volume based on the slider and update the volume information
document.querySelector("#slider").addEventListener("change", function() {
	console.log("Volume Change via Slider");
	let sliderValue = document.querySelector("#slider").value;

	console.log('The current volume is ' +sliderValue);
	video.volume = sliderValue / 100;
	document.querySelector("#volume").textContent = sliderValue + "%";
});

// STYLED
// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Style");

	video.classList.add("oldSchool");
});

// ORIGINAL
// Remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Style");

	video.classList.remove("oldSchool");
});



