import { Box } from '@chakra-ui/react';
import Header from '../components/pages/main/sections/header';
import About from '../components/pages/main/sections/about';

export default async function Page() {
	return (
		<Box textAlign='center' fontSize='xl'>
			<Header />
			<About />
		</Box>
	);
}
