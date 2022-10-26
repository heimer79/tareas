/* >>>>>
clase to do para definir como tal la tarea 
que se vaya creando, esta asu vez tiene los atributos de la misma
<<<<< */

export class Todo {
	constructor(tarea) {
		this.tarea = tarea;
		this.id = new Date().getTime(); //se usa getTime para generar un numero aleatorio de ID
		this.completado = false; // es falso de inicio porque no se han hecho
		this.creado = new Date();
	}
}
