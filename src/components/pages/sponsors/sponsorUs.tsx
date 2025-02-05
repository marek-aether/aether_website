import { Box, Flex, List, Text } from '@chakra-ui/react';
import React from 'react';
import { WidthWrapper } from '../../common/wrappers/widthWrapper';
import { CTAButton } from '../../common/buttons/CTAButton';

export const SponsorUs = () => {
	return (
		<Flex bg='brand.bgSecondary' w='100%' pt='100px'>
			<WidthWrapper>
				<Flex justify='space-between' gap='120px'>
					<Flex flexDir='column' gap='48px' w='50%'>
						<Flex flexDir='column'>
							<Text
								fontSize='16px'
								fontWeight='500'
								color='brand.textSecondary'>
								WSPIERAJ AETHER ART
							</Text>
							<Text fontSize='62px' fontWeight='500'>
								Zostań Sponsorem
							</Text>
						</Flex>
						<Text fontSize='24px' fontWeight='500'>
							Dołącz do Aether Art Foundation i stań się siłą napędową
							przyszłości sztuki. Oferujemy szeroki wachlarz pakietów
							sponsorskich, dostosowanych do indywidualnych celówi budżetu
							Twojej organizacji.
						</Text>
						<Flex flexDir='column' gap='24px'>
							<Text fontSize='24px' fontWeight='500'>
								Wspierajac nas, zyskujesz:
							</Text>
							<Flex justify='space-between' gap='24px'>
								<List.Root>
									<List.Item>
										Wzmocnienie wizerunku Twojej marki jako innowatora i
										mecenasa sztuki.
									</List.Item>
									<List.Item>
										Widoczność wśród globalnej publiczności złożonej z artystów,
										kolekcjonerów, miłośników sztuki i innowatorów
										technologicznych.
									</List.Item>
									<List.Item>
										Kluczową rolę w przełomowych projektach na styku sztuki i
										technologii.
									</List.Item>
								</List.Root>
								<Flex flexDir='column' gap='40px'>
									<List.Root>
										<List.Item>
											Wsparcie utalentowanych artystów i promocję ich twórczości
											na arenie międzynarodowej.
										</List.Item>
										<List.Item>
											Możliwość bycia częścią wyjątkowej społeczności, która
											kształtuje przyszłość sztuki.
										</List.Item>
									</List.Root>
									<CTAButton variant='filled'>Skontaktuj się z nami</CTAButton>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Box
						h='760px'
						w='560px'
						bgImage={`url(${'https://s3-alpha-sig.figma.com/img/3fdd/a185/142da9beb07ba43a9799a530061348b7?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aQ1Zz7Gm3C4KIVrSpGlhHZ4jOnpN~2tlbpsQxiI5mFABHRleZS4bc37oeWqxHVu7wBzVr-RGtapftTLPHBM-Wqy0VKtG3f3mYOi7CdBvnQj1LgYCoZ2UGsaJxHN2AsnuIkzcy9gRTyZJ1fi0F2iMPMClSZejKCOhz9PAsr9eJpk4MN4lXgVraQF7aYxX8vOUMGVcPLIxPfFH3CwLGdQwkfUSvvt4gre5FCzm1GPL-w6G~WVNYmWnRYH0V0ec602LnjsDmLwuRft9vCs8B9Ktl4vQA8cflmisSnDHVcUhu3eQlv~I1OpwGmlIbAPVh3BP7XP0qPrkMbppJ1AmcZtIIw__'})`}
						bgPos='center'
						bgSize='cover'
					/>
				</Flex>
			</WidthWrapper>
		</Flex>
	);
};
