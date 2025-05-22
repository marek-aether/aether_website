import { backendUrl } from '../../consts';

interface Req {
	email: string;
	password: string;
}

export const register = async (req: Req) => {
	const url = `${backendUrl}/auth/register`;

	const resp = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		body: JSON.stringify({
			email: req.email,
			password: req.password,
		}),
	});

	if (!resp.ok) return;

	return await resp.json();
};
