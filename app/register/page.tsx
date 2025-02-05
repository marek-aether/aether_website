'use client';

import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { WidthWrapper } from '../../src/components/common/wrappers/widthWrapper';
import Form from '../../src/components/pages/register/form';
import { useUser } from '../../src/store/userStore';

export default function Page() {
	const [stage, setStage] = useState(0);

	const router = useRouter();
	const { user } = useUser();

	useEffect(() => {
		if (user && user.username !== undefined) router.replace('/');
	}, [user]);

	return (
		<WidthWrapper>
			<Flex flexDir='column' gap='60px' align='start' py='120px'>
				<Flex flexDir='column'>
					<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
						PERSONALIZACJA PROFILU
					</Text>
					<Text fontSize='62px' fontWeight='500' lineHeight='100%'>
						{stage === 3
							? 'Twój profil został pomyślnie spersonalizowany!'
							: 'Dokończ personalizacje swojego profilu w Aether Art Foundation'}
					</Text>
				</Flex>
				<Form stage={stage} setStage={setStage} />
			</Flex>
		</WidthWrapper>
	);
}
