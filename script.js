var flexboxContainer = document.querySelector('.flexbox')
var bestBeoordeeld = document.querySelector('.bestrated')

bestBeoordeeld.addEventListener('click', function() {
    flexboxContainer.classList.toggle('gesorteerd')
})

var change = document.querySelector('#toggleDay'), // Switch licht donker
		body = document.querySelector('body');

function DayAndNight() {
	body.classList.toggle('night');
}

change.addEventListener('change', DayAndNight);

