 class Boundary {
     constructor(x1, y1, x2, y2) {
         this.a = createVector(x1, y1);
         this.b = createVector(x2, y2);
     }
 }


 let maze;
 let cells = [];
 let fr = 0;
 let boundaries = [];
 let speed;

 function preload() {
     maze = loadJSON('/maze');
 }

 function setup() {
     createCanvas(800, 800);
     console.log(maze.cells);

     for (cell of maze.cells) {
         cells.push(new Cell(cell.i, cell.j, cell.a, cell.walls));
     }





     player = new Player(cells[0].i + cells[0].a / 2, cells[0].j + cells[0].a / 2);
     for (let c of cells) {
         if (c.walls[0]) {
             boundaries.push(new Boundary(c.x, c.y, c.x + c.a, c.y))
         }
         if (c.walls[1]) {
             boundaries.push(new Boundary(c.x + c.a, c.y, c.x + c.a, c.y + c.a));
         }
         if (c.walls[2]) {
             boundaries.push(new Boundary(c.x + c.a, c.y + c.a, c.x, c.y + c.a));
         }
         if (c.walls[3]) {
             boundaries.push(new Boundary(c.x, c.y + c.a, c.x, c.y));
         }

     }

     speed = 5;

 }



 function draw() {
     background(0);
     for (cell of cells) {
         cell.show();
     }

     player.show();
     player.look(boundaries);

     player.pos.x / cell[0].a;
     console.log("TCL: draw -> layer.pos.x / cell[0].a", player.pos.x / cells[0].a);

     if (keyIsDown(LEFT_ARROW)) {

         player.move_x(-speed);

     }

     if (keyIsDown(RIGHT_ARROW)) {
         player.move_x(speed);
     }

     if (keyIsDown(UP_ARROW)) {
         player.move_y(-speed);
     }

     if (keyIsDown(DOWN_ARROW)) {
         player.move_y(speed);
     }


     if (frameCount % 5 == 0) {
         fr = frameRate().toFixed(2);
     }
     textSize(20);
     text(fr, 10, 20);

 }