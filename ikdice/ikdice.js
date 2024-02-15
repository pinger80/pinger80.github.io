const player = {
	score: 0,
	time: 0,
	timeLast: 0,
	timeDelta: 0,
	timePlayed: 0
};

function firstRun() {
	if(player.time == 0){
		player.time = Date.now()
		player.timeLast = player.time
	} else {
		player.timeLast = player.time
		player.time = Date.now()
	}
}

function gameLoop(delta) {
	// Time statistics
	delta = delta/1000
	player.timePlayed += 1*delta;
	player.timeLast = player.time
	player.time = Date.now()
	player.timeDelta = player.time-player.timeLast
	
}

function updateUI() {
	gameLoop(player.timeDelta)
	document.getElementById("scoreDisplay").innerHTML = format(player.score)
}

function format(x) {
	let output = x.toFixed(2)
	return output
}

firstRun();
setInterval(updateUI,33);