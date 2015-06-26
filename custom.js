#import "./UIAutoMonkey.js"

//Configure the monkey: use the default configuration but a bit tweaked
monkey = new UIAutoMonkey();
//monkey.config.minutesToRun = 60 * 3; //run for 8 hours
//monkey.config.checkTimeEvery = 60; //check the time every 60 events. (optional and defaults to 60)
monkey.config.numberOfEvents = 2000;
//monkey.config.numberOfEvents = false; // turn off to make clear that we want minutes
monkey.config.delayBetweenEvents = 3;
monkey.config.screenshotInterval = 3;
monkey.config.eventWeights = {
			tap: 500,
			drag: 10,
			flick: 10,
			orientation: 1,
			clickVolumeUp: 1,
			clickVolumeDown: 1,
			lock: 1,
			pinchClose: 1,
			pinchOpen: 1,
			shake: 10
		};
// Release the monkey!
monkey.RELEASE_THE_MONKEY();