
(function() {
	// Code from https://gist.github.com/andjosh/6764939
	let target = document.getElementById('scrollTarget');
	document.getElementById('scrollDown').onclick = function () {
	   scrollTo(document.body, target.offsetTop, 300);   
	}
		
	function scrollTo(element, to, duration) {
		let start = element.scrollTop,
			change = to - start,
			currentTime = 0,
			increment = 2;
			
		let scrollInterval = setInterval(function(){     
			currentTime += increment;
			var val = Math.easeInOutQuad(currentTime, start, change, duration);
			element.scrollTop = val;
			if(currentTime > duration) {
				clearInterval(scrollInterval);
			}
		}, increment);
	}

	//t = current time
	//b = start value
	//c = change in value
	//d = duration
	Math.easeInOutQuad = function (t, b, c, d) {
	  t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	};
})();