
(function(){
	"use strict";

	function nav() {
		var isOpen = false;
		document.getElementsByClassName("menu__toggle")[0].addEventListener("click", function() {
			var 
				wrapper = document.getElementsByClassName("transform__wrapper")[0],
				header = document.getElementsByClassName("header")[0];

			isOpen = !isOpen;

			if (isOpen) {
				wrapper.classList.add("transform--left");
				header.classList.add("transform--left");
				return;
			}

			wrapper.classList.remove("transform--left");
			header.classList.remove("transform--left");
		});
	}

	function scroll() {
		var header = document.getElementsByClassName("header")[0];

		if (window.scrollY > 50) {
			header.classList.add("header--solid");
			return;	
		}

		header.classList.remove("header--solid");
	}

	window.onload = function() {
		nav();
		window.addEventListener('scroll', scroll);
		scroll();
	};
})();


