import Footer from './Footer';
import Section from './Section';
import Header from './Header';

function App() {
	const users = [{ name: '이동훈님', country: '한국', year: 1994 }];
	const carinfo = [{ model: '벤츠', yd: 2009, price: '6000만원~' }];

	return (
		<div>
			<Header />
			<Section person={users} /> <Footer car={carinfo} />{' '}
		</div>
	);
}

export default App;
