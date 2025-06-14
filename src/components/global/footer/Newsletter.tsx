import { Flex, Input, Text } from '@chakra-ui/react';
import { CTAButton } from '../../common/buttons/CTAButton';

export const Newsletter = () => {
	return (
		<Flex
			justify='space-between'
			w='100%'
			zIndex='2'
			pb='140px'
			borderBottom='1px solid rgba(255, 255, 255, 0.1)'>
			<Flex flexDir='column'>
				<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
					NEWSLETTER
				</Text>
				<Text
					fontSize='62px'
					fontWeight='500'
					color='brand.textLight'
					lineHeight='100%'>
					Get the latest news from the art world!
				</Text>
			</Flex>
			<Flex flexDir='column' gap='24px'>
				<Text fontSize='16px' color='brand.textLight'>
					Subscribe to our newsletter to keep up to date with the competition,
					exhibitions and other events organised by Aether Art.
				</Text>
				<Flex gap='8px' align='center'>
					<Input
						placeholder='Enter your email address'
						borderRadius='100px'
						color='brand.textLight'
						h='100%'
					/>
					<CTAButton variant='outlined' color='brand.textLight'>
						Sign up
					</CTAButton>
				</Flex>
			</Flex>
		</Flex>
	);
};
