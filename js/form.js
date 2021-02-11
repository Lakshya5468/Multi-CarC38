class Form{
    constructor(){

        
    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(100,10);

        var input=createInput("Write Name Here");
        input.position(100,200);

        var button=createButton("Play");
        button.position(100,250);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();

            playerCount=playerCount+1;
            player.updateCount(playerCount+1);

            player.update(name);

            var greeting=createElement('h3');
            greeting.html("Hello "+name);
            greeting.position(100,200);
        });
    }
}