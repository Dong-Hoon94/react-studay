import React from 'react';

function Footer(props) {
	console.log(props);
	return (
		<div>
			{props.car.map((carinfo) => (
				<li>
					<span>모델: {carinfo.model}</span>
					<span>:출시연도: {carinfo.yd}</span>
					<span>가격: {carinfo.price}</span>
				</li>
			))}
		</div>
	);
}
export default Footer;
