import Footer from './Footer';
import Section from './Section';
import Header from './Header';
import { useState } from 'react';

function App() {
	const student = [{ name: '이동훈', age: '29' }];

	const [count, Setcount] = useState(0);
	const OnIndrese = (e) => {
		Setcount(count + 1);
	};

	return (
		<div>
			<Header person={student} /> <Section />
			<Footer />
		</div>
	);
}

export default App;
