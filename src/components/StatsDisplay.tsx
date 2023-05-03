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
		<div className='stats flex flex-col shadow-md stats-vertical bg-zinc-50'>
			<div className='stat place-items-center border-none'>
				<div className='stat-value'>{calories}</div>
				<div className='stat-desc'>calories</div>
			</div>

			<div className='stats flex rounded-t-none border-none bg-zinc-200'>
				<div className='stat place-items-center '>
					<div className='stat-value text-3xl'>{protein}</div>
					<div className='stat-desc'>g of protein</div>
				</div>

				<div className='stat place-items-center border-zinc-300'>
					<div className='stat-value text-3xl'>{carbs}</div>
					<div className='stat-desc '>g of carbs</div>
				</div>

				<div className='stat place-items-center border-zinc-300'>
					<div className='stat-value text-3xl'>{fat}</div>
					<div className='stat-desc'>g of fat</div>
				</div>
			</div>
		</div>
	);
};
