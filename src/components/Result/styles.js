import { styled } from '@/styles/stitches.config';

export const TableContainer = styled('div', {});

export const ResultContainer = styled('section', {
	padding: '1.8rem',
	maxWidth: '60%',
});

export const Table = styled('table', {
	width: '100%',
});

export const TableHead = styled('thead', {
	background: '$theadBg',
	fontFamily: '$title',
	letterSpacing: '0.1rem',
	fontSize: '1.8rem',

	th: {
		padding: '1.6rem',
		textTransform: 'uppercase',
	},
});

export const TableBody = styled('tbody', {
	background: 'purple',
});

export const TableData = styled('tr', {
	backgroundColor: '$rowA',
	padding: '1.8rem',

	variants: {
		colors: {
			td_a: {
				backgroundColor: '$rowB',
			},
		},
	},

	td: {
		padding: '1.3rem',
	},
});

export const ResultDisplay = styled('div', {
	textAlign: 'center',
	background: '$errorBg',
	padding: '1.3rem 0',

	variants: {
		state: {
			success: {
				background: '$successBg',
			},
		},
	},
});
