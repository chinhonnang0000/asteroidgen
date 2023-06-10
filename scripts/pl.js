Events.on(ContentInitEvent, e => {
    Vars.content.planet("asteroidgen-alter").generator = space_to_coreZone; //to see if the script being executed. 
});

var space_to_coreZone = extend(AsteroidGenerator,{generate()
{
    var seed = state.rules.sector.planet.id;
    var sx = width/2, sy = height/2;
}}); 
