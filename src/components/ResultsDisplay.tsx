import { DonutChart } from './DonutChart';

interface ResultsDisplayProps {
	unit: string;
	age: number;
	weight: number;
	height: number;
	sex: string;
	activityLvl: string;
	goal: string;
	dailyProtein: number;
	carbPercent: number;
	bmr: number;
	tdee: number;
}

export const ResultsDisplay = ({
	unit,
	age,
	weight,
	height,
	sex,
	activityLvl,
	goal,
	dailyProtein,
	carbPercent,
	bmr,
	tdee,
}: ResultsDisplayProps) => {
	return (
		<div className='container flex flex-col flex-grow shadow-md p-8 rounded-xl space-y-5 text-left'>
			<h1 className='text-3xl my-5 font-semibold text-center'>Results</h1>
			<div>Unit: {unit}</div>
			<div>Age: {age}</div>
			<div>Weight: {weight}</div>
			<div>Height: {height}</div>
			<div>Sex: {sex}</div>
			<div>Activity Level: {activityLvl}</div>
			<div>Goal: {goal}</div>
			<div>Daily Protein: {dailyProtein}</div>
			<div>
				Daily Carb/Protein Split:{' '}
				{`${carbPercent}/${100 - carbPercent}`}
			</div>
			<div>BMR: {bmr}</div>
			<div>TDEE: {tdee}</div>
			<DonutChart
				dataset={[dailyProtein, carbPercent, 100 - carbPercent]}
			/>
		</div>
	);
};
