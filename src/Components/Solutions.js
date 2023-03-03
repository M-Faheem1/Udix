import React, { useState } from 'react';
import Services from './Services';

function Solutions() {
	const [cardHeading, setcardHeading] = useState('Web Services');
	console.log(cardHeading);
	const [changedHeading, setChangeHeading] = useState(false);

	return (
		<div className='services'>
			<div className='cardsHeading'>
				<h2>Solutions that will change your business forever</h2>
				<p>
					Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of
					creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a
					team of creative experts.
				</p>
			</div>
			<Services
				cardHeading={cardHeading}
				setcardHeading={setcardHeading}
				changedHeading={changedHeading}
				setChangeHeading={setChangeHeading}
			/>
		</div>
	);
}

export default Solutions;
