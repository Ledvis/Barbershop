var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-content-overlay");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-content-overlay-show");
	if (storage) {
		storage = login.value;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-content-error");
	overlay.classList.remove("modal-content-overlay-show");
});

form.addEventListener("submit", function (event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.add("modal-content-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-content-error");
			overlay.classList.remove("modal-content-overlay-show");
		}
	}
});

var linkMap = document.querySelector(".js-map");
var popupMap = document.querySelector(".modal-content-map");
var closeMap = popupMap.querySelector(".modal-content-close");

linkMap.addEventListener("click", function (event) {
	event.preventDefault();
	popupMap.classList.add("modal-map-show");
	overlay.classList.add("modal-content-overlay-show");
});

closeMap.addEventListener("click", function (event) {
	event.preventDefault();
	popupMap.classList.remove("modal-map-show");
	overlay.classList.remove("modal-content-overlay-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popupMap.classList.contains("modal-map-show")) {
			popupMap.classList.remove("modal-map-show");
			overlay.classList.remove("modal-content-overlay-show");
		}
	}
});
