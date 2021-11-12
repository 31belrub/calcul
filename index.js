let poleVuvodNiz = document.getElementsByClassName("input")[0];
let buttons = document.querySelectorAll(".item");

console.log(buttons);


let currentAction = null;
let currentNumber = null;
let result = null;
// poleVuvodNiz.value = "1234567"

for (let i = 0; i < buttons.length; i++) {

	buttons[i].addEventListener("click", () => {
		onButtonPress(buttons[i].dataset.fnc)

	})


}

function onButtonPress(dataset) {
	switch (dataset) {
		case ".":
			setPoint()
			break;


		case "-":
		case "*":
		case "/":
		case "+":
			if ( currentAction !=="%") {
				aaction(dataset)
			}
			
			break;

		case "=": 
			ravno()
			break;

			case "ac": 
			clear()
			break;

			case "%": 
			proc()
			break;

		


		default:
			vvodNum(dataset)

			break;
	}


}


function vvodNum(params) {
	if (poleVuvodNiz.value.length < 8) {
		if (poleVuvodNiz.value === "0") {
			poleVuvodNiz.value = params

		} else {
			poleVuvodNiz.value += params;
		}


	}

}


function setPoint() {

	if (poleVuvodNiz.value.indexOf(".") === -1) {
		poleVuvodNiz.value += "."
	}

}



function aaction(op) {

	if (currentAction) {
		result = mathemathik(currentNumber, +poleVuvodNiz.value, currentAction);
		currentNumber = result;
		currentAction = op;
		poleVuvodNiz.value = "0"
	} else {

		currentNumber = +poleVuvodNiz.value;
		
		currentAction = op;
		poleVuvodNiz.value = "0";

	}
}

function mathemathik(a, b, params) {
	switch (params) {
		case "+":
			return (a*1e6 + b*1e6)/1e6;
		case "-":
			return a - b;
		case "*":
			return a * b;
		case "/":
				return a / b;
			
		default:
			break;
	}


}

function ravno() {
	if (currentAction && currentAction != "%") {
		result = mathemathik(currentNumber, +poleVuvodNiz.value, currentAction);
		currentNumber = result;
		
		viivo(currentNumber,"")
		clearMemory()

	} 
	if (currentAction === "%") {
		result = currentNumber * (+poleVuvodNiz.value) /100
		viivo(result,"");
		clearMemory();
		
	}
	
}

function clear() {
	poleVuvodNiz.value = 0;
   clearMemory()

}

function proc() {

	if (currentAction) {
		let pom = (currentNumber/100)*(+poleVuvodNiz.value);
		result = mathemathik(currentNumber, pom,currentAction)
		currentNumber = result;
		viivo(result,"");
		clearMemory()
				
	}
	else{

		currentNumber = +poleVuvodNiz.value;
		currentAction = "%"
		viivo(0,currentNumber+"%")


	  
	}
	
}


function viivo(screen) {
	poleVuvodNiz.value = screen;
	
}
function  clearMemory() {
	currentAction = null;
	currentNumber = null;
	result = null
	
}




