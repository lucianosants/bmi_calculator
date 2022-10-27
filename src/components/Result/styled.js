import { styled } from '@/styles/stitches.config';

export const ResultContainer = styled('section', {
	padding: '1.8rem',
});

export const Table = styled('table', {
	width: '100%',
});

export const TableHead = styled('thead', {
	background: '$theadBg',
	fontFamily: '$title',
	lineHeight: '0.1rem',
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
