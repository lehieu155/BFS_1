class Visited{
    constructor({position={x:0,y:0}}){
        this.position = position;
        this.size = 64;
        this.center = {
            x:this.position.x+this.size/2,
            y:this.position.y+this.size/2
        }
    }
    draw( ) {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}

class Queue{
    constructor({position={x:0,y:0}}){
        this.position = position;
        this.size = 64;
        this.center = {
            x:this.position.x+this.size/2,
            y:this.position.y+this.size/2
        }
    }
    draw( ) {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}