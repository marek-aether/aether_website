import { Inter } from 'next/font/google';
import Provider from './provider';
import Navbar from '../components/global/navbar';
import { Flex } from '@chakra-ui/react';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className={inter.className} suppressHydrationWarning>
			<head />
			<body>
				<Provider>
					<Flex flexDir='column' bgColor='white'>
						<Navbar />
						{children}
					</Flex>
				</Provider>
			</body>
		</html>
	);
}
