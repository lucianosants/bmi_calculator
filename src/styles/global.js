import { globalCss } from '@/styles/stitches.config';

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		outline: 0,
		boxSizing: 'border-box',
	},
	':root': {
		fontSize: '62.5%',
	},
	html: {
		height: '100%',
		width: '100%',
	},
	'#root, .App': {
		height: '100%',
		width: '100%',
	},
	body: {
		backgroundColor: '$background',
		color: '$text',
		fontSize: '1.6rem',
		width: '100%',
		height: '100%',
	},
	button: {
		border: 'none',
		background: 'none',
	},
});
