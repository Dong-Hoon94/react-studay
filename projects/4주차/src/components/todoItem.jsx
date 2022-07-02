import React from 'react';
import styled from 'styled-components';

export default function TodoItem({ todo }) {
	return (
		<li>
			<Text>할일:{todo.todo}</Text>
			<Button>삭제</Button>
		</li>
	);
}
const Button = styled.button`
	margin-left: 10px;
`;
const Text = styled.span`
	display: inline-block;
	margin-left: 10px;
`;
