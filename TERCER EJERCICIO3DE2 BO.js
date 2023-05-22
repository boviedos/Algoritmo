// En un almacen se hace un 20 MOD  de descuento a los clientes
// cuya compra supere los 100$. Cual sera la cantidad que 
// pagar una persona por su compra? (Diagrama N-S)
function descuentocompras() {
	var compra = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("Digite la cantidad a pagar: ",'<BR/>');
	compra = Number(prompt());
	if (compra>100) {
		descuento = compra*0.2;
	} else {
		descuento = 0;
	}
	precio_final = compra-descuento;
	document.write("El precio a pagar es:",precio_final,'<BR/>');
}

function ejercicio3de2() {
	descuentocompras();
}

