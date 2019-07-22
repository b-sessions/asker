// GLOBAL VARIABLES
	// Isolate the targeted div, define the class, and have fun with variables.
const answerBox = document.getElementById("answerer").innerHTML;
let classList = ["Adam Cooper","Alexandria Wagner","Anthony Dominguez","Benjamin Escorcia","Brandon Stark","Brian Samuels","Calah Hansen","Cameron Lattz","Christian Breyer","Christopher Krinkie","Colin Kramer","Daniel Merkl","Daniel Thao","Elia Facundo Orta Carrasco","Elianice Gorniak","Isaac Johnson","Jack Meuwissen","Jackson Oppenheim","Jason Ostergren","Jon Alden","Kong Yang","Nermin Ceric","Nicholas Wilson","Nolan Hewitt","Sean D'Amico","Seifu Dagnachew","Shane Nelson","Shawn Wallin","Syed Akbar","Victoria Johnston","Zachary Tambornino","Zaur Tsagolov"];
let answerer = classList;
let alreadyAsked = [];

// Function which chooses the name displayed in the button.
function changeAnswerer() {
	// If the length of alreadyAsked is the same as the classList: start over.
	if (alreadyAsked.length === classList.length){
		answerer = classList;
		alreadyAsked = []
		changeAnswerer();
	}
	// Otherwise, we're going to:
		// choose a random element
		// remove the element from the array
		// push it to alreadyAsked
		// and present it on the visible page.
	else {
		let randomized = Math.floor(Math.random()*answerer.length);
		let asked = answerer.splice(randomized, 1);
		alreadyAsked.push(asked);
		answerBox = "<p>"+asked+"<p>";
	}
};

// Click handler which triggers the changeAnswerer function: when you click a name, it gives you a new unchosen name.
answerBox.addEventListener("click", function(){
	changeAnswerer();
});