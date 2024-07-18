var parent;
let projects = [{'name': 'Benchmark', 'desc': 'A python script to test how long another file takes to run', 'src': 'benchmark.png', 'link': 'https://github.com/Bhim-Rao/Benchmark'}, {'name': 'GameOfLife', 'desc': "A rust implementation of Conway's game of life using macroquad", 'src': 'gameoflife.png', 'link': 'https://github.com/Bhim-Rao/GameOfLife'}, {'name': 'GeneticAlgorithm', 'desc': 'An example of how a Genetic Algorithm works written in rust', 'src': 'geneticalgorithm.png', 'link': 'https://github.com/Bhim-Rao/GeneticAlgorithm'}, {'name': 'SandSim', 'desc': 'A sand simulation written in Rust', 'src': 'sandsim.png', 'link': 'https://github.com/Bhim-Rao/SandSim'}, {'name': 'Simple-Neural', 'desc': 'A python library to run a simple lightweight neural network', 'src': 'simple-neural.png', 'link': 'https://github.com/Bhim-Rao/Simple-Neural'}, {'name': 'Sorting', 'desc': 'an HTML Canvas Visualization of sorting algorithms', 'src': 'sorting.png', 'link': 'https://github.com/Bhim-Rao/sorting'}, {'name': 'WindTunnel', 'desc': 'an HTML Canvas Visualization of a wind tunnel', 'src': 'windtunnel.png', 'link': 'https://github.com/Bhim-Rao/windTunnel'}];

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
        this.src = d["src"];
        this.link = d["link"];
    }

    show() {
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