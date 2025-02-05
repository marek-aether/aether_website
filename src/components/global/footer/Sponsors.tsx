'use client';

import { Box, Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import Marquee from 'react-fast-marquee';

interface IProps {
	logos: ReactNode[];
}

const Sponsors: FC<IProps> = ({ logos }) => {
	return (
		<Box w='100%' opacity='0.6' py='80px'>
			<Marquee autoFill speed={30}>
				<Flex gap='32px' align='center'>
					{logos.map((logo) => logo)}
				</Flex>
			</Marquee>
		</Box>
	);
};

export default Sponsors;
