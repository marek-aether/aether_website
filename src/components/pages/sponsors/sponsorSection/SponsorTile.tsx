import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IProps {
	imageUrl: string;
	name: string;
	description: string;
}

export const SponsorTile: FC<IProps> = ({ imageUrl, name, description }) => {
	return (
		<Flex p='20px' border='1px solid #DDDDDD' borderRadius='12px' gap='28px'>
			<Box
				bgImage={`url(${imageUrl})`}
				w='180px'
				h='120px'
				bgPos='center'
				bgSize='cover'
				borderRadius='12px'
			/>
			<Flex flexDir='column' gap='12px'>
				<Text fontSize='16px' fontWeight='500'>
					{name}
				</Text>
				<Text fontSize='14px'>{description}</Text>
			</Flex>
		</Flex>
	);
};
