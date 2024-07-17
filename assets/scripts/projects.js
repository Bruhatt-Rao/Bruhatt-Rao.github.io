var parent;
let projects = [
	{
    	"name" : "Sorting Algorithm's", 
    	"desc" : "Sorting Algorithm visualizer built in Javascript using the HTML Canvas Library",
    	"link" : "https://bhim-rao.github.io/sorting/",
    	"src"  : "sorting.png"
	},
	{
    	"name" : "Conway's Game of Life", 
    	"desc" : "Conway's Game of life implemented in Rust using macroquad",
    	"link" : "https://bhim-rao.github.io/sorting/",
    	"src"  : "sorting.png"
	}
];

window.onload = function() {
	console.log("running");
	parent = document.getElementById("projects");
	p = [];
	for (var i = 0; i < projects.length; i++) {
		p.push(new Project(projects[i]));
	}
	for (var i = 0; i < p.length; i++) {
		p[i].show();
		console.log(p[i]);
	}
}

class Project {
	constructor(d) {
		this.name = d["name"];
		this.desc = d["desc"];
		this.src  = d["src"];
		this.link = d["link"];
	}

	show() {
		var proj = document.createElement('div');
		proj.className = 'card';
		proj.innerHTML = `
			<img src='assets/imgs/${this.src}' style='width:100%'>
			<h1>${this.name}</h1>\n<p>${this.desc}</p>
			<a href='${this.link}'><button>See More</button></a>`;
		parent.appendChild(proj);
	}
}