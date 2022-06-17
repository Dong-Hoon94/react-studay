import Footer from './Footer';
import Section from './Section';
import Header from './Header';

function App() {
	const car = [{ id: 1, name: '벤츠', year: 2009 }];

	return (
		<div>
			<Header />
			<Section carinfo={car} />
			<Footer />
		</div>
	);
}

export default App;
