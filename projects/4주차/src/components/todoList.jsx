import React from 'react';
import TodoItem from './todoItem';

export default function TodoList({ todos, num }) {
	return (
		<>
			<div>할 일: {num}개</div>
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</>
	);
}
