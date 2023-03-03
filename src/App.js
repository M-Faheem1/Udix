import { useState } from 'react';
import './App.scss';
import './style/scss/_import.scss';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Solutions from './Components/Solutions';
import Reach from './Components/Reach';
import Creativity from './Components/Creativity';
import Footer from './Components/Footer';
import BaseRadioSelectField from './Components/BaseRadioSelectField';

function App() {
	const [heading, setheading] = useState('This is Prop');
	const [value, setValue] = useState(null);

	function handleChange(selectedOption) {
		setValue(selectedOption);
	}

	const COLLECTOR_TYPE_OPTIONS = [
		{ value: 'ALL', label: 'All' },
		{ value: 'COLLECTOR', label: 'Collector' },
		{ value: 'BANK', label: 'Bank' },
		{ value: 'BOTH', label: 'Both' },
	];

	return (
		<div className='App'>
			<Header />
			<Intro heading={heading} subheading={{ greating: ', second prop' }} />
			<BaseRadioSelectField placeholder='Collector Type' handleSelectChange={handleChange} value={value} />
			<Solutions />
			<Reach />
			<Creativity />
			<Footer />
			<button
				onClick={() => {
					setheading('Heading changed using use state');
				}}
			>
				{' '}
				Change state{' '}
			</button>
		</div>
	);
}

export default App;
