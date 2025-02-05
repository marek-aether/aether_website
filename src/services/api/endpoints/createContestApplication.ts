import { ContestApplicationFE } from '../../../components/pages/contest-form/types_fe';
import { PaymentStatus } from '../types_fe';

export const createContestApplication = async (
	id: string,
	req: ContestApplicationFE & {
		paymentStatus: PaymentStatus;
		paymentPrice: number;
	}
) => {
	const url = `http://localhost:8000/user/application/${id}`;

	const resp = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify({
			...req,
		}),
		credentials: 'include',
	});

	if (!resp.ok) return;

	return await resp.json();
};
