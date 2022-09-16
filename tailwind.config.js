/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/*.jsx',
		'./src/components/*.jsx',
		'./src/components/svgs/*.jsx',
	],
	theme: {
		extend: {
			colors: {
				primBlue: '#0E9DED',
				darkGray: '#2E2E2E',
			},
		},
	},
	plugins: [],
};
