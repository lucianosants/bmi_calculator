import { styled } from '@/styles/stitches.config';

export const FooterContainer = styled('footer', {
	borderTop: '1px solid $brand',
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	padding: '1.8rem',
	marginTop: '1.8rem',
	order: 2,

	a: {
		color: '$brand',
		fontWeight: '600',

		'&:hover': {
			opacity: '0.9',
		},
	},
});
