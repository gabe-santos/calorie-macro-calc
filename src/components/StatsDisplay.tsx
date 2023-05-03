interface StatsDisplayProps {
	calories: number;
	protein: number;
	carbs: number;
	fat: number;
}

export const StatsDisplay = ({
	calories,
	protein,
	carbs,
	fat,
}: StatsDisplayProps) => {
	return (
		<div className='stats flex flex-col shadow-lg stats-vertical bg-blue-400'>
			<div className='stat place-items-center border-none'>
				<div className='stat-value'>{calories}</div>
				<div className='stat-desc'>calories</div>
			</div>

			<div className='stats flex rounded-t-none border-none'>
				<div className='stat place-items-center bg-rose-500'>
					<div className='stat-value text-3xl'>{protein}</div>
					<div className='stat-desc'>g of protein</div>
				</div>

				<div className='stat place-items-center bg-emerald-500'>
					<div className='stat-value text-3xl'>{carbs}</div>
					<div className='stat-desc '>g of carbs</div>
				</div>

				<div className='stat place-items-center bg-amber-500'>
					<div className='stat-value text-3xl'>{fat}</div>
					<div className='stat-desc'>g of fat</div>
				</div>
			</div>
		</div>
	);
};
