const soundTrack = document.querySelectorAll('audio');


document.addEventListener('keydown', (event) => {
    soundTrack.forEach(function(element) {
    	if (element.id == event.keyCode) {
    		element.play();
    	}
    });
})


const buttons = document.querySelectorAll('.btn');

document.addEventListener('click', (event) => {
    if (event.target.closest('.btn')) {
        buttons.forEach(function(element, index) {
            if (element.lastElementChild.innerText == event.path[1].lastElementChild.innerHTML) {
                soundTrack[index].play();
            }
        });
    }
})
