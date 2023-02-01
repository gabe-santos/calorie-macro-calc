interface SelectProps {
	label: string;
	options: string[];
}

export const Select = ({ label, options }: SelectProps) => {
	return (
		<div className='form-control'>
			<label className='label text-lg'>{label}</label>
			<select className='select select-bordered max-w-xs'>
				{options.map(item => (
					<option key={item}>{item}</option>
				))}
			</select>
		</div>
	);
};
