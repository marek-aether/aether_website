import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

interface IProps {
	heading: string;
	children: ReactNode[];
}

const SponsorSection: FC<IProps> = ({ heading, children }) => {
	return (
		<Flex flexDir='column' gap='28px'>
			<Text fontSize='32px' fontWeight='500'>
				{heading}
			</Text>
			<Grid templateColumns='1fr 1fr' gap='20px'>
				{children.map((child, index) => (
					<GridItem key={index}>{child}</GridItem>
				))}
			</Grid>
		</Flex>
	);
};

export default SponsorSection;
