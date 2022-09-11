class PlacementBase{
    constructor({position = {x:0,y:0}}){
        this.position = position;


    // Creatate Neighbors
        this.neighbors = [];

        this.neighbors.push(new Neighbor({
            position:{
                x:this.position.x-64,
                y:this.position.y
           }}))
           this.neighbors.push(new Neighbor({
            position:{
                x:this.position.x+ 64,
                y:this.position.y
           }}))
           this.neighbors.push(new Neighbor({
            position:{
                x:this.position.x,
                y:this.position.y-64
           }}))
           this.neighbors.push(new Neighbor({
            position:{
                x:this.position.x,
                y:this.position.y+64
           }}))

        for(let i=0; i<this.neighbors.length; i++){
            const neighbor = this.neighbors[i];
            if (
                neighbor.position.x < 0 ||
                neighbor.position.x > 1216 ||
                neighbor.position.y < 0 ||
                neighbor.position.y > 704
                ){
                    this.neighbors.splice(i,1);
                }
            }
    // ----------------------------------------------


    this.size = 64;
        this.center = {
            x:this.position.x+this.size/2,
            y:this.position.y+this.size/2
        }
        
        this.sizeC = 62;
        this.color = 'rgba(255, 255, 255, 0.15)'
    }
    draw(){
        
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
    drawCenter(){
        c.fillStyle = 'blue';
        c.fillRect(this.center.x-(this.sizeC/2), (this.center.y-(this.sizeC/2)), this.sizeC, this.sizeC);
    }


    update(mouse){
        this.draw();
        
        // this.neighbors.forEach((neighbor) => {
        //     if (
        //         this.neighbor.position.x < 0 &&
        //         this.neighbor.position.x > 1216 &&
        //         this.neighbor.position.y < 0 &&
        //         this.neighbor.position.y > 704
        //         ){

        //         }
        // })

        if(
            mouse.x > this.position.x &&
            mouse.x < this.position.x + this.size &&
            mouse.y > this.position.y &&
            mouse.y < this.position.y + this.size) {
                this.color = 'rgba(255, 255, 255, 0.5)'
            }
        else {
            this.color = 'rgba(255, 255, 255, 0.15)'
        }
    }

    
    
}

class Neighbor {
    constructor({position = {x:0,y:0}}){
        this.position = position;
        this.size=64;
        this.center = {
            x:this.position.x+32,
            y:this.position.y+32
        }
    }
}

class StartTile{
    constructor({position = {x:0,y:0}}){
        this.position = position;
        this.center = {
            x:this.position.x+this.size/2,
            y:this.position.y+this.size/2
        }
        this.size = 64;
        this.color = 'rgba(255, 255, 255, 1)'

           // Creatate Neighbors
           this.neighbors = [];

           this.neighbors.push(new Neighbor({
               position:{
                   x:this.position.x-64,
                   y:this.position.y
              }}))
              this.neighbors.push(new Neighbor({
               position:{
                   x:this.position.x+ 64,
                   y:this.position.y
              }}))
              this.neighbors.push(new Neighbor({
               position:{
                   x:this.position.x,
                   y:this.position.y-64
              }}))
              this.neighbors.push(new Neighbor({
               position:{
                   x:this.position.x,
                   y:this.position.y+64
              }}))
   
           for(let i=0; i<this.neighbors.length; i++){
               const neighbor = this.neighbors[i];
               if (
                   neighbor.position.x < 0 ||
                   neighbor.position.x > 1216 ||
                   neighbor.position.y < 0 ||
                   neighbor.position.y > 704
                   ){
                       this.neighbors.splice(i,1);
                   }
               }
       // ----------------------------------------------
   
    }
    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}

class EndTile{
    constructor({position = {x:0,y:0}}){
        this.position = position;
        this.center = {
            x:this.position.x+this.size/2,
            y:this.position.y+this.size/2
        }
        this.size = 64;
        this.color = 'rgba(0, 0, 0, 1)'

           // Creatate Neighbors
           this.neighbors = [];

           this.neighbors.push(new Neighbor({
               position:{
                   x:this.position.x-64,
                   y:this.position.y
              }}))
              this.neighbors.push(new Neighbor({
               position:{
                   x:this.position.x+ 64,
                   y:this.position.y
              }}))
              this.neighbors.push(new Neighbor({
               position:{
                   x:this.position.x,
                   y:this.position.y-64
              }}))
              this.neighbors.push(new Neighbor({
               position:{
                   x:this.position.x,
                   y:this.position.y+64
              }}))
   
           for(let i=0; i<this.neighbors.length; i++){
               const neighbor = this.neighbors[i];
               if (
                   neighbor.position.x < 0 ||
                   neighbor.position.x > 1216 ||
                   neighbor.position.y < 0 ||
                   neighbor.position.y > 704
                   ){
                       this.neighbors.splice(i,1);
                   }
               }
       // ----------------------------------------------
   
    }
    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}