let a = prompt("Coeficiente A: ");
let b = prompt("Coeficiente B: ");
let c = prompt("Coeficiente C: ");
const delta = (b * b) - (4 * a * c);

if (delta < 0){
	console.log("Esta equacao nao possui raizes reais");
}    
else{
	var x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
	var x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
}

	console.log("X1 = " + x1.toFixed(4));
	console.log("X2 = " + x2.toFixed(4));