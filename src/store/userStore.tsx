// 'use client';

// import { createContext, ReactNode, useContext, useReducer } from 'react';
// import { UserSchema } from '../services/api/types_fe';

// enum ActionTypes {
// 	LOGIN,
// 	LOGOUT,
// 	UPDATE,
// }

// export type User = {
// 	isLoggedin: boolean;
// 	accessToken: string;
// } & UserSchema;

// export const defaultUser: User = {
// 	isLoggedin: false,
// 	email: '',
// 	accessToken: '',
// 	_id: '',
// 	firstName: '',
// 	lastName: '',
// 	birthDate: '',
// 	username: '',
// 	artisticNickname: '',
// 	citizenship: '',
// 	address: '',
// 	postalCode: '',
// 	city: '',
// 	phoneNumber: '',
// 	isArtist: false,
// 	portfolioUrl: '',
// 	instagramUrl: '',
// 	twitterUrl: '',
// 	facebookUrl: '',
// 	interestedList: [],
// };

// interface UserContextType {
// 	user: User;
// 	login: (userData: { email: string; accessToken: string }) => void;
// 	logout: () => void;
// 	update: (v: Partial<UserSchema>) => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// const userReducer = (
// 	state: User,
// 	action: {
// 		payload?: any;
// 		type: ActionTypes;
// 	}
// ) => {
// 	switch (action.type) {
// 		case ActionTypes.LOGIN:
// 			if (!action.payload) return state;

// 			const user = {
// 				...state,
// 				email: action.payload.email,
// 				accessToken: action.payload.accessToken,
// 				isLoggedin: true,
// 			};

// 			return user;
// 		case ActionTypes.LOGOUT:
// 			localStorage.removeItem('user');
// 			localStorage.removeItem('accessToken');
// 			localStorage.removeItem('email');
// 			localStorage.removeItem('id');
// 			return defaultUser;

// 		case ActionTypes.UPDATE:
// 			localStorage.setItem(
// 				'user',
// 				JSON.stringify({ ...state, ...action.payload })
// 			);
// 			return { ...state, ...action.payload };
// 		default:
// 			return state;
// 	}
// };

// interface IProps {
// 	children: ReactNode;
// }

// export const UserProvider = ({ children }: IProps) => {
// 	const [state, dispatch] = useReducer(userReducer, defaultUser);

// 	const login = (userData: { email: string; accessToken: string }) => {
// 		dispatch({ type: ActionTypes.LOGIN, payload: userData });
// 	};

// 	const logout = () => {
// 		dispatch({ type: ActionTypes.LOGOUT });
// 	};

// 	const update = (val: Partial<UserSchema>) => {
// 		dispatch({ type: ActionTypes.UPDATE, payload: val });
// 	};

// 	return (
// 		<UserContext.Provider value={{ user: state, login, logout, update }}>
// 			{children}
// 		</UserContext.Provider>
// 	);
// };

// export const useUser = () => {
// 	const context = useContext(UserContext);
// 	if (!context) {
// 		throw new Error('useUser must be used within a UserProvider');
// 	}
// 	return context;
// };

import {
	createContext,
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { UserSchema } from '../services/api/types_fe';
import { usePathname } from 'next/navigation';
import { backendUrl } from '../services/consts';

const UserContext = createContext<{
	user: UserSchema | null | undefined;
	setUser: Dispatch<SetStateAction<UserSchema | null | undefined>>;
} | null>(null);

interface IProps {
	children: ReactNode;
}

export const UserProvider: FC<IProps> = ({ children }) => {
	const [user, setUser] = useState<UserSchema | null | undefined>(null);
	const pathname = usePathname();

	useEffect(() => {
		fetch(`${backendUrl}/auth/me`, { credentials: 'include' })
			.then((res) => res.json())
			.then((data) => {
				if (!data.error) setUser(data.user);
			})
			.catch(() => {
				setUser(undefined);
			});
	}, [pathname]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export function useUser() {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
}
