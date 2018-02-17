/**
 * 
 * DO NOT MODIFY THE CODE BELOW
 * 
 * WARNING: Code below is more advanced
 **/
function handleError(error) {
	document.getElementById('error').innerHMTL = `Last Error: ${error || "Unknown"}`;
	console.log(error);
}


window.addEventListener('load', main);

function main() {
	let codename = "urLYrtkPFo";
	index = window.location.href.indexOf(codename) + codename.length + 1;
	score = window.location.href.substring(index);
	score = parseInt(score.replace(/\#/, ''), 16);
	document.getElementById('outof').style.display = 'none';
	populateScore(score);
};

function populateScore(score) {
	let count = 4;
	// populate the score after a count down
	let interval = setInterval(function() {
		document.getElementById('score').innerHTML = count || Math.min(score, 500);
		count--;
		if (count === -1) {
			clearInterval(interval);
			document.getElementById('outof').style.display = 'inline-block';
		}
	}, 1000);
}