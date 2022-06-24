import { useState } from 'react';
import Children from './components/Children';

function App() {
	const [count, setCount] = useState(0); //초기 상태값
	//           변경하는 함수(Setter function)
	//set + 상태 담은 변수(여기서는 count) = setCount
	const onIncrease = (e) => {
		setCount(count + 1);
	};

	const onDiscrease = (e) => {
		setCount(count - 1);
	};

	return (
		//스테이트는 컴포넌트 자신이 가지고 있는 데이터
		//스테이트 변경될 우려가 있는 데이터

		<div>
			<Children
				count={count}
				onIncrease={onIncrease}
				onDiscrease={onDiscrease}
			/>
		</div>
	);
}

export default App;
