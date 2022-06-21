import React from 'react';
function Section(props) {
	console.log(props); // const props= { carinfo: [{id: 1, name: '벤츠', year: 2009}] }
	return (
		<div>
			{props.person.map((users) => (
				<li>
					<span>이름:{users.name}</span>
					<span>국적:{users.country}</span>
					<span>출생연도:{users.year}</span>
				</li>
			))}
		</div>
	);
}
export default Section;
