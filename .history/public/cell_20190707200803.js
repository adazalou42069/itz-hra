class Cell {
    constructor(i, j, a,walls=[]) {
        this.a = a;
        this.i = i;
        this.j = j;
        this.x = this.i * a;
        this.y = this.j * a;
        this.walls = walls;
    }

    show() {
        stroke(255);
        //top
        if (this.walls[0])
            line(this.x, this.y, this.x + this.a, this.y);
        //right 
        if (this.walls[1])
            line(this.x + this.a, this.y, this.x + this.a, this.y + this.a);

        //bott
        if (this.walls[2])
            line(this.x + this.a, this.y + this.a, this.x, this.y + this.a);

        //left
        if (this.walls[3])
            line(this.x, this.y + this.a, this.x, this.y);

    }
}