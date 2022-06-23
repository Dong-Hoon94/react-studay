import React from 'react';

function Footer(props) {
	console.log(props);
	return (
		<div>
			{props.car.map((carinfo) => (
				<li>
					<span>모델: {carinfo.model}&nbsp;&nbsp;</span>
					<span>출시연도: {carinfo.yd}</span>
					<span>&nbsp;가격:{carinfo.price}&nbsp;&nbsp;</span>
				</li>
			))}
		</div>
	);
}
export default Footer;
