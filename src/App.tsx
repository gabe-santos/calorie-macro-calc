import { ChangeEventHandler, SetStateAction, useEffect, useState } from 'react';
import './App.css';
import { NumInput } from './NumInput';
import { RadioToggle } from './RadioToggle';
import { Select } from './Select';
import { Slider } from './Slider';
// import { Tooltip } from './Tooltip';

export const App = () => {
	const dietOptions = ['Standard'];
	const unitOptions = ['Imperial', 'Metric'];

	interface DataProps {
		[key: string]: number;
	}

	const activityOptions: DataProps = {
		Sedentary: 1.2,
		'Lightly Active': 1.375,
		'Moderately Active': 1.55,
		'Very Active': 1.725,
		'Extremely Active': 1.9,
	};

	const goalOptions: DataProps = {
		'Lose Weight': -20,
		'Slowly Lose Weight': -10,
		'Maintain Weight': 0,
		'Slowly Gain Weight': 10,
		'Gain Weight': 20,
	};

	const [unit, setUnit] = useState('imperial');
	const [age, setAge] = useState(18);
	const [weight, setWeight] = useState(120);
	const [height, setHeight] = useState(60);
	const [sex, setSex] = useState('male');
	const [activityLvl, setActivityLvl] = useState('Sedentary');
	const [goal, setGoal] = useState('Maintain Weight');
	const [proteinVal, setProteinVal] = useState(1.0);
	const [carbPercent, setCarbPercent] = useState(50);
	const [bmr, setBmr] = useState(0);

	const handleUnitChange = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setUnit(e.target.value);
	};

	const handleAgeChange = (e: {
		target: { value: SetStateAction<number> };
	}) => {
		setAge(e.target.value);
	};

	const handleWeightChange = (e: {
		target: { value: SetStateAction<number> };
	}) => {
		setWeight(e.target.value);
	};

	const handleHeightChange = (e: {
		target: { value: SetStateAction<number> };
	}) => {
		setHeight(e.target.value);
	};

	const handleSexChange = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		console.log(e.target);
		setSex(e.target.value);
	};

	const handleActivityChange = (e: {
		target: { value: ChangeEventHandler<HTMLSelectElement> };
	}) => {
		console.log(e.target);
		setActivityLvl(e.target.value);
	};

	const handleGoalChange = (e: {
		target: { value: SetStateAction<number> };
	}) => {
		console.log(e.target);
		setGoal(String(e.target.value));
	};

	const handleProteinChange = (e: {
		target: { value: SetStateAction<number> };
	}) => {
		setProteinVal(e.target.value);
	};

	const handleCarbSplitChange = (e: {
		target: { value: SetStateAction<number> };
	}) => {
		setCarbPercent(e.target.value);
	};

	useEffect(() => {
		setBmr(() => calculateBMR());
	});

	const calculateBMR = () => {
		let mass = weight * 0.453592;
		let heightCM = height * 2.54;
		return mifflinStJeor(mass, heightCM);
	};

	const mifflinStJeor = (mass: number, heightCM: number) => {
		let s = sex == 'male' ? 5 : -161;
		return Math.floor(
			(10 * mass + 6.25 * heightCM - 5.0 * age + s) *
				activityOptions[activityLvl]
		);
	};

	return (
		<div className='App'>
			<h1 className='text-5xl font-black'>The Macrolator</h1>
			<h2 className='text-2xl font-extralight'>
				Calorie and Macro Calculator
			</h2>
			<div className='container flex p-5'>
				<div className='container p-5'>
					<RadioToggle
						label='Units'
						name='units'
						dataLeft='lb'
						dataRight='kg'
						valueLeft='imperial'
						valueRight='metric'
						onChange={handleUnitChange}
						defaultVal='imperial'
					/>
					<NumInput
						label='Age'
						value={age}
						onChange={handleAgeChange}
					/>
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

					<RadioToggle
						label='Sex'
						name='sex'
						dataLeft='Male'
						dataRight='Female'
						valueLeft='male'
						valueRight='female'
						onChange={handleSexChange}
						defaultVal='female'
					/>

					<div className='flex'>
						<Select
							label='Activity Level'
							options={activityOptions}
							value={activityLvl}
							onChange={handleActivityChange}
						/>
						{/* <Tooltip content={'level of activity'} /> */}
					</div>
					<Select
						label={'Goal'}
						options={goalOptions}
						value={goal}
						onChange={handleGoalChange}
					/>
				</div>

				{/* Display */}
				<div className='container flex flex-col flex-grow shadow-md p-8 rounded-xl space-y-5'>
					<h1 className='text-3xl my-5 font-black'>Results</h1>
					<div>Unit: {unit}</div>
					<div>Age: {age}</div>
					<div>Weight: {weight}</div>
					<div>Height: {height}</div>
					<div>Sex: {sex}</div>
					<div>Activity Level: {activityLvl}</div>
					<div>Goal: {goal}</div>
					<div>Daily Protein: {proteinVal}</div>
					<div>
						Daily Carb/Protein Split:{' '}
						{`${carbPercent}/${100 - carbPercent}`}
					</div>
					<div>BMR: {bmr}</div>
				</div>
			</div>

			<Slider
				label='Daily Protein'
				min={0.82}
				max={1.5}
				step={0.01}
				value={proteinVal}
				unit={'g'}
				onChange={handleProteinChange}
			/>
			<Slider
				label='Daily Carb/Protein Split'
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
