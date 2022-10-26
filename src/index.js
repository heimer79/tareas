import './styles.css';

import {Todo, TodoList} from './classes';
import {crearTodoHtml} from './js/componentes';

export const todoList = new TodoList();

const tarea = new Todo('aprender javascript');

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);

/* const tarea2 = new Todo('comprar un unicornio'); */

/* todoList.nuevoTodo(tarea2); 
tarea.completado = true;

*/

/* console.log(tarea); */
/* const nombre = 'jue jue';
saludar(nombre); */
