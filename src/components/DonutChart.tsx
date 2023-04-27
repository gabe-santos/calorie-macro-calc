import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
	dataset: number[];
	labels: string[];
	bgColors: string[];
}

export const DonutChart = ({ dataset, labels, bgColors }: DonutChartProps) => {
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'grams',
				data: dataset,
				backgroundColor: bgColors,
				borderWidth: 0,
				hoverOffset: 20,
			},
		],
	};

	const options = {
		cutout: '80%',
		responsive: true,
		maintainAspectRatio: false,
		layout: {
			padding: 20,
		},

		plugins: {},
	};

	return (
		<div className='chart-wrapper h-[16rem]'>
			<Doughnut data={data} options={options} />
		</div>
	);
};
