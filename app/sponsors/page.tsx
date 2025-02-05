'use client';

import { Flex, Text } from '@chakra-ui/react';
import Sponsors from '../../src/components/pages/sponsors';
import { WidthWrapper } from '../../src/components/common/wrappers/widthWrapper';
import { SponsorUs } from '../../src/components/pages/sponsors/sponsorUs';

export default function Page() {
	return (
		<Flex flexDir='column' gap='120px' align='start' pt='120px'>
			<WidthWrapper>
				<Flex flexDir='column' gap='120px'>
					<Flex flexDir='column'>
						<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
							SPONSORZY
						</Text>
						<Text fontSize='62px' fontWeight='500' lineHeight='100%'>
							Nasi sponsorzy Aether Art 2025
						</Text>
						<Text fontSize='24px' fontWeight='500' w='75%' mt='40px'>
							Realizacja misji Aether Art Foundation, jaką jest łączenie sztuki
							z technologią, jest możliwa dzięki hojnemu wsparciu naszych
							Sponsorów. Ich wkład umożliwia nam wspieranie artystów,
							organizację prestiżowego konkursu Aether Art oraz rozwój
							innowacyjnych projektów na styku sztuki i technologii. Jesteśmy
							niezmiernie wdzięczni za ich zaangażowanie w promowanie
							kreatywności i kształtowanie przyszłości sztuki.
						</Text>
					</Flex>
					<Sponsors />
				</Flex>
			</WidthWrapper>
			<SponsorUs />
		</Flex>
	);
}
