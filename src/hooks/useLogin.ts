// 'use client';

// import { useEffect, useState } from 'react';
// import { User, useUser } from '../store/userStore';

// export const useLogin = () => {
// 	const { login, update } = useUser();
// 	const [user, setUser] = useState<User>();

// 	useEffect(() => {
// 		const user = localStorage.getItem('user');
// 		if (user) {
// 			const parsedUser = JSON.parse(user);

// 			login({ email: parsedUser.email, accessToken: parsedUser.accessToken });
// 			update(parsedUser);
// 			setUser(parsedUser);
// 		}
// 	}, []);

// 	return user;
// };
