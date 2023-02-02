import { ChangeEventHandler } from 'react';

type NewType = ChangeEventHandler<HTMLInputElement>;

interface RadioToggleProps {
	label: string;
	name: string;
	dataLeft: string;
	dataRight: string;
	valueLeft: string;
	valueRight: string;
	onChange: NewType;
}

export const RadioToggle = ({
	label,
	name,
	dataLeft,
	dataRight,
	valueLeft,
	valueRight,
	onChange,
}: RadioToggleProps) => {
	return (
		<div>
			<label className='label'>{label}</label>
			<div className='btn-group flex'>
				<input
					type='radio'
					name={name}
					className='btn'
					data-title={dataLeft}
					value={valueLeft}
					onChange={onChange}
				/>
				<input
					type='radio'
					name={name}
					className='btn'
					data-title={dataRight}
					value={valueRight}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};
