import { Text } from '@/components/Layout/styles';
import { FooterContainer } from './styles';

export default function Footer() {
	return (
		<FooterContainer>
			<Text>
				Created by{' '}
				<a href='https://github.com/lucianosants' target={'_blank'}>
					lucianosants
				</a>
			</Text>
		</FooterContainer>
	);
}
