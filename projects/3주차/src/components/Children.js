import React from 'react';
import styled from 'styled-components';

const ChildrenBlock = styled.div`
	width: 90px;
	margin: 50px auto;
	padding: 20px;
	border: 5px solid;
`;

const CountBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	background: #4c504c;
	font-size: 28px;
`;

const ButtonGroup = styled.div`
	margin-top: 20px;
`;

function Children({ count, onIncrease, onDiscrease }) {
	// const { count, onIncrease, onDiscrease } = props;
	return (
		<ChildrenBlock>
			<CountBlock> {count} </CountBlock>{' '}
			<ButtonGroup>
				<button onClick={onIncrease}> 증가 </button>{' '}
				<button onClick={onDiscrease}> 감소 </button>{' '}
			</ButtonGroup>{' '}
		</ChildrenBlock>
	);
}

export default Children;
