import { styled } from '@/styles/stitches.config';

export const FormContainer = styled('form', {
	boxShadow: '0 0  3px rgba(0, 0, 0, .5)',
	borderRadius: '7px',
	padding: '1.8rem',
	display: 'flex',
	flexDirection: 'column',
	width: '30%',
	height: 'auto',
	margin: '0 auto',

	'@mobile': {
		width: '100%',
		order: 1,
	},
});

export const LabelContainer = styled('label', {
	margin: '1.8rem 0',
	position: 'relative',

	span: {
		position: 'absolute',
		top: '-1.5rem',
		left: '1.9rem',
		backgroundColor: '$background',
		// zIndex: '3',
		padding: '0 0.5rem',
		fontFamily: '$title',
		letterSpacing: '.1rem',
	},

	input: {
		background: '$background',
		padding: '1.6rem',
		borderRadius: '7px',
		border: '0',
		boxShadow: '0 0  3px rgba(0, 0, 0, .7)',
		width: '100%',
		fontFamily: '$bodyText',

		'&:focus': {
			background: '$background',
			boxShadow: '0 0  8px #eb5489',
		},
	},

	button: {
		border: '2px solid transparent',
		fontFamily: '$title',
		letterSpacing: '.1rem',
		textTransform: 'uppercase',

		backgroundColor: '$brand',
		padding: '18px',
		borderRadius: '7px',
		color: '#fafafa',
		width: '100%',
		cursor: 'pointer',
		transition: 'all 0.3s',

		'&:hover, &:focus': {
			background: '$background',
			color: '$brand',
			border: '2px solid $brand',
		},
	},
});
