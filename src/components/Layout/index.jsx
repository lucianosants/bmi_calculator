import { useState } from 'react';

import { Container } from './styles';

import Form from '@/components/Form';
import Result from '@/components/Result';

export default function Layout() {
	const [weight, setWeight] = useState(0);
	const [height, setHeight] = useState(0);
	const [bmi, setBmi] = useState(0);
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (weight <= 0 || !weight) {
			return setError('peso invalido');
		}

		if (height <= 0 || !height) {
			return setError('Altura invalida');
		}

		const weightFloat = parseFloat(weight);
		const heightFloat = parseFloat(height);

		setBmi(weightFloat / (heightFloat * heightFloat));
		setError('');
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
			<Result />
		</Container>
	);
}
