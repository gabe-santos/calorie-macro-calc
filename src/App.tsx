import { ChangeEventHandler, SetStateAction, useEffect, useState } from 'react';
import './App.css';
import { NumInput } from './NumInput';
import { RadioToggle } from './RadioToggle';
import { Select } from './Select';
import { Slider } from './Slider';
import { DonutChart } from './DonutChart';
import { ResultsDisplay } from './components/ResultsDisplay';

export const App = () => {
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

	const handleUnitChange = ({
		target: { value },
	}: {
		target: { value: string };
	}) => {
		setUnit(value);
	};

	const handleAgeChange = ({
		target: { value },
	}: {
		target: { value: number };
	}) => {
		setAge(value);
	};

	const handleWeightChange = ({
		target: { value },
	}: {
		target: { value: number };
	}) => {
		setWeight(value);
	};

	const handleHeightChange = ({
		target: { value },
	}: {
		target: { value: number };
	}) => {
		setHeight(value);
	};

	const handleSexChange = ({
		target: { value },
	}: {
		target: { value: string };
	}) => {
		setSex(value);
	};

	const handleActivityChange = ({
		target: { value },
	}: {
		target: { value: string };
	}) => {
		setActivityLvl(value);
	};

	const handleGoalChange = ({
		target: { value },
	}: {
		target: { value: string };
	}) => {
		setGoal(String(value));
	};

	const handleProteinChange = ({
		target: { value },
	}: {
		target: { value: number };
	}) => {
		setProteinVal(value);
	};

	const handleCarbSplitChange = ({
		target: { value },
	}: {
		target: { value: number };
	}) => {
		setCarbPercent(value);
	};

	useEffect(() => {
		setBmr(() => calculateBMR());
	});

	const lbsToKg = (lbs: number): number => {
		return lbs * 0.453592;
	};

	const inToCm = (inches: number): number => {
		return inches * 2.54;
	};

	const calculateBMR = (): number => {
		const weightKg = unit == 'metric' ? weight : lbsToKg(weight);
		const heightCm = unit == 'metric' ? height : inToCm(height);
		return Math.round(mifflinStJeor(weightKg, heightCm, age, sex));
	};

	const mifflinStJeor = (
		mass: number,
		heightCM: number,
		age: number,
		sex: string
	) => {
		let s = sex === 'male' ? 5 : -161;
		return 10 * mass + 6.25 * heightCM - 5.0 * age + s;
	};

	const calculateTDEE = (): number => {
		return Math.round(calculateBMR() * activityOptions[activityLvl]);
	};

	const calculateProtein = (): number => {
		return Math.round(proteinVal * weight);
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

				<ResultsDisplay
					unit={unit}
					age={age}
					weight={weight}
					height={height}
					sex={sex}
					activityLvl={activityLvl}
					goal={goal}
					dailyProtein={calculateProtein()}
					carbPercent={carbPercent}
					bmr={bmr}
					tdee={calculateTDEE()}
				/>
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
