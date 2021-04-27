class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1")
        title.html("car racing game")
        title.position(130,0)
        var input = createInput("Name")
        var button = createButton("play")
        input.position(130,160)
        button.position(250,200)
        button.mousePressed(function(){
            button.hide()
            input.hide()
            var name = input.value();
            playerCount = playerCount+1;
            player.update(name)
            player.updateCount(playerCount)
            var greetings = createElement("h3")
            greetings.html("welcome "+name)
            greetings.position(130,160);
        })
    }
}