const date = new Date("Jul 10, 2022 00:00").getTime();

var timer = setInterval(function() {
	const now = new Date().getTime();
	const distance = date - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

	if(distance <= 0) {
		document.getElementById("timer").innerHTML = "The timer is gone"
	}
}, 1000);