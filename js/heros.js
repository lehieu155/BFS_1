class Hero{
    constructor({position={x:0,y:0}}){
        this.position = position;
        this.size =60;
        this.center = {
            x:this.position.x+32,
            y:this.position.y+32
        }
       

    //    this.projectiles =[
    //         new Projectile =(
    //             {position = {
    //                 x: this.position.x,
    //                 y: this.position.y
    //             }})
    //     ]
    }
    draw( ) {
        
        c.fillStyle = 'blue';
        c.fillRect(this.position.x+((64-this.size)/2), this.position.y+((64-this.size)/2), this.size, this.size);
        
    }
    shoot() {

    }

}

class Projectile{
    constructor({position={x:0,y:0}}){
        this.position = position;
        this.velocity = {x:0,y:0};
        this.center = {
            x:this.position.x+32,
            y:this.position.y+32
        }
        this.size = 5;
    }

    draw() {
        c.fillStyle = 'yellow';
        c.fillRect(this.center.x-(this.size/2), (this.center.y-(this.size/2)), this.size, this.size);
    }
    
    update() {
        this.draw();
    }
}
