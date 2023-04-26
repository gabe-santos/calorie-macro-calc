import { Chart, DoughnutController, ArcElement } from 'chart.js';
import { useRef, useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';

Chart.register(DoughnutController, ArcElement);

interface DonutChartProps {
	dataset: number[];
}

// export const DonutChart = ({ dataset }: DonutChartProps) => {
// 	const data = {
// 		labels: ['Protein', 'Carbs', 'Fat'],
// 		datasets: [
// 			{
// 				label: 'grams',
// 				data: dataset,
// 				backgroundColor: [
// 					'hsl(145deg 63% 49%)',
// 					'hsl(37deg 90% 51%)',
// 					'hsl(168deg 44% 49%)',
// 				],
// 				borderWidth: 0,
// 				hoverOffset: 20,
// 				cutout: '70%',
// 				// responsive: true,
// 				// maintainAspectRatio: false,
// 			},
// 		],
// 	};

// 	const options = {
// 		plugins: {
// 			legend: {
// 				display: true,
// 				position: 'bottom',
// 				labels: {
// 					usePointStyle: true,
// 					boxWidth: 20,
// 				},
// 			},
// 		},
// 	};

// 	return <Doughnut data={data} options={options} />;
// };

export const DonutChart = ({ data, labels, backgroundColors }) => {
	const chartRef = useRef();

	useEffect(() => {
		const canvasRef = chartRef.current;
		const ctx = canvasRef.getContext('2d');

		let chartInstance = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: labels,
				datasets: [
					{
						data: data,
						backgroundColor: backgroundColors,
						borderWidth: 0,
						hoverOffset: 20,
					},
				],
			},
			options: {
				cutout: '70%',
				responsive: true,
				maintainAspectRatio: false,
				layout: {
					padding: 20,
				},
			},
		});

		// Cleanup function to destroy the chart instance
		return () => {
			chartInstance.destroy();
		};
	}, [data, labels, backgroundColors]);

	return (
		<div className='chart-container max-w-full'>
			<canvas ref={chartRef} />
		</div>
	);
};
