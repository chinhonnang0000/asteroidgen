Events.on(ContentInitEvent, e => {
    Vars.content.planet("asteroidgen-alter").generator = space_to_coreZone; //to see if the script being executed. 
});
function asteroid(x,y,z)
{
    var floor = (rand.chance(iceChance) ? Blocks.ice :
    rand.chance(carbonChance) ? Blocks.carbonStone :
    rand.chance(berylChance) ? Blocks.beryllicStone :
    rand.chance(ferricChance) ? Blocks.ferricStone:Blocks.stone
    ).asFloor();
},

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

