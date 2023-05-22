// Una tienda ofrece un descuento del 15%  sobre el total de la 
// compra y un cliente desea saber cu�nto deber� pagar 
// finalmente por su compra
function descuentos() {
	var precio = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("Digite el precio a pagar:",'<BR/>');
	precio = Number(prompt());
	descuento = precio*0.15;
	precio_final = precio-descuento;
	document.write("El precio a pagar es de:",precio_final,'<BR/>');
}

function ejercicio5() {
	descuentos();
}

