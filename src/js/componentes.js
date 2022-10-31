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

const divTodoList = document.querySelector('.todo-list'); // ul que contiene las tareas creadas
const txtInput = document.querySelector('.new-todo'); // input de las tareas
const btnBorrar = document.querySelector('.clear-completed'); //boton de Borrar todos los completedos
const ulFiltros = document.querySelector('.filters'); // filtros de las tareas <ul class="filters">
const anchorFiltros = document.querySelectorAll('.filtro'); //selecciona todos los elementos Li debajo de <ul class="filters"> con la clase filtro es slector all porque devuelve un arreglo

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

// evento que escucha el boton de borrar completados
btnBorrar.addEventListener('click', () => {
	todoList.eliminarCompletados(); // metodo de la clases TodoList para eliminar los elmentos del arrary completados es decir que tienen ese atributo de la clase en true

	// Este for recorre todo el UL y sus hijos li para eliminar los elmentos que cumplen las condiciones de clase completed
	for (let i = divTodoList.children.length - 1; i >= 0; i--) {
		const element = divTodoList.children[i];

		if (element.classList.contains('completed')) {
			divTodoList.removeChild(element);
		}
	}
});

// evento que escucha todos los click sobre el <ul class="filters"> para devlver el nombre
ulFiltros.addEventListener('click', (event) => {
	const filtro = event.target.text; //obtiene el nombre del filtro
	if (!filtro) return; // valida lo anterior si no hay filtro o no obtiene un nombre

	anchorFiltros.forEach((element) => element.classList.remove('selected')); // recorre los li hijos de <ul class="filters"> para quitarles la clase selected
	event.target.classList.add('selected'); // agrega la clase selected al que este activo en ese momento

	// recorre todos los hijos del divTodoList todas las tareas que estan creadas
	for (const element of divTodoList.children) {
		element.classList.remove('hidden'); //retira la clase hidden antes de empezar
		const completado = element.classList.contains('completed'); //valida que un elemento tenga la clase completed para meterlo en una constante que sera usada mas adelante

		// este switch verifica que texto hay en la constante filtro previamente declarada

		switch (filtro) {
			case 'Pendientes': // si tiene el nombre Pendientes y si esta completado poner hidden
				if (completado) {
					element.classList.add('hidden');
				}
				break;
			case 'Completados': // si tiene el nombre completados y si no tien e la clase completed pues poner hidden
				if (!completado) {
					element.classList.add('hidden');
				}
				break;
		}
	}
});
