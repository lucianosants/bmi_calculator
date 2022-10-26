import { Container } from './styles';
import Form from '@/components/Form';
import { useState } from 'react';

export default function Layout() {
	const [weight, setWeight] = useState(0);
	const [height, setHeight] = useState(0);
	const [bmi, setBmi] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (weight <= 0 || !weight) {
			return console.log('Peso inválido!');
		}

		if (height <= 0 || !height) {
			return console.log('Altura inválida!');
		}

		setBmi(weight / (height * height));
	};

	return (
		<Container>
			<Form
				weight={weight}
				height={height}
				handleSubmit={(e) => handleSubmit(e)}
				setWeight={(e) => setWeight(e.target.value)}
				setHeight={(e) => setHeight(e.target.value)}
			/>
		</Container>
	);
}
