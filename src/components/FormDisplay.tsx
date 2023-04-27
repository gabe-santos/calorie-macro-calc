import { NumInput } from './NumInput';
import { RadioToggle } from './RadioToggle';
import { Select } from './Select';
import { Slider } from './Slider';

interface FormDisplayProps {
	age: number;
	weight: number;
	height: number;
	activityLvl: string;
	goal: string;
	activityOptions: {
		[key: string]: number;
	};
	goalOptions: {
		[key: string]: number;
	};
	proteinVal: number;
	carbPercent: number;
	handleUnitChange: ({
		target: { value },
	}: {
		target: { value: string };
	}) => void;
	handleAgeChange: ({
		target: { value },
	}: {
		target: { value: number };
	}) => void;
	handleWeightChange: ({
		target: { value },
	}: {
		target: { value: number };
	}) => void;
	handleHeightChange: ({
		target: { value },
	}: {
		target: { value: number };
	}) => void;
	handleSexChange: ({
		target: { value },
	}: {
		target: { value: string };
	}) => void;
	handleActivityChange: ({
		target: { value },
	}: {
		target: { value: string };
	}) => void;
	handleGoalChange: ({
		target: { value },
	}: {
		target: { value: string };
	}) => void;
	handleProteinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleCarbSplitChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormDisplay = ({
	age,
	weight,
	height,
	activityLvl,
	goal,
	activityOptions,
	goalOptions,
	proteinVal,
	carbPercent,
	handleUnitChange,
	handleAgeChange,
	handleWeightChange,
	handleHeightChange,
	handleSexChange,
	handleActivityChange,
	handleGoalChange,
	handleProteinChange,
	handleCarbSplitChange,
}: FormDisplayProps) => {
	return (
		<div className='flex flex-col max-h-full container p-12 justify-evenly mx-2'>
			<div className='flex max-w-full justify-start mx-0'>
				<RadioToggle
					name='units'
					dataLeft='lb'
					dataRight='kg'
					valueLeft='imperial'
					valueRight='metric'
					onChange={handleUnitChange}
					defaultVal='imperial'
				/>
				<RadioToggle
					name='sex'
					dataLeft='Male'
					dataRight='Female'
					valueLeft='male'
					valueRight='female'
					onChange={handleSexChange}
					defaultVal='female'
					className='ml-4'
				/>
			</div>
			<NumInput label='Age' value={age} onChange={handleAgeChange} />
			<NumInput
				label='Weight'
				value={weight}
				onChange={handleWeightChange}
			/>
			<NumInput
				label='Height'
				value={height}
				onChange={handleHeightChange}
			/>

			<div className='flex'>
				<Select
					label='Activity Level'
					options={activityOptions}
					value={activityLvl}
					onChange={handleActivityChange}
				/>
			</div>
			<Select
				label={'Goal'}
				options={goalOptions}
				value={goal}
				onChange={handleGoalChange}
			/>
			<Slider
				label='Protein'
				min={0.82}
				max={1.5}
				step={0.01}
				value={proteinVal}
				unit={'g per pound'}
				onChange={handleProteinChange}
			/>
			<Slider
				label='Carb/Protein'
				min={0}
				max={100}
				step={1}
				value={carbPercent}
				unit={`/${100 - carbPercent}`}
				onChange={handleCarbSplitChange}
			/>
		</div>
	);
};
