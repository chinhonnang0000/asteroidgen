var replace_space_with_coreZone = extend(AsteroidGenerator,
{
    generate()
    {
        var background = Blocks.empty.asFloor(); var i:int = 0;
        var seed = state.rules.sector.planet.id;
        var sx:int = width/2, sy = height/2;
        var ra = new Rand(seed); var amount:int = ra.random(min, max);
        
        while(i < amount)
        {
            i = i+1;
        }
    }
});
