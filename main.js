const date = new Date("Jul 09, 2022 00:00").getTime();

var timer = setInterval(function() {
	const now = new Date().getTime();
	const distance = date - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("timer").innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;

	if(distance <= 0) {
		document.getElementById("timer").innerHTML = "The timer is gone"
	}
}, 1000);