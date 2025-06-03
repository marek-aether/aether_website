'use client';

import { Box } from '@chakra-ui/react';
import About from '../../src/components/pages/main/sections/about';
import Contest from '../../src/components/pages/main/sections/contest';
import Header from '../../src/components/pages/main/sections/header';
import Symbiose from '../../src/components/pages/main/sections/symbiose';

export default function Page() {
	return (
		<Box textAlign='center'>
			<Header />
			<About />
			<Contest />
			<Symbiose />
			{/* <Blog /> */}
		</Box>
	);
}
