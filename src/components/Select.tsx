import { ChangeEventHandler } from 'react';

interface SelectProps {
	label: string;
	options: string[] | object;
	value: string;
	onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const Select = ({ label, options, value, onChange }: SelectProps) => {
	return (
		<div className='form-control my-4'>
			<select
				className='select border-none max-w-xs shadow-inner font-normal text-zinc-600 rounded-full'
				value={value}
				onChange={onChange}>
				{Object.keys(options).map(item => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};
