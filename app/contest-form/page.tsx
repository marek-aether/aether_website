'use client';

import { Flex, Text } from '@chakra-ui/react';
import { WidthWrapper } from '../../src/components/common/wrappers/widthWrapper';
import ContestForm from '../../src/components/pages/contest-form/form';
import { useUser } from '../../src/store/userStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
	const user = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!user) router.replace('/login');
	}, [user]);

	return (
		<WidthWrapper>
			<Flex flexDir='column' gap='60px' align='start' py='120px'>
				<Flex flexDir='column' w='75%' gap='8px'>
					<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
						Formularz zgłoszeniowy
					</Text>
					<Text fontSize='62px' fontWeight='500' lineHeight='100%'>
						Zgłoś swoją pracę w konkursie Aether Art Competition 2025.
					</Text>
					<Text fontSize='24px' fontWeight='500' mt='16px'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
						mollis vulputate lorem cursus rutrum. Integer quis mi eget ante
						cursus faucibus. Interdum et malesuada fames ac ante ipsum primis in
						faucibus. Donec fringilla euismod diam vel dignissim. Suspendisse
						feugiat ullamcorper efficitur.
					</Text>
				</Flex>
			</Flex>
			<ContestForm />
		</WidthWrapper>
	);
}
