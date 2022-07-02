import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const InputBlock = styled.form`
	width: 300px;
	margin: 50px auto;
	padding: 20px;
	border: 5px solid;
	text-align: center;
`;

function CreateTodo({ addTodo }) {
	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('');
		addTodo(text);
		setText('');
	};

	const onChange = ({ target }) => {
		const { value } = target;
		setText(value);
	};

	return (
		<InputBlock onSubmit={onSubmit}>
			<input type="text" value={text} onChange={onChange} />

			<button type="submit">추가</button>
		</InputBlock>
	);
}

export default CreateTodo;
