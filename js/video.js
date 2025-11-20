let video = document.querySelector('video');

// Play Button
function play(){
	console.log("In play");

	video.play();
}

// Pause Button
function pause(){
	console.log("In pause");
	video.pause();
}

// Slower Button
function slower()
{
	console.log ("In Slower");
	console.log ("Current Speed is: ", video.playbackRate);
	video.playbackRate /= 1.1;
	console.log ("New speed is: ", video.playbackRate);
}


// Faster Button
function faster()
{
	console.log ("faster");
	console.log ("Current Speed is ", video.playbackRate);
	video.playbackRate *= 1.1;
	console.log ("Current Speed is ", video.playbackRate);
}

// SKip Button
function skip()
{
	console.log ("In Skip");
	console.log ("Current location is", video.currentTime);
	video.currentTime += 10;
	video.loop = true;

	console.log("New Location is:", video.currentTime);
}


// Mute Button
let audioButton = document.querySelector("#mute");
audioButton.addEventListener("click", function()
{
	video.muted = !video.muted;
})

// Audio Slider
let audioslide = document.querySelector("#slider")
slider.addEventListener("input", function()
{
	video.volume = slider.value / 100; // boom
	console.log("New audio:", video.volume)
})

// Vintage Button
let oldButton = document.querySelector("#vintage");
oldButton.addEventListener("click", function()
{
	video.classList.toggle("oldSchool", true);
});

// Original Button
let newButton = document.querySelector("#orig");
newButton.addEventListener("click", function()
{
	video.classList.toggle("oldSchool", false)
});

// Preload
video.autoplay = false;
video.loop = false;
