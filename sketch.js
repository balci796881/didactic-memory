var player,game,form;
var database;
var playerCount,gameState;
function setup(){
    createCanvas(400,400);
    database = firebase.database();
    game = new Game()
    game.getstate();
    game.start();
}
function draw(){
    background("gold")
}