import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IProps {
	children: React.ReactNode;
}

export const WidthWrapper: FC<IProps> = ({ children }) => {
	return (
		<Flex
			maxW='1300px'
			mx='auto'
			flexDir='column'
			overflow='hidden'
			h='100%'
			w='100%'>
			{children}
		</Flex>
	);
};
