import { useState } from 'react';
import CreateTodo from './components/createTodo';
import TodoList from './components/todoList';

const todoList = [{ todo: '공부하기' }, { todo: '운동하기' }];
function App() {
	const [todos, setTodos] = useState(todoList);

	const addTodo = (getText) => {
		const createTodo = todos.concat({ todo: getText });

		setTodos(createTodo);
	};

	return (
		<div>
			<CreateTodo addTodo={addTodo} />
			<TodoList todos={todos} num={todos.length} />
		</div>
	);
}

export default App;
