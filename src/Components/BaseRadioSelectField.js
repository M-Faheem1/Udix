import React, { useState } from 'react';
import Select from 'react-select';

const COLLECTOR_TYPE_OPTIONS = [
	{ value: 'ALL', label: 'All' },
	{ value: 'COLLECTOR', label: 'Collector' },
	{ value: 'BANK', label: 'Bank' },
	{ value: 'BOTH', label: 'Both' },
];

function BaseRadioSelectField({ handleSelectChange, placeholder, value }) {
	const options = COLLECTOR_TYPE_OPTIONS.map((option) => {
		return {
			label: option.label,
			value: option.value,
		};
	});

	return (
		<Select
			className='react-select-container'
			classNamePrefix='react-select'
			options={options}
			onChange={handleSelectChange}
			value={value}
			isSearchable={true}
			// styles={customStyles}
			placeholder={placeholder}
			components={{
				IndicatorSeparator: () => null,
				Option: (props) => {
					const {
						children,
						isSelected,
						innerProps: { id, ...restInnerProps },
					} = props;
					return (
						<div {...restInnerProps} className={`option ${isSelected ? 'selected' : ''}`}>
							<input type='radio' id={id} className='radio' checked={isSelected} />
							<label htmlFor={id}>{children}</label>
						</div>
					);
				},
			}}
		/>
	);
}

export default BaseRadioSelectField;
