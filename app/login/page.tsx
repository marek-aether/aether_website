'use client';

import { Box } from '@chakra-ui/react';
import Header from '../../src/components/pages/main/sections/header';
import About from '../../src/components/pages/main/sections/about';
import Contest from '../../src/components/pages/main/sections/contest';
import Symbiose from '../../src/components/pages/main/sections/symbiose';
import Blog from '../../src/components/pages/main/sections/blog';

export default function Page() {
	return (
		<Box textAlign='center'>
			<Header />
			<About />
			<Contest />
			<Symbiose />
			<Blog />
		</Box>
	);
}
