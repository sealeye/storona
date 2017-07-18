$(document).ready(function () {
	$(document).on('mouseover mouseout', "a", function (e) {
		var href = $(this).attr('href');
		if (!href || href == '#') {
			return;
		}
		$("a")
			.filter('[href="' + $(this).attr('href') + '"]')
			.toggleClass("hover", e.type == 'mouseover');
	});
});

var calendar = document.querySelector('.calendar__button');

function calendarClick() {
	
var calendar = document.querySelector('.calendar__button');
var overlay = document.querySelector('.overlay');
	
	if (calendar.classList.contains('visible')) {
		calendar.classList.remove('visible');
		overlay.classList.add('overlay--hidden');
	} else {
		calendar.classList.add('visible');
		overlay.classList.remove('overlay--hidden');
	}
};

calendar.onclick = calendarClick;
