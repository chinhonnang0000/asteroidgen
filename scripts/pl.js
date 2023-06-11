Events.on(ContentInitEvent, e => {
    Vars.content.planet("asteroidgen-alter").generator = space_to_coreZone; //to see if the script being executed. 
});

var space_to_coreZone = extend(AsteroidGenerator,{
    generate()
    {
        var seed = 1082; var width=500; var height=500;    
        var sx = 250, sy = 250;
        var rand = new Rand(seed);
        var background = Blocks.empty.asFloor(); //tiles.eachTile(t -> t.setFloor(background));
        asteroid(sx, sy, rand.random(30, 50));
        var amount = rand.random(min, max);
    }
}); 

