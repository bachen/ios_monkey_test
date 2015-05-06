#import "./UIAutoMonkey.js"

// Configure the monkey: use the default configuration but a bit tweaked
monkey = new UIAutoMonkey()
monkey.config.minutesToRun = 60 * 1; //run for 8 hours
monkey.config.checkTimeEvery = 60; //check the time every 60 events. (optional and defaults to 60)
monkey.config.numberOfEvents = false; // turn off to make clear that we want minutes

// Release the monkey!
monkey.RELEASE_THE_MONKEY();