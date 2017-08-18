addOrClose = document.getElementById('addOrClose');
chat = document.getElementById('chat');
camera = document.getElementById('camera');
overlay = document.getElementById('overlay');

addOrClose.addEventListener("click", function(event){
 	console.log(addOrClose)
	state = addOrClose.getAttribute("data-state")
	if (state == "add") {
		addOrClose.style.animation = "addToClose 0.5s forwards";
		chat.style.animation = "chatOut 0.5s forwards";
		camera.style.animation = "cameraOut 0.5s forwards";
		overlay.style.animation = "overlayShow 0.5s forwards";
		addOrClose.setAttribute("data-state", "close")
	} else if (state == "close") {
		addOrClose.style.animation = "closeToAdd 0.5s forwards";
		chat.style.animation = "chatIn 0.5s forwards";
		camera.style.animation = "cameraIn 0.5s forwards";
		overlay.style.animation = "overlayHide 0.5s forwards";
		addOrClose.setAttribute("data-state", "add")
	}
});