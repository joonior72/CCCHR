/******************
Drop-Downs
******************/
//Events Button
function eventsDropdown(){
	document.getElementById("eventsDropdown").classList.toggle("show");
}

window.onclick = function(event){
	if (!event.target.matches('.dropbtn')){
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for(i=0; i < dropdowns.length; i++){
			var openDropdown =dropdowns[i];
			if(openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}

//Members Button
function membersDropdown(){
	document.getElementById("membersDropdown").classList.toggle("show");
}

window.onclick = function(event){
	if (!event.target.matches('.dropbtn')){
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for(i=0; i < dropdowns.length; i++){
			var openDropdown =dropdowns[i];
			if(openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}

//Bylaws Button
function bylawsDropdown(){
	document.getElementById("bylawsDropdown").classList.toggle("show");
}

window.onclick = function(event){
	if (!event.target.matches('.dropbtn')){
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for(i=0; i < dropdowns.length; i++){
			var openDropdown =dropdowns[i];
			if(openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}

/******************
Banner Rotators
******************/
var curPicture = "picture1";

function changePicture(){
	if(curPicture == "picture4"){
		document.images[1].src = "img/DIABanner.jpg";
		curPicture = "picture1";
		document.getElementById("bannerLink").href = "https://www.facebook.com/DIA-Automotive-370850329467/";
	}
	else if(curPicture == "picture1"){
		document.images[1].src = "img/diygBanner.jpg";
		curPicture ="picture2";
		document.getElementById("bannerLink").href = "http://www.americandiyg.com";
	}
	else if(curPicture == "picture2"){
		document.images[1].src = "img/chadwickBanner.jpg";
		curPicture = "picture3";
		document.getElementById("bannerLink").href = "http://www.tripleplaycarcareva.com";
	}
	else if(curPicture == "picture3"){
		document.images[1].src = "img/baycity.png";
		curPicture = "picture4";
		document.getElementById("bannerLink").href = "http://www.facebook.com/baycityclassics";
	}
}

document.onload = setInterval(changePicture, 5000);