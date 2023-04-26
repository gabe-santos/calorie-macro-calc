interface NumInputProps {
	label: string;
	value: number;
	onChange: Function;
}

export const NumInput = ({ label, value, onChange }: NumInputProps) => {
	return (
		<div className='form-control my-4'>
			<label className='input-group input-group-md'>
				<span className='bg-zinc-300'>{label}</span>
				<input
					type='number'
					className='input border-none input-md shadow-inner'
					value={value}
					onChange={onChange}
				/>
			</label>
		</div>
	);
};
