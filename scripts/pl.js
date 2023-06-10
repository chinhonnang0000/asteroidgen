Events.on(ContentInitEvent, e => {
    Vars.content.planet("asteroidgen-alter").generator = new ErekirPlanetGenerator(); //to see if the script being executed. 
});
