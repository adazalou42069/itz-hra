let Maze;

function setup() {
    getMaze();

}

function draw() {

}

async function getMaze() {
    let resp = (await (await fetch(`/maze`)).json());
    console.log("TCL: getMaze -> resp", resp)



}