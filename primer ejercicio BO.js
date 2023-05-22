// Ejercicio : Calcular la cantidad de segundos que estan incluidos en el 
// numero de horas,minutos y segundos ingresados por el usuario.
function eltiempo() {
	var horas = new Number();
	var minutos = new Number();
	var seg = new Number();
	var horas_seg = new Number();
	var minutos_seg = new Number();
	var total_seg = new Number();
	document.write("Digite las horas:",'<BR/>');
	horas = Number(prompt());
	document.write("Digite los minutos:",'<BR/>');
	minutos = Number(prompt());
	document.write("Digite los segundos:",'<BR/>');
	seg = Number(prompt());
	// Calcular el equivalente en segundos
	horas_seg = horas*3600;
	minutos_seg = minutos*60;
	total_seg = horas_seg+minutos_seg+seg;
	document.write("Los segundos equivalentes son: ",total_seg,'<BR/>');
}

function ejercicio1() {
	eltiempo();
}

