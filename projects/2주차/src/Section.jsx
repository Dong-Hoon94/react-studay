import React from 'react';
function Section(props) {
	console.log(props); // const props= { carinfo: [{id: 1, name: '벤츠', year: 2009}] }
	return (
		<div>
			{props.carinfo.map((car) => (
				<li>
					<span>번호:{car.id}</span>
					<span>차종:{car.name}</span>
					<span>연식:{car.year}</span>
				</li>
			))}
		</div>
	);
}
export default Section;
