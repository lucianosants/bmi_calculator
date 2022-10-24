import { styled } from '@/styles/stitches.config';

export const Container = styled('main', {
	maxWidth: '120rem',
	margin: '0 auto',
	padding: '1.8rem',
});

export const Title = styled('h2', {
	color: '$brand',
	fontSize: '3.2rem',
	fontFamily: '$title',
	letterSpacing: '0.1rem',
});

export const Subtitle = styled('h4', {
	color: '$text',
	fontSize: '2.4rem',
	fontFamily: '$title, sans-serif',
	letterSpacing: '0.1rem',
});

export const Text = styled('p', {
	color: '$text',
	fontSize: '1.8rem',
	fontFamily: '$bodyText, serif',
	letterSpacing: '0.1rem',
});
