// GLOBAL VARIABLES
	// Isolate the targeted div, define the class, and have fun with variables.
const answerBox = document.getElementById("answerer");
const beyond = Infinity + 1;
const toyStory = (2*Infinity) + beyond;
// require('classList.js');
const classList = ["Zandi Wagner","Anthony Dominguez","Ben Escorcia","Brandon Stark","Brian Samuels","Calah Hansen","Cameron Lattz","Christian Breyer","Chris Krinkie","Daniel Merkl","Daniel Thao","Eli Gorniak","Isaac Johnson","Jack Meuwissen","Jackson Oppenheim","Jason Ostergren","Jon Alden","Kong Yang","Nermin Ceric","Nick Wilson","Nolan Hewitt","Sean D'Amico","Seifu Dagnachew","Shane Nelson","Shawn Wallin","Syed Akbar","Tori Johnston","Zeph Tambornino",];
let answerer = classList.slice();
let alreadyAsked = [];

console.log(classList); //output: [ 'foo', 'bar', 3 ]

// Function which chooses the name displayed in the visible button.
function changeAnswerer() {
		let randomized = Math.floor(Math.random()*answerer.length);
		let asked = answerer.splice(randomized, 1);
		alreadyAsked.push(asked[0]);
		answerBox.innerHTML = "<p>"+asked[0]+"<p>";
		console.log(asked[0]);
};

// Click handler which triggers the changeAnswerer function: when you click a name, it gives you a new unchosen name.
answerBox.addEventListener("click", function(){
	// If the length of alreadyAsked is the same as the classList: start over.
	if (answerer.length === 0){
		answerer = classList.slice();
		alreadyAsked = [];
		changeAnswerer();
		console.log(classList);	
			
	}
	// Otherwise, we're going to:
		// choose a random element
		// remove the element from the array
		// push it to alreadyAsked
		// and present it on the visible page.
	else {
		changeAnswerer();
	}
});
