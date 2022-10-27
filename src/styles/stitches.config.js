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
		},
		fonts: {
			title: 'Oswald',
			bodyText: 'Source Serif Pro',
		},
	},
});
