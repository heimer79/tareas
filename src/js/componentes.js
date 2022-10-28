/* import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {
	/* console.log(`creado etiqueta h1 para ${nombre}`);

	const h1 = document.createElement('h1');

	h1.innerText = `Hola, heimer ${nombre}`;

	document.body.append(h1);

	const img = document.createElement('img');
	img.src = webpacklogo;
	document.body.append(img);}; */

// Referencias en el HTML
import {Todo} from '../classes';
import {todoList} from '../index';

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {
	const htmlTodo = `<li class="${
		todo.completado ? 'completed' : ''
	}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;

	const div = document.createElement('div');
	div.innerHTML = htmlTodo;

	divTodoList.append(div.firstElementChild);

	return div.firstElementChild;
};

// eventos

txtInput.addEventListener('keyup', (event) => {
	/* console.log(event); */

	/* console.log(txtInput.value); */

	if (
		event.keyCode === 13 &&
		txtInput.value.length > 0 &&
		event.keyCode !== 32
	) {
		/* console.log(txtInput.value) */

		const nuevoTodo = new Todo(txtInput.value);
		todoList.nuevoTodo(nuevoTodo);

		crearTodoHtml(nuevoTodo);

		txtInput.value = '';
	}
});
/*/ escucha el evento click para recopilar el nombre del elementp tocado luego obtener el parent es decir el LI que se inserto previamente en el anterior listener, luego de obtenerlo se extrae el attributo data id para guadarlo en una constante e ingresarlo en la instancia del todolist de la clase TodoList. el elemnto todoElement cambia con el toogle segun se vaya clickeando el divTodoList poniendo o quitando la clase completed del LI */
divTodoList.addEventListener('click', (event) => {
	const elementName = event.target.localName; // shows the html element name
	const todoElement = event.target.parentElement.parentElement;
	const todoId = todoElement.getAttribute('data-id');

	// click en el check
	if (elementName.includes('input')) {
		todoList.marcarCompletado(todoId);
		todoElement.classList.toggle('completed');
	} else if (elementName.includes('button')) {
		// hay que borrar el todo
		todoList.eliminarTodo(todoId);
		divTodoList.removeChild(todoElement); //elimina el elemento del html en este caso pues el <li> previamente creado
	}

	console.log(todoList);
});
