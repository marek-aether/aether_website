import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

interface IProps {
	leftSectionTitle: string;
	leftSectionContent: ReactNode;
	children: ReactNode;
}

export const ContestFormSection: FC<IProps> = ({
	leftSectionContent,
	leftSectionTitle,
	children,
}) => {
	return (
		<Grid templateColumns='2fr 5fr' gap='160px'>
			<GridItem>
				<Flex flexDir='column' gap='16px'>
					<Text fontSize='20px' fontWeight='500'>
						{leftSectionTitle}
					</Text>
					{leftSectionContent}
				</Flex>
			</GridItem>
			<GridItem>{children}</GridItem>
		</Grid>
	);
};
