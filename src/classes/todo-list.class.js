/* >>>>>
clase to do list para hacer todo el ciclo de vida de la tarea
en un listado de eventos de la misma.
<<<<< */
export class TodoList {
	constructor() {
		this.todos = [];
	}

	nuevoTodo(todo) {
		this.todos.push(todo);
	}

	eliminarTodo(id) {}

	marcarCompletado(id) {
		// recibe el parametro id del objecto de la clase todo el cual es recorrido ppor el for pasado al This es decir la instancia de ese momento y luego se validado si el todo id es igual en valor no en tipo al recibido y luego si e verdadero cambiar el estado del objecto de la clase todo a true o false segun sea el caso de inicio. al final se rompre el recorrido con un break para no seguir con el ciclo for.
		for (const todo of this.todos) {
			console.log(id, todo.id);
			if (todo.id == id) {
				todo.completado = !todo.completado; // cambia segun sea el caso. como es boolean se mueve entre true y false.
				break;
			}
		}
	}

	eliminarCompletados() {}
}
