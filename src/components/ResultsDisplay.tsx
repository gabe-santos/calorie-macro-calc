import { DonutChart } from './DonutChart';
import { StatsDisplay } from './StatsDisplay';

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
	const calorieCount = tdee + 2000; // FIXME: fix these equations
	const proteinCount = dailyProtein;
	const carbCount = carbPercent;
	const fatCount = 100 - carbPercent;

	return (
		<div className='container flex flex-col shadow-xl p-8 rounded-2xl space-y-5 text-left max-h-full max-w-[50%]'>
			<h1 className='text-4xl mt-5 font-semibold text-center text-zinc-800'>
				Results
			</h1>
			<p className='mt-5 text-xl text-center'>
				Your BMR is <b>{bmr}</b> cal / day
			</p>
			<p className='text-xl text-center'>
				Your TDEE is <b>{tdee}</b> cal / day
			</p>
			<StatsDisplay
				calories={calorieCount}
				protein={proteinCount}
				carbs={carbCount}
				fat={fatCount}
			/>
			<DonutChart
				dataset={[dailyProtein, carbPercent, 100 - carbPercent]}
				labels={[`${dailyProtein}g of protein`, 'Carbs', 'Fat']}
				bgColors={[
					'hsl(145deg 63% 49%)',
					'hsl(37deg 90% 51%)',
					'hsl(168deg 44% 49%)',
				]}
			/>
		</div>
	);
};
