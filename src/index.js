import './styles.css';

import {Todo, TodoList} from './classes';

const todoList = new TodoList();

const tarea = new Todo('aprender javascript');
const tarea2 = new Todo('comprar un unicornio');

/* console.log(tarea); */

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);

/* import {saludar} from './js/componentes'; */

/* const nombre = 'jue jue';
saludar(nombre); */
