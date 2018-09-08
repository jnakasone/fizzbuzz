//FizzBuzz
let output = document.getElementById("output");

for(let i = 1; i <=100; i++) {
	if (i % 3 === 0 && i % 5 ===0) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode("FizzBuzz"));
		output.appendChild(li);
	}
	else if (i % 3 === 0) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode("Fizz"));
		output.appendChild(li);
	}
	else if (i % 5 === 0) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode("Buzz"));
		output.appendChild(li);
	}
	else {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(i));
		output.appendChild(li);
	}
}
