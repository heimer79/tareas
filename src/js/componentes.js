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

const divTodoList = document.querySelector('.todo-list');

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

	divTodoList.append(div);

	return div;
};
