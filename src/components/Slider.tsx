interface SliderProps {
	label: string;
	min: number;
	max: number;
	value: number;
	step: number;
	unit: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
				className='accent-zinc-600'
				onChange={onChange}
			/>
		</div>
	);
};
