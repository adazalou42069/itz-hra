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



     if (keyIsDown(LEFT_ARROW)) {
         if (!checkCol(speed, player.pos)) {
             player.move_x(-speed, player.pos, true);
         }

     }

     if (keyIsDown(RIGHT_ARROW)) {
         if (!checkCol(speed, player.pos)) {
             player.move_x(speed, player.pos, true);
         }
     }

     if (keyIsDown(UP_ARROW)) {
         if (checkCol(speed, player.pos)) {
             player.move_y(-speed, player.pos, false);
         }
     }

     if (keyIsDown(DOWN_ARROW)) {
         if (checkCol(speed, player.pos)) {
             player.move_y(speed, player.pos, false);
         }
     }


     if (frameCount % 5 == 0) {
         fr = frameRate().toFixed(2);
     }
     textSize(20);
     text(fr, 10, 20);

 }

 function checkCol(speed, pos, isX) {

     if (pos.x + speed + player.r > width) {
         return true;
     } else if (pos.x + speed<= 1) {
         return true;
     }
     let i = Math.floor(pos.x / cells[0].a);
     let j = Math.floor(pos.y / cells[0].a);


     let cell = cells[index(i, j, Math.floor(height / cells[0].a), Math.floor(width / cells[0].a))];
     let walls = cell.walls;

     console.log(cell.i, cell.j);

     if (isX) {
         if (walls[1]) {
             if (speed > 0) {
                 return pos.x + speed + player.r >= cell.x + a;
             }
         }
     }





 }

 function index(i, j, cols, rows) {
     if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1)
         return -1;

     return i + j * cols;
 }