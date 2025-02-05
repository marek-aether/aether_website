import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CTAButton } from '../../../common/buttons/CTAButton';
import { useRouter } from 'next/navigation';

export const StageFour = () => {
	const router = useRouter();

	return (
		<Flex flexDir='column' align='start' gap='64px'>
			<Text fontSize='24px' fontWeight='500' w='100%'>
				W każdej chwili możesz przejść do jego ustawień aby dokonać zmian.
			</Text>
			<CTAButton
				variant='filled'
				type='submit'
				onClick={() => router.push('/login')}>
				Wróć do strony głównej
			</CTAButton>
		</Flex>
	);
};
