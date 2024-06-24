/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		function ({ addUtilities }){
			addUtilities({
				'.scrollbar-hide':{
					'&::-webkit-scrollbar':{
						display: 'none'
					},
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none'
				}
			})
		}
	],
}
