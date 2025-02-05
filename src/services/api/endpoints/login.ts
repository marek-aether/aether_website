interface Req {
	email: string;
	password: string;
}

export const login = async (req: Req) => {
	const url = 'http://localhost:8000/auth/login';

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
		credentials: 'include',
	});

	if (!resp.ok) return;

	return await resp.json();
};
