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
	className?: string;
}

export const RadioToggle = ({
	name,
	dataLeft,
	dataRight,
	valueLeft,
	valueRight,
	onChange,
	defaultVal = valueLeft,
	className = '',
}: RadioToggleProps) => {
	const [checkedVal, setCheckedVal] = useState(defaultVal);

	useEffect(() => {
		setCheckedVal(defaultVal);
	}, [defaultVal]);

	return (
		<div>
			<div className={`btn-group flex ${className}`}>
				<input
					type='radio'
					name={name}
					className='btn btn-xs checked:shadow-inner bg-zinc-400 font-normal border-none'
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
					className='btn btn-xs checked:shadow-inner bg-zinc-400 checked:bg-zinc-800 font-normal border-none'
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
