
const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.width = 1280;
    canvas.height = 768;

    c.fillStyle = 'rgba(158,158,158,1)';
    c.fillRect(0, 0, canvas.width, canvas.height);

// add img

const image = new Image()
image.onload = () => {
        animate()
}
image.src = 'img/map.png';


// Placementbase 

const placementBase = [];
    
for (let i = 0; i<20; i++){
     placementBase.push (
        new PlacementBase({
            position:{x:i*64,y:0}}))
    for (let j = 1; j<12; j++){
        placementBase.push (
            new PlacementBase({
                position:{x:i*64,y:j*64}}))
    }
}


// enemies

const enemies = [];
for (i=0; i<10; i++){
    xoffset=64;
    enemies.push(new Enemy({position:{x:i*xoffset,y:332}}))
}

// Heroes Placement

const heroes = [];
let activeTile = undefined;


// function

function animate() {
    requestAnimationFrame(animate);
    c.drawImage(image, 0, 0);



// Draw Star-end tiles---------------------

    startTile = new StartTile({
        position:{
            x:0,
            y:320
        }});
    startTile.draw();

    endTile = new EndTile({
        position:{
            x:1216,
            y:320
        }});
    endTile.draw();
// ------------------------------------------

    placementBase.forEach((tile) => {
        tile.update(mouse);
    })
    

    enemies.forEach((unit) => {
        unit.update();
    })

    heroes.forEach((hero) => {
        hero.draw();
    })

    

    
}

// BFS -----------------------------------------
var queue = [];
const visited = [];
var nextQueue =[];
let reachEnd = false;
let mc = 0;


function bfs(mc){
    
   // push startTile to Visited and push startTile neighbors to queue
   for(let i=0; i<placementBase.length; i++){
        let curBase = placementBase[i];
        if(
            curBase.position.x == startTile.position.x &&
            curBase.position.y == startTile.position.y){

            visited.push(placementBase[i]);
            for(let j=0; j<placementBase[i].neighbors.length; j++){
                for(let k = 0; k < placementBase.length; k++){
                    
                    if (
                        placementBase[k].position.x == placementBase[i].neighbors[j].position.x   &&
                        placementBase[k].position.y == placementBase[i].neighbors[j].position.y 
                        ){
                            queue.push(placementBase[k]);
                        }
                }
            }
        }
   }
   // check reach end
   for(let i=0; i<visited.length; i++){
    if(
        visited[i].position.x == endTile.position.x &&
        visited[i].position.y == endTile.position.y
    ){
        reachEnd=true;
    }
   }
   // Searh path
    while(queue.length>0 && mc< 20){

        for(let i = 0; i < queue.length; i++){
            for(let j=0; j < queue[i].neighbors.length; j++){
                for(let k = 0; k < placementBase.length; k++){
                    
                    if (
                        placementBase[k].position.x == queue[i].neighbors[j].position.x   &&
                        placementBase[k].position.y == queue[i].neighbors[j].position.y   &&
                        
                        ){
                            nextQueue.push(placementBase[k]);
                            
                        }
                }
            }
        }

        for(let i=0; i<queue.length; i++){
            for(let j=0; j<visited.length; j++){
                if(
                    visited[j].position.x == queue[i].position.x &&
                    visited[j].position.y == queue[i].position.y
                ){
                    visited.splice(j,1);
                }
            }
            
            visited.push(queue[i]);
            queue.splice(i,1);
        }

        // queue = nextQueue;
        mc++;
    }



}
    
// mouse track

const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('click', (event) =>{
    if(activeTile){
        // Delete dupliacted
        if (heroes.length>0){
            for (let i=0;i<heroes.length;i++){
                const curHero=heroes[i];
                if(curHero.position.x == activeTile.position.x &&
                    curHero.position.y == activeTile.position.y){
                    heroes.splice(i,1);
                }
            }
        }



        // Push new hero
        heroes.push ( new Hero({
            position:{
                x:activeTile.position.x,
                y:activeTile.position.y
            }
        }))

        // Delete PlacmentBase.neighbor

        placementBase.forEach((base)=>{
            for (let i=0;i<base.neighbors.length;i++){
                const curNeighbor=base.neighbors[i];
                if(
                    curNeighbor.position.x == activeTile.position.x &&
                    curNeighbor.position.y == activeTile.position.y
                    ){
                        base.neighbors.splice(i,1);
                }
            }
        })

        // test click

        bfs();
        console.log(visited);
        console.log(queue);




    }
    
   
}
)

window.addEventListener('mousemove', (event) =>{
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    activeTile = null;
    
    for (i=0; i<placementBase.length; i++){
        const tile = placementBase[i];
        if(
            mouse.x > tile.position.x &&
            mouse.x < tile.position.x + tile.size &&
            mouse.y > tile.position.y &&
            mouse.y < tile.position.y + tile.size) {
                activeTile = tile;
                break;
            }
    }
}
)
