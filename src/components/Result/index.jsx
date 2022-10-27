import { Text } from '@/components/Layout/styles';
import {
	ResultContainer,
	Table,
	TableBody,
	TableContainer,
	TableData,
	TableHead,
} from './styled';

export default function Result() {
	const table_imc = [
		{ id: '1', title: 'Abaixo do peso', imc: 'Menor que 18,5' },
		{ id: '2', title: 'Peso normal', imc: 'Entre 18,5 a 24,9' },
		{
			id: '3',
			title: 'Excesso de peso',
			imc: 'Entre 25,0 a 29,9',
		},
		{ id: '4', title: 'Obesidade 1', imc: 'Entre 30,0 a 34,9' },
		{ id: '5', title: 'Obesidade 2', imc: 'Entre 35,0 a 39,9' },
		{
			id: '6',
			title: 'Obesidade mórbida',
			imc: 'Igual ou maior que 40.0',
		},
	];

	return (
		<ResultContainer>
			<Text typography={'title'}>Calcule seu IMC</Text>
			<Text>
				Veja abaixo a tabela com os respectivos resultados. Confira
				também o seu resultado.
			</Text>

			<TableContainer>
				<Table>
					<TableHead>
						<tr>
							<th>IMC</th>
							<th>Classificações</th>
						</tr>
					</TableHead>
					<TableBody>
						{table_imc.map((data) =>
							data.id % 2 == 0 ? (
								<TableData colors={'td_a'} key={data.id}>
									<td>{data.title}</td>
									<td>{data.imc}</td>
								</TableData>
							) : (
								<TableData key={data.id}>
									<td>{data.title}</td>
									<td>{data.imc}</td>
								</TableData>
							)
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</ResultContainer>
	);
}
