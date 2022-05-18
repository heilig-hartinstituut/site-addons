var captionOnOverlays = document.querySelectorAll('.caption-on-overlay');
for(var i = 0; i < captionOnOverlays.length; i++){
	var imageCaption = captionOnOverlays[i];
	var link = imageCaption.querySelector('a').href;
	imageCaption.onclick=function(){location.href=link;};	
}
