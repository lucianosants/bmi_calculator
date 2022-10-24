import { createStitches } from '@stitches/react';

export const { styled, globalCss, getCssText } = createStitches({
	theme: {
		colors: {
			brand: '#bb8aff',
			text: 'rgba(0, 0, 0, 0.7)',
			background: '#fafafa',
		},
		fonts: {
			title: 'Oswald',
			bodyText: 'Source Serif Pro',
		},
	},
});
