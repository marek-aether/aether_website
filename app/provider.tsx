'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { system } from '../src/components/theme';

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<ChakraProvider value={system}>
			<ThemeProvider attribute='class' disableTransitionOnChange>
				{props.children}
			</ThemeProvider>
		</ChakraProvider>
	);
}
