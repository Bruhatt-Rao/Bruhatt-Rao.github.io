var parent;
// {'name': 'Benchmark', 'desc': 'A CLI tool built using python for benchmarking how long python files take to run', 'src': 'benchmark.png', 'link': 'https://github.com/Bhim-Rao/Benchmark'}, {'name': 'GameOfLife', 'desc': "A rust implementation of Conway's game of life using macroquad", 'src': 'gameoflife.png', 'link': 'https://github.com/Bhim-Rao/GameOfLife'}, {'name': 'GeneticAlgorithm', 'desc': 'An example of how a Genetic Algorithm works written in rust', 'src': 'geneticalgorithm.png', 'link': 'https://github.com/Bhim-Rao/GeneticAlgorithm'}, {'name': 'SandSim', 'desc': 'A basic 2d sand simulation written in Rust using macroquad', 'src': 'sandsim.png', 'link': 'https://github.com/Bhim-Rao/SandSim'}, {'name': 'Simple-Neural', 'desc': 'A python library to run a simple lightweight neural network', 'src': 'simple-neural.png', 'link': 'https://github.com/Bhim-Rao/Simple-Neural'}, {'name': 'Sorting', 'desc': 'an HTML Canvas Visualization of sorting algorithms', 'src': 'sorting.png', 'link': 'https://github.com/Bhim-Rao/Sorting'}, {'name': 'WindTunnel', 'desc': 'an HTML Canvas Visualization of a wind tunnel', 'src': 'windtunnel.png', 'link': 'https://github.com/Bhim-Rao/WindTunnel'}
var projects = [];
const blacklist = ["Bruhatt-Rao", "Bruhatt-Rao.github.io", "Volntr"];

function display(a , depth = false) {
    let l = sort(a);
    if (!depth) {
        depth = l.length;
    }
    parent = document.getElementById("projects");
    for (var i = 0; i < depth; i++) {
        l[i].show();
    }
}

class Project {
    constructor(key) {
        if (exists("assets/imgs/" + (key["name"]).toLowerCase() + ".png")) {
            this.name = key["name"]
            this.desc = key["description"]
            this.src  = (key["name"]).toLowerCase() + ".png"
            this.link = key["html_url"]
            this.date = new Date(key["updated_at"])
        } else {
            this.name = key["name"]
            this.desc = key["description"]
            this.src  = "example.png"
            this.link = key["html_url"]
            this.date = new Date(key["updated_at"])
        }
    }

    show() {
        if (this.name) {
            var proj = document.createElement('div');
            proj.className = 'card';
            proj.innerHTML = `
                <img src='assets/imgs/${this.src}' style='width:100%'>
                <h1>${this.name}</h1>\n<p class='description'>${this.desc}</p>
                <a href='${this.link}'>
                    <button>See More</button>
                </a>`;
            parent.appendChild(proj);
        }
    }
}

function get() {
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', "https://api.github.com/users/bruhatt-rao/repos", true);
    req.onload  = function() {
        var jsonResponse = JSON.parse(req.responseText);
        for (i=0; i<jsonResponse.length; i++) {
            var key = jsonResponse[i];
            if (!blacklist.includes(key["name"])) {
                projects.push(new Project(key));
            }
        }
        display(projects);
    };
    req.send(null);
}

function exists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function sort(l) {
    let a = l;
    while (true) {
        var swapped = false;
        for (i=0; i<a.length-1; i++) {
            if (a[i].date < a[i+1].date) {
                temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break; 
        }
    }
    return a;
}