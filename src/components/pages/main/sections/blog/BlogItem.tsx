import { Flex, GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { CTAButton } from '../../../../common/buttons/CTAButton';

interface IProps {
	title: string;
	date: string;
}

export const BlogItem: FC<IProps> = ({ title, date }) => {
	return (
		<GridItem p='60px 32px 40px 32px' bg='brand.bgLight'>
			<Flex flexDir='column' gap='60px'>
				<Text fontSize='16px'>Artykuł - {date}</Text>
				<Text fontSize='22px' fontWeight='500'>
					{title}
				</Text>
				<CTAButton variant='outlined'>Idź do wpisu</CTAButton>
			</Flex>
		</GridItem>
	);
};
