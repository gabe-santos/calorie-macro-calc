import { ChangeEventHandler } from 'react';

interface SelectProps {
	label: string;
	options: string[] | object;
	value: string;
	onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const Select = ({ label, options, value, onChange }: SelectProps) => {
	return (
		<div className='form-control'>
			<label className='label text-lg'>{label}</label>
			<select
				className='select select-bordered max-w-xs'
				value={value}
				onChange={onChange}>
				{Object.keys(options).map(item => (
					<option key={item}>{item}</option>
				))}
			</select>
		</div>
	);
};
