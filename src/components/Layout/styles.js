import { styled } from '@/styles/stitches.config';

export const Container = styled('main', {
	maxWidth: '120rem',
	margin: '0 auto',
	padding: '1.8rem',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
});

export const Text = styled('h4', {
	color: '$text',
	fontSize: '1.8rem',
	fontFamily: '$bodyText',
	letterSpacing: '0.1rem',
	margin: '1.8rem 0',

	variants: {
		typography: {
			title: {
				fontFamily: '$title',

				fontSize: '3.2rem',
				color: '$brand',
			},
			subtitle: {
				fontFamily: '$title',

				fontSize: '2.4rem',
			},
			error: {
				color: '$errorText',
			},
			success: {
				color: '$successText',
			},
		},
	},
});
