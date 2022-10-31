import './styles.css';

import {Todo, TodoList} from './classes';
import {crearTodoHtml} from './js/componentes';

export const todoList = new TodoList();

console.log(todoList.todos);

/* todoList.todos.forEach( todo => crearTodoHtml( todo ) ); */

/* como se le esta pasando un metodo calback no es necesario pasarle toda la function
	con solo el nombre no mas */
todoList.todos.forEach(crearTodoHtml);

/* const newTodo = new Todo('Aprender javascript');
todoList.nuevoTodo(newTodo); */

todoList.todos[0].imprimirClase();

/* localStorage.setItem('heimer', 'value');

setTimeout(() => {
	localStorage.removeItem('heimer');
}, 1500);
 */
/* const tarea = new Todo('aprender javascript');

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea); */

/* const tarea2 = new Todo('comprar un unicornio'); */

/* todoList.nuevoTodo(tarea2); 
tarea.completado = true;

*/

/* console.log(tarea); */
/* const nombre = 'jue jue';
saludar(nombre); */
