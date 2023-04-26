/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: [],
		styled: true,
		base: false,
		utils: true,
		logs: true,
	},
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [require('daisyui')],
};
