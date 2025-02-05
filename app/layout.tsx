'use client';

import { Flex } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Footer from '../src/components/global/footer';
import Navbar from '../src/components/global/navbar';
import { UserProvider } from '../src/store/userStore';
import Provider from './provider';
import { Toaster } from '../src/components/ui/toaster';

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
					<UserProvider>
						<Flex
							flexDir='column'
							bgColor='brand.bgLight'
							color='brand.textDark'>
							<Toaster />
							<Navbar />
							{children}
							<Footer />
						</Flex>
					</UserProvider>
				</Provider>
			</body>
		</html>
	);
}
