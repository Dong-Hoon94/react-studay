import React from 'react';
function Header(props) {
	props.map.person((student) => {
		<li>
			<span>이름:{student.name}</span>
			<span>이름:{student.name}</span>
			<span>이름:{student.name}</span>
			<span>이름:{student.name}</span>
		</li>;
	});
	return <div>학생정보</div>;
}
export default Header;
