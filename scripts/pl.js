Events.on(ContentInitEvent, e => {
    Vars.content.planet("asteroidgen-alter").generator = space_to_coreZone; //to see if the script being executed. 
});

var space_to_coreZone = extend(AsteroidGenerator,{generate()
{
    var seed = 1082;
    var sx = width/2, sy = height/2;
    var rand = new Rand(seed);
    var background = Blocks.empty.asFloor(); //tiles.eachTile(t -> t.setFloor(background));
}}); 

