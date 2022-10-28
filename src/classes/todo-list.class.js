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

	eliminarTodo(id) {
		/* //lo que hace este filtro o metodo para el array previo es
		organizar de nuevo el mismo array filtrando por una condicion
		en este caso que el ID que se recibe de la tarea o todo sea diferente su ID del que esta entrando, toda esta instrucción va a regresar Un nuevo arreglo excluyendo el todo que coincida con el ID que tengo entonces este nuevo arreglo se va a almacenar en el this.todos sobreescribiendo cada uno de esos valores, dando la impresion de que se está eliminando.
		 */
		this.todos = this.todos.filter((todo) => todo.id != id);
	}

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

	eliminarCompletados() {
		/* Utilizamos la mis logica de eliminar los todos individuales 
		pero esta vez lo hacemos para los completados por los cual vamos a evaluar 
		los que tienen ese artibuto al momento de pasar por el metodo de la presente
		clase.lo que hace el filtro es devolver los que no estan completado eliminando
		los que si lo estan es deci completados */

		this.todos = this.todos.filter((todo) => todo != todo.completado);
	}
}
