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
									EUR 125,000 for Top Artists
								</Text>
								<Text
									fontSize='62px'
									fontWeight='500'
									color='brand.textLight'
									lineHeight='100%'>
									Enter the 2025 Aether Art Prize Competition
								</Text>
							</Flex>
							<Flex flexDir='column'>
								<Text fontSize='16px' fontWeight='500' color='brand.textLight'>
									DEADLINE FOR SUBMISSIONS
								</Text>
								<Text fontSize='62px' fontWeight='500' color='brand.textLight'>
									{/* 24 Jun.
									<br />
									2025 */}
									More Details
									<br />
									Coming Soon
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
								We invite talented painters and graphic artists to participate
								in the Aether Art Competition 2025.
							</Text>
							<Text fontSize='16px' color='#C3C3C3'>
								Submit your work and compete for one of the prizes in the record
								prize pool worth EUR 125,000! Discover a new space for your art
								and join the international Aether Art community.
							</Text>
							<CTAButton
								variant='filled'
								onClick={() => router.push('/contest-form')}>
								Enter the Competition
							</CTAButton>
						</Flex>
					</GridItem>
				</Grid>
			</WidthWrapper>
		</Flex>
	);
};

export default Contest;
