import { createStitches } from '@stitches/react';

export const { styled, globalCss, getCssText } = createStitches({
	theme: {
		colors: {
			brand: '#eb5489',
			text: '#0d0b22',
			background: '#fafafa',
			theadBg: '#ff91a1',
			rowA: '#f7d0de',
			rowB: '#ffdce8',
			successBg: '#b6ffb6',
			successText: '#006500',
			errorBg: '#fba0a0',
			errorText: '#650000',
		},
		fonts: {
			title: 'Oswald',
			bodyText: 'Source Serif Pro',
		},
	},
	media: {
		mobile: '(max-width: 720px)',
	},
});
