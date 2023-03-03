import React from 'react';
import Image from './Image';
import CreativityDescription from './CreativityDescription';

function Creativity() {
	return (
		<div className='creativityAndTechnology'>
			<div className='creativityAndTechnologyLeft'>
				<Image />
			</div>
			<div className='creativityAndTechnologyRight'>
				<CreativityDescription />
			</div>
		</div>
	);
}

export default Creativity;
