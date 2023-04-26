import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
	dataset: number[];
}

export const DonutChart = ({ dataset }: DonutChartProps) => {
	const data = {
		labels: ['Protein', 'Carbs', 'Fat'],
		datasets: [
			{
				label: 'grams',
				data: dataset,
				backgroundColor: [
					'hsl(145deg 63% 49%)',
					'hsl(37deg 90% 51%)',
					'hsl(168deg 44% 49%)',
				],
				borderWidth: 0,
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					usePointStyle: true,
					boxWidth: 20,
				},
			},
		},
	};
	return <Doughnut data={data} options={options} />;
};
