import { backendUrl } from '../../consts';
import { UserSchema } from '../types_fe';

export const updateUser = async (id: string, req: Partial<UserSchema>) => {
	const url = `${backendUrl}/user/${id}`;

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
