var name, desc, content;
var queryString, urlParams, index;

function loaded() {
	queryString = window.location.search;
	urlParams = new URLSearchParams(queryString);
	index = urlParams.get('post');
	console.log(index)
	get();
}

function display() {
	get_blogs();
}

function get() {
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', "/assets/data/blogs.json", true);
    req.onload  = function() {
        var jsonResponse = JSON.parse(req.responseText);
        if (index < jsonResponse.length) {
        	var key = jsonResponse[index];
        	document.getElementById("title").innerHTML = key["name"];
        	document.getElementById("desc").innerHTML = key["description"];
        	document.getElementById("markdown").innerHTML = MarkdownToHtml.parse(key["content"]);
        }
    };
    req.send(null);
}

function get_blogs() {
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', "/assets/data/blogs.json", true);
    req.onload  = function() {
        var jsonResponse = JSON.parse(req.responseText);
        parent = document.getElementById("blogs");
        for (var i = 0; i < jsonResponse.length; i++) {
        	var key = jsonResponse[i];
        	var proj = document.createElement('h1');
            proj.className = 'card_mini';
            proj.innerHTML = `<a href="/blog.html?post=${i}">${key["name"]}</a>`;
            parent.appendChild(proj);
        }
    };
    req.send(null);
}