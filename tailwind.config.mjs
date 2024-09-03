/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'blue-100':'#e1eefd',
				'blue-200':'#bdddfa',
				'blue-300':'#82c1f7',
				'blue-400':'#40a3f0',				
				'blue-500': '#1787e0',
				'blue-600': '#0960ae',
				'blue-700': '#09549b',
				'blue-800': '#0c4880',
				'blue-900': '#103d6a',
				'blue-950': '#0b2646'
			},
			textColor: {
				'blue-100':'#e1eefd',
				'blue-200':'#bdddfa',
				'blue-300':'#82c1f7',
				'blue-400':'#40a3f0',				
				'blue-500': '#1787e0',
				'blue-600': '#0960ae',
				'blue-700': '#09549b',
				'blue-800': '#0c4880',
				'blue-900': '#103d6a',
				'blue-950': '#0b2646'
			}			

		},
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
