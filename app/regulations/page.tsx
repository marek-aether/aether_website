'use client';

import { Flex, Text } from '@chakra-ui/react';
import { WidthWrapper } from '../../src/components/common/wrappers/widthWrapper';
import Regulations from '../../src/components/pages/regulations';

export default function Page() {
	return (
		<WidthWrapper>
			<Flex flexDir='column' gap='120px' align='start' py='120px'>
				<Flex flexDir='column' gap='120px'>
					<Flex flexDir='column'>
						<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
							REGULAMIN
						</Text>
						<Text fontSize='62px' fontWeight='500' lineHeight='100%'>
							Regulamin konkursu AETHER ART Competition 2025
						</Text>
					</Flex>
				</Flex>
				<Regulations />
			</Flex>
		</WidthWrapper>
	);
}
