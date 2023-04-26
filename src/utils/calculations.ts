const lbsToKg = (lbs: number): number => {
	return lbs * 0.453592;
};

const inToCm = (inches: number): number => {
	return inches * 2.54;
};

export const calculateBMR = (
	unit: string,
	weight: number,
	height: number,
	sex: string,
	age: number
): number => {
	const weightKg = unit == 'metric' ? weight : lbsToKg(weight);
	const heightCm = unit == 'metric' ? height : inToCm(height);
	return Math.round(mifflinStJeor(weightKg, heightCm, age, sex));
};

export const mifflinStJeor = (
	mass: number,
	heightCM: number,
	age: number,
	sex: string
) => {
	let s = sex === 'male' ? 5 : -161;
	return 10 * mass + 6.25 * heightCM - 5.0 * age + s;
};

export const calculateTDEE = (bmr: number, activityLvl: number): number => {
	return Math.round(bmr * activityLvl);
};

export const calculateProtein = (
	proteinVal: number,
	weight: number
): number => {
	return Math.round(proteinVal * weight);
};
