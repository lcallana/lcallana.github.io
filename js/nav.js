
(function(){
	document.$class = document.getElementsByClassName;

	let scrolledDown = false;

	function nav() {
		let isOpen = false;
		document.$class('nav__toggle')[0].addEventListener('click', function() {
			let wrapper = document.$class('transform__wrapper')[0],
				header = document.$class('header')[0];

			isOpen = !isOpen;

			if (isOpen) {
				wrapper.classList.add('transform--left');
				header.classList.add('transform--left');
				return;
			}

			wrapper.classList.remove('transform--left');
			header.classList.remove('transform--left');
		});
	}

	function scroll() {
		if (window.scrollY > 50 && !scrolledDown) {
			let header = document.$class('header')[0],
				links = document.$class('nav__link'),
				len = links.length,
				i;

			header.classList.add('header--solid');
			for (i = 0; i < len; i++) {
				links[i].classList.add('nav__link--solid');
			}

			scrolledDown = true;
			return;	
		}

		if (window.scrollY <= 50 && scrolledDown) {
			let header = document.$class('header')[0],
				links = document.$class('nav__link'),
				len = links.length,
				i;

			header.classList.remove('header--solid');
			for (i = 0; i < len; i++) {
				links[i].classList.remove('nav__link--solid');
			}

			scrolledDown = false;
		}
	}

	window.onload = function() {
		nav();
		window.addEventListener('scroll', scroll);
		scroll();
	};
})();


