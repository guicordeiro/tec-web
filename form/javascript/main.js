function setImagem (){
	var w = window.innerWidth;
	if(w >= 450){
		document.querySelector("#img-p").setAttribute('src', 'image/high-school-maker.png');
	} else {
		document.querySelector("#img-p").setAttribute('src', 'image/high-school-maker-black.png');
	}
}

setImagem();
$( window ).resize(function() {
	document.location.reload(setImagem());
 });