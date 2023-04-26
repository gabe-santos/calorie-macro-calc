import { ChangeEventHandler, useEffect, useState } from 'react';

type NewType = ChangeEventHandler<HTMLInputElement>;

interface RadioToggleProps {
	name: string;
	dataLeft: string;
	dataRight: string;
	valueLeft: string;
	valueRight: string;
	onChange: NewType;
	defaultVal?: string;
}

export const RadioToggle = ({
	name,
	dataLeft,
	dataRight,
	valueLeft,
	valueRight,
	onChange,
	defaultVal = valueLeft,
}: RadioToggleProps) => {
	const [checkedVal, setCheckedVal] = useState(defaultVal);

	useEffect(() => {
		setCheckedVal(defaultVal);
	}, [defaultVal]);

	return (
		<div>
			<div className='btn-group flex'>
				<input
					type='radio'
					name={name}
					className='btn btn-sm'
					data-title={dataLeft}
					value={valueLeft}
					checked={checkedVal === valueLeft}
					onChange={e => {
						onChange(e);
						setCheckedVal(valueLeft);
					}}
				/>
				<input
					type='radio'
					name={name}
					className='btn btn-sm'
					data-title={dataRight}
					value={valueRight}
					checked={checkedVal === valueRight}
					onChange={e => {
						onChange(e);
						setCheckedVal(valueRight);
					}}
				/>
			</div>
		</div>
	);
};
