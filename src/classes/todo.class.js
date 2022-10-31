/* >>>>>
clase to do para definir como tal la tarea 
que se vaya creando, esta asu vez tiene los atributos de la misma
<<<<< */

export class Todo {
	/* se utiliza un metodo estatico el cual no depende de la instancia sino directamente de
	la clase en este caso Todo, este metodo lo que hara es mantener o recoger lo almacenado 
	en localstorage para que se guarde el metodo usado, por ejemplo imprimir clase */
	static fromJson({id, tarea, completado, creado}) {
		const tempTodo = new Todo(tarea);

		tempTodo.id = id;
		tempTodo.completado = completado;
		tempTodo.creado = creado;

		return tempTodo;
	}
	constructor(tarea) {
		this.tarea = tarea;
		this.id = new Date().getTime(); //se usa getTime para generar un numero aleatorio de ID
		this.completado = false; // es falso de inicio porque no se han hecho
		this.creado = new Date();
	}

	imprimirClase() {
		console.log(`${this.tarea} - ${this.id}`);
	}
}
