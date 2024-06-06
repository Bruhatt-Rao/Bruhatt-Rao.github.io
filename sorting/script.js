var area, unsorted = [], temp, count, inter, sizeslider, size = 4, i2=0;

sort = bubble_sort;

var highend = 300 / size;
for (var i = 1; i <= highend; i++) {
    unsorted.push(i);
}

function step() {
    return ( 
        (
            ( 500 * (size / 10000) ) + 0.05
        ) * 700
    )
}

function reset() {
    size = sizeslider.value;
    i2 = 0;
    highend = 300 / size;
    unsorted = [];
    for (var i = 1; i <= highend; i++) {
        unsorted.push(i);
    }
    shuffle(unsorted);
    console.log(500/(size/1000));
    inter.stop();
    inter = new interval(function(){
        sort(unsorted);
    }, step())
    inter.run()
}

shuffle(unsorted);

function startGame() {
    area.start();
    sizeslider = document.getElementById("Size");
    size = sizeslider.value;
    sizeslider.oninput = reset;
    inter = new interval(function(){          sort(unsorted);
    },step())
    inter.run()
    //sort(unsorted);
}

var area = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.getElementById("display").appendChild(this.canvas);
    }
}

function draw(arr) {
    ctx = area.context;
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = "#f66c91";
    ctx.lineWidth = -0.4;
    ctx.strokeStyle="#222e46";
    for (i = 0; i < arr.length; i++) {
        ctx.fillRect(49 + i * size, 20, size, unsorted[i] * size);
        ctx.strokeRect(49 + i * size, 20, size, unsorted[i] * size);
    }
}

function bubble_sort(arr) {
    var count = 0;
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            count++;
            temp = arr[i];
            arr.splice(i, 1, arr[i + 1]);
            arr.splice(i + 1, 1, temp);
        }
    }
    if (count == 0) {
        console.log("ended");
        inter.stop();
    }
    draw(arr);
}

function insertion_sort(arr) {
    var count = 0;
    i2++;
    var key = arr[i2];
    var j = i2 - 1;
    while (j >= 0 && arr[j] < key) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }
    if (i2 < arr.length) {
        count++;
    }
    arr[j + 1] = key;
    if (count == 0) {
        console.log("ended");
        inter.stop();
    }
    draw(arr);
}

funcs = [bubble_sort, insertion_sort];

function switch_sort(i) {
    sort = funcs[i];
    reset();
}
