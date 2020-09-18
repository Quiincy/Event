const soundTrack = document.querySelectorAll('audio');
const buttons = document.querySelectorAll('.btn');


document.addEventListener('keydown', (event) => {
    soundTrack.forEach(function(element) {
    	if (element.id == event.keyCode) {
          element.classList.add('playing')
                setTimeout(() => {
                    element.classList.remove('playing')
                }, 120)
                element.currentTime = 0
               element.play()
    	}
    });
})


document.addEventListener('click', (event) => {
    const closestTarget = event.target.closest('.btn')
    if (closestTarget) {
        buttons.forEach(function goplay(element, index) {
            if (element.lastElementChild.innerText == event.path[1].lastElementChild.innerHTML) {
                buttons[index].classList.add('playing')
                setTimeout(() => {
                    buttons[index].classList.remove('playing')
                }, 120)
                soundTrack[index].currentTime = 0
                soundTrack[index].play()
            }
        });
        
    }
})

