var database,game,form,player,gameState;
var playerCount=0;

function setup(){
    var canvas = createCanvas(400,400);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("");
}