class Enemy{
    constructor({position = { x:0, y:0}}) {
        this.position = position;
        this.size = 40;

        this.center = {
            x:this.position.x+32,
            y:this.position.y+32
        }
    }

    draw( ) {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update( ) {
        this.draw();
        this.position.x += 1;
    }
}