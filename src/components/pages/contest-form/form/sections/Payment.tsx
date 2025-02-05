import React from 'react';
import { ContestFormSection } from './ContestFormSection';
import { Flex, Text } from '@chakra-ui/react';
import { CTAButton } from '../../../../common/buttons/CTAButton';

export const Payment = () => {
	const leftSectionContent = (
		<Text fontSize='16px' color='brand.textSecondary'>
			Nie ma limitu zgłoszeń swoich prac, lecz każde zgłoszenie wymaga opłaty
			wpisowej 100$ USD.
			<br />
			<br />
			Operatorem płatności jest Stripe.
		</Text>
	);

	return (
		<ContestFormSection
			leftSectionTitle='Płatność za zgłoszenie pracy'
			leftSectionContent={leftSectionContent}>
			<Flex flexDir='column' gap='32px' w='100%'>
				<Flex justify='space-between'>
					<Flex fontWeight='500' flexDir='column'>
						<Text fontSize='16px' color='brand.textSecondary'>
							Do zapłaty:
						</Text>
						<Text fontSize='36px'>$100</Text>
					</Flex>
					<Flex fontWeight='500' flexDir='column' textAlign='end'>
						<Text fontSize='16px' color='brand.textSecondary'>
							Status płatności:
						</Text>
						<Text fontSize='16px'>Oczekuje na płatność</Text>
					</Flex>
				</Flex>
				<CTAButton variant='filled' w='100%'>
					Zapłać
				</CTAButton>
			</Flex>
		</ContestFormSection>
	);
};
