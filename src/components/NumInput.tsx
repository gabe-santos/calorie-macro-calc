interface NumInputProps {
	label: string;
	value: number;
	onChange: Function;
}

export const NumInput = ({ label, value, onChange }: NumInputProps) => {
	return (
		<div className='form-control my-4'>
			<label className='input-group input-group-md'>
				<span className=''>{label}</span>
				<input
					type='number'
					className='input input-bordered input-md'
					value={value}
					onChange={onChange}
				/>
			</label>
		</div>
	);
};
