import { useEffect, useState } from 'react';
import './App.css';
import { NumInput } from './components/NumInput';
import { RadioToggle } from './components/RadioToggle';
import { Select } from './components/Select';
import { Slider } from './components/Slider';
import { ResultsDisplay } from './components/ResultsDisplay';
import {
	calculateBMR,
	calculateProtein,
	calculateTDEE,
} from './utils/calculations';
import { FormDisplay } from './components/FormDisplay';

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

	const handleProteinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProteinVal(Number(e.target.value));
	};

	const handleCarbSplitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCarbPercent(Number(e.target.value));
	};

	useEffect(() => {
		setBmr(() => calculateBMR(unit, weight, height, sex, age));
	});

	return (
		<div className='App'>
			<h1 className='text-5xl font-black'>The Macrolator</h1>
			<h2 className='text-2xl font-extralight'>
				Calorie and Macro Calculator
			</h2>
			<div className='container flex p-5'>
				<FormDisplay
					age={age}
					weight={weight}
					height={height}
					activityLvl={activityLvl}
					goal={goal}
					activityOptions={activityOptions}
					goalOptions={goalOptions}
					proteinVal={proteinVal}
					carbPercent={carbPercent}
					handleUnitChange={handleUnitChange}
					handleAgeChange={handleAgeChange}
					handleWeightChange={handleWeightChange}
					handleHeightChange={handleHeightChange}
					handleSexChange={handleSexChange}
					handleActivityChange={handleActivityChange}
					handleGoalChange={handleGoalChange}
					handleProteinChange={handleProteinChange}
					handleCarbSplitChange={handleCarbSplitChange}
				/>
				<ResultsDisplay
					unit={unit}
					age={age}
					weight={weight}
					height={height}
					sex={sex}
					activityLvl={activityLvl}
					goal={goal}
					dailyProtein={calculateProtein(proteinVal, weight)}
					carbPercent={carbPercent}
					bmr={bmr}
					tdee={calculateTDEE(bmr, activityOptions[activityLvl])}
				/>
			</div>
		</div>
	);
};
