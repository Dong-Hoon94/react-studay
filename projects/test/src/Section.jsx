import React from 'react';
function Section(props) {
	console.log(props); // const props= { carinfo: [{id: 1, name: '벤츠', year: 2009}] }
	return (
		<div>
			{props.person.map((users) => (
				<li>
					<span>이름:&nbsp;{users.name} &nbsp;</span>
					<span>국적:&nbsp;{users.country}&nbsp;</span>
					<span>출생연도:&nbsp;{users.year}</span>
				</li>
			))}
		</div>
	);
}
export default Section;
