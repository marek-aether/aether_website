'use client';

import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { CTAButton } from '../../../../common/buttons/CTAButton';
import { WidthWrapper } from '../../../../common/wrappers/widthWrapper';
import { useRouter } from 'next/navigation';

const Contest = () => {
	const router = useRouter();

	return (
		<Flex overflow='hidden' position='relative'>
			<Flex
				width='98%'
				pr='10%'
				align='flex-end'
				h='640px'
				bg='brand.bgDark'
				position='absolute'
				overflow='visible'
				_after={{
					content: '""',
					position: 'absolute',
					bottom: 0,
					right: 0,
					width: '150px',
					height: '150px',
					background: 'brand.bgLight',
					clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
				}}>
				<Image
					src='/static/bg2.png'
					position='absolute'
					top='220px'
					w='62%'
					objectFit='cover'
					aspectRatio='16/11'
					filter='brightness(50%)'
				/>
			</Flex>

			<WidthWrapper>
				<Grid
					templateColumns='6fr 4fr'
					gap='100px'
					zIndex='10'
					textAlign='start'
					h='100%'
					py='100px'>
					<GridItem justifySelf='start' h='100%'>
						<Flex flexDir='column' justify='space-between' gap='160px' h='100%'>
							<Flex flexDir='column'>
								<Text
									fontSize='16px'
									fontWeight='500'
									color='brand.textSecondary'>
									$300,000 dla Najlepszych Artystów
								</Text>
								<Text
									fontSize='62px'
									fontWeight='500'
									color='brand.textLight'
									lineHeight='100%'>
									Weź udział w Konkursie Aether Art
								</Text>
							</Flex>
							<Flex flexDir='column'>
								<Text fontSize='16px' fontWeight='500' color='brand.textLight'>
									TERMIN ZGŁOSZENIA PRAC
								</Text>
								<Text fontSize='62px' fontWeight='500' color='brand.textLight'>
									24 Jun.
									<br />
									2025
								</Text>
							</Flex>
						</Flex>
					</GridItem>
					<GridItem justifySelf='center' alignSelf='center' maxW='75%'>
						<Flex flexDir='column' gap='32px' align='start'>
							<Text
								fontSize='24px'
								fontWeight='500'
								lineHeight='100%'
								color='brand.textLight'>
								Zapraszamy utalentowanych malarzy i grafików do udziału w Aether
								Art Competition 2025.
							</Text>
							<Text fontSize='16px' color='#C3C3C3'>
								Zgłoś swoje dzieło i zawalcz o jedną z nagród w rekordowym prize
								poolu o wartości 300,000 USD! Odkryj nową przestrzeń dla swojej
								sztuki i dołącz do międzynarodowej społeczności Aether Art.
							</Text>
							<CTAButton
								variant='filled'
								onClick={() => router.push('/contest-form')}>
								Zgłoś swój udział
							</CTAButton>
						</Flex>
					</GridItem>
				</Grid>
			</WidthWrapper>
		</Flex>
	);
};

export default Contest;
