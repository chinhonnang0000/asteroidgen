Events.on(ContentInitEvent, e => {
    Vars.content.planet("asteroidgen-alter").generator = space_to_coreZone; //to see if the script being executed. 
});
function aste(x,y,z)
{
    
};

var space_to_coreZone = extend(AsteroidGenerator,{
    generate()
    {
        var seed = 1082; var width=500; var height=500;    var i = 0; //counter. 
        var sx = 250, sy = 250;
        var rand = new Rand(seed);
        var background = Blocks.empty.asFloor(); 
        tiles.eachTile();
        aste(sx, sy, rand.random(30, 50));// does not work
        var amount = rand.random(3, 99);
        while(i < amount)
        {
            i = i+1; 
        }
    }
}); 

