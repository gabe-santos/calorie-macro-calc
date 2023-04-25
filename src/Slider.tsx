import { useState } from 'react';

interface SliderProps {
	label: string;
	min: number;
	max: number;
	value: number;
	step: number;
	unit: string;
	onChange: Function;
}

export const Slider = ({
	label,
	min,
	max,
	value,
	step,
	unit,
	onChange,
}: SliderProps) => {
	const [sliderVal, setSliderVal] = useState(0);

	// const handleChange = (e) => {
	//   setSliderVal(e.target.value);
	//   console.log(e.target.value);
	// };

	return (
		<div className='form-control'>
			<div className='flex'>
				<label className='label grow'>{label}</label>
				<label className='label'>
					{value}
					{unit}
				</label>
			</div>
			<input
				id='slider'
				type='range'
				min={min}
				max={max}
				step={step}
				value={value}
				className='range'
				onChange={onChange}
			/>
		</div>
	);
};
