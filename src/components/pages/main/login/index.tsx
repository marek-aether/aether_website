'use client';

import {
	DialogBackdrop,
	DialogBody,
	DialogContent,
	DialogRoot,
	DialogTrigger,
	Flex,
	Input,
	Text,
} from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { aetherArtApi } from '../../../../services/api';
import { useUser } from '../../../../store/userStore';
import { CTAButton } from '../../../common/buttons/CTAButton';
import { AetherArtLogo } from '../../../common/icons/AetherArtLogo';
import { PasswordInput } from '../../../ui/password-input';
import { toaster } from '../../../ui/toaster';

interface IProps {
	color: string;
}

const Login: FC<IProps> = ({ color }) => {
	const [loginState, setLoginState] = useState<'login' | 'register'>('login');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorText, setErrorText] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const router = useRouter();
	const path = usePathname();

	const { user, setUser } = useUser();

	const changeLoginState = () => {
		setLoginState((prev) => (prev === 'login' ? 'register' : 'login'));
	};

	const validate = () => {
		if (!email || !password) {
			setErrorText('Email and password are required');
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setErrorText('Invalid email format');
			return;
		}

		if (password.length < 8) {
			setErrorText('Password must be at least 8 characters');
			return;
		}
		if (!/[A-Z]/.test(password)) {
			setErrorText('Password must contain at least one uppercase letter');
			return;
		}
		if (!/[a-z]/.test(password)) {
			setErrorText('Password must contain at least one lowercase letter');
			return;
		}
		if (!/\d/.test(password)) {
			setErrorText('Password must contain at least one number');
			return;
		}
		if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
			setErrorText('Password must contain at least one special character');
			return;
		}

		return true;
	};

	const handleSubmit = async () => {
		setErrorText('');

		if (loginState === 'register') {
			if (!validate()) return;

			const respRegister = await aetherArtApi.register({ email, password });

			setIsOpen(false);
			setLoginState('login');
			const respLogin = await aetherArtApi.login({ email, password });

			if (!respRegister || !respLogin) {
				toaster.create({
					title: `Could not sign up. Try again later`,
					type: 'error',
				});
				return;
			}

			setUser(respLogin.user);

			router.push(respRegister.redirectUrl);
		} else {
			const resp = await aetherArtApi.login({ email, password });

			if (!resp) {
				toaster.create({
					title: `Invalid credentials`,
					type: 'error',
				});
				return;
			}

			console.log(resp);

			setUser(resp.user);
		}

		setIsOpen(false);
	};

	useEffect(() => {
		if (path === '/login') {
			router.push('/');
			setIsOpen(true);
		}
	}, [path]);

	return (
		<DialogRoot
			size='xl'
			preventScroll={false}
			open={isOpen}
			onOpenChange={(e) => setIsOpen(e.open)}>
			{!user && (
				<DialogTrigger asChild>
					<Text fontSize='12px' color={color} cursor='pointer'>
						LOG IN
					</Text>
				</DialogTrigger>
			)}

			<DialogBackdrop />

			<DialogContent
				position='fixed'
				top='50%'
				left='50%'
				transform='translate(-50%, -60%)'
				bg='brand.bgLight'
				borderRadius='24px'
				p='24px 20px'>
				<DialogBody p='0'>
					<Flex align='center' gap='30px' justify='space-between'>
						<Flex flexDir='column' gap='40px' w='50%' p='0 30px'>
							<Flex flexDir='column' gap='8px'>
								<Text fontSize='36px' fontWeight='500' color='brand.textDark'>
									Get started
								</Text>
								<Text
									fontSize='16px'
									fontWeight='500'
									color='brand.textSecondary'>
									Welcome to Aether Art
								</Text>
							</Flex>
							<Flex flexDir='column' gap='28px' w='100%'>
								<Flex flexDir='column' gap='16px' w='100%'>
									<Flex flexDir='column' gap='8px' w='100%'>
										<Text
											fontSize='14px'
											fontWeight='500'
											color='brand.textDark'>
											Email
										</Text>
										<Input
											placeholder='your@email.com'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											color='brand.textDark'
											borderRadius='24px'
											border='1px solid #C3C3C3'
											bg='transparent'
											_active={{ border: '2px solid #7B0323' }}
											_focus={{ border: '2px solid #7B0323' }}
										/>
									</Flex>
									<Flex flexDir='column' gap='8px' mb='8px'>
										<Text
											fontSize='14px'
											fontWeight='500'
											color='brand.textDark'>
											Password
										</Text>
										<PasswordInput
											color='brand.textDark'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											bg='transparent'
											borderRadius='24px'
											border='1px solid #C3C3C3'
											_active={{ border: '2px solid #7B0323' }}
											_focus={{ border: '2px solid #7B0323' }}
										/>
									</Flex>
									{errorText.length > 0 && (
										<Text fontSize='12px' color='red' mt='-16px'>
											{errorText}
										</Text>
									)}
									<CTAButton variant='filled' onClick={handleSubmit}>
										{loginState === 'login' ? 'Zaloguj się' : 'Zarejestruj się'}
									</CTAButton>
									<Flex
										fontSize='14px'
										fontWeight='500'
										color='brand.textDark'
										align='center'
										justify='center'>
										{loginState === 'login'
											? 'Nie masz konta?'
											: 'Masz już konto?'}
										&nbsp;
										<Text
											color='brand.primary'
											fontWeight='700'
											textDecoration='underline'
											cursor='pointer'
											onClick={changeLoginState}>
											{loginState === 'login'
												? 'Zarejestruj się'
												: 'Zaloguj się'}
										</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							bgImage='url(/static/bg1.png)'
							objectFit='cover'
							objectPosition='center'
							align='center'
							justify='center'
							borderRadius='24px'
							h='400px'
							w='360px'>
							<AetherArtLogo />
						</Flex>
					</Flex>
				</DialogBody>
			</DialogContent>
		</DialogRoot>
	);
};

export default Login;
