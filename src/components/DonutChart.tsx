import { Chart, DoughnutController, ArcElement } from 'chart.js';
import { useRef, useEffect } from 'react';

Chart.register(DoughnutController, ArcElement);

interface DonutChartProps {
	data: number[];
	labels: string[];
	backgroundColors: string[];
}

export const DonutChart = ({
	data,
	labels,
	backgroundColors,
}: DonutChartProps) => {
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
