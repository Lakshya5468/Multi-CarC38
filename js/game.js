class Game {
    constructor(){

    }
    getState(){
        var refference=database.ref("gameState");
        refference.on("value", function(data){
            gameState=data.val();
        });
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        });
    }
    start(){
        if(gameState===0){
            form=new Form();

            console.log("test")
            form.display();
            player=new Player();
            player.getCount();
        }
    }
}