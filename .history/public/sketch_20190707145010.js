
let Maze;


function setup() {
    getMaze();
    
}

function draw() {
    
}

async function getMaze() {
    Maze = (await (await fetch(`/maze`)).json());
    console.log(Maze.resp[0]);
}

