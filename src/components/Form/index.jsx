import { FormContainer, LabelContainer } from './styles';

export default function Form({
	handleSubmit,
	weight,
	height,
	setWeight,
	setHeight,
}) {
	return (
		<FormContainer onSubmit={handleSubmit}>
			<LabelContainer>
				<span>Peso:</span>
				<input
					required
					type='number'
					value={weight || ''}
					onChange={setWeight}
					placeholder='Qual é o seu peso?'
				/>
			</LabelContainer>

			<LabelContainer>
				<span>Altura:</span>
				<input
					required
					type='number'
					value={height || ''}
					onChange={setHeight}
					placeholder='Qual é a sua altura?'
				/>
			</LabelContainer>

			<LabelContainer>
				<button type='submit'>Calcular</button>
			</LabelContainer>
		</FormContainer>
	);
}
