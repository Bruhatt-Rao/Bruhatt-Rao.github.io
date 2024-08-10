document.addEventListener("DOMContentLoaded", function() {
	set();
});

function dark() {
	var darkMode = localStorage.getItem("darkMode");
	if (darkMode == "false") {
		document.documentElement.style.setProperty('--main', '#121212');
		document.documentElement.style.setProperty('--secondary', '#fffcf2');
		localStorage.setItem("darkMode", true);
	} else {
		document.documentElement.style.setProperty('--secondary', '#121212');
		document.documentElement.style.setProperty('--main', '#fffcf2');
		localStorage.setItem("darkMode", false);
	}
}

function set() {
	var darkMode = localStorage.getItem("darkMode");
	if (darkMode == "true") {
		document.documentElement.style.setProperty('--main', '#121212');
		document.documentElement.style.setProperty('--secondary', '#fffcf2');
	} else {
		document.documentElement.style.setProperty('--secondary', '#121212');
		document.documentElement.style.setProperty('--main', '#fffcf2');
	}
}