// asignar un evento a un elemento
// event listener

const buttons = document.querySelectorAll('button');

buttons.forEach(
	button => button.addEventListener('click', playSound)
);


function playSound(event){
	const button = event.target;
	const note = button.dataset.note;

	// tener un elemento audio
	//obtener una referencia de dicho elemento
	//dar la orden de reproducción
	const audio= document.getElementById('audio'+note);
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}

//keyup
//keydown
//keypress
document.addEventListener('keydown', event => {
	const key = event.key;
	const button = document.querySelector(`button[data-key="${key}"]`);
	
	if (button)
		button.click(); //trigger
});