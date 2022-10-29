import { useEffect, useState } from 'react';

import { Container } from './styles';

import Form from '@/components/Form';
import Result from '@/components/Result';

import { table_imc as table } from '@/components/Result';
import Footer from '@/components/Footer';

export default function Layout() {
	const [weight, setWeight] = useState(0);
	const [height, setHeight] = useState(0);
	const [bmi, setBmi] = useState(0);
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [resultArray, setResultArray] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		const weightFloat = parseFloat(weight);
		const heightFloat = parseFloat(height);

		if (weight <= 0 || !weight) {
			return setError('Peso invalido');
		}

		if (height <= 0 || !height) {
			return setError('Altura invalida');
		}

		setBmi(weightFloat / (heightFloat * heightFloat));
	};

	useEffect(() => {
		if (bmi <= 18.5) {
			setResultArray(table[0].id);
			setMessage(table[0].title);
		}

		if (bmi >= 18.5) {
			setResultArray(table[1].id);
			setMessage(table[1].title);
		}

		if (bmi >= 25.0) {
			setResultArray(table[2].id);
			setMessage(table[2].title);
		}

		if (bmi >= 30.0) {
			setResultArray(table[3].id);
			setMessage(table[3].title);
		}
		if (bmi >= 35.0) {
			setResultArray(table[4].id);
			setMessage(table[4].title);
		}

		if (bmi >= 40.0) {
			setResultArray(table[5].id);
			setMessage(table[5].title);
		}
	}, [handleSubmit]);

	return (
		<Container>
			<Form
				weight={weight}
				height={height}
				handleSubmit={(e) => handleSubmit(e)}
				setWeight={(e) => setWeight(e.target.value)}
				setHeight={(e) => setHeight(e.target.value)}
			/>

			{resultArray === 1 && (
				<Result
					result={bmi.toFixed(1)}
					message={message}
					error={error}
					type='error'
				/>
			)}

			{resultArray === 2 && (
				<Result
					result={bmi.toFixed(1)}
					message={message}
					error={error}
					type='success'
				/>
			)}

			{resultArray === 3 && (
				<Result
					result={bmi.toFixed(1)}
					message={message}
					error={error}
					type='error'
				/>
			)}

			{resultArray === 4 && (
				<Result
					result={bmi.toFixed(1)}
					message={message}
					error={error}
					type='error'
				/>
			)}

			{resultArray === 5 && (
				<Result
					result={bmi.toFixed(1)}
					message={message}
					error={error}
					type='error'
				/>
			)}

			{resultArray === 6 && (
				<Result
					result={bmi.toFixed(1)}
					message={message}
					error={error}
					type='error'
				/>
			)}

			<Footer />
		</Container>
	);
}
