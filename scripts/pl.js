Events.on(ContentInitEvent, e => {
    Vars.content.planet("asteroidgen-alter").generator = space_to_coreZone(213123); //to see if the script being executed. 
});

function space_to_coreZone(seed_int)
{ 
    var astg = extend(AsteroidGenerator,{generate()
    {
        var seed = seed_int;
        var sx = width/2, sy = height/2;
        var rand = new Rand(seed);
        var background = Blocks.empty.asFloor(); //tiles.eachTile(t -> t.setFloor(background));
    }}); 
}
