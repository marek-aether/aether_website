import { Box, Flex, Text } from '@chakra-ui/react';
import { CTAButton } from '../../../../common/buttons/CTAButton';
import { ArrowLineUpRightIcon } from '../../../../common/icons/ArrowLineUpRightIcon';
import { WidthWrapper } from '../../../../common/wrappers/widthWrapper';
import { Countdown } from './Countdown';

const Header = () => {
	return (
		<Box position='relative' height='100vh' width='100%' overflow='hidden'>
			{/* Background Video */}
			<Box
				position='absolute'
				top='0'
				left='0'
				width='100%'
				height='100%'
				zIndex='0'>
				<video
					autoPlay
					loop
					muted
					playsInline
					src='https://s3-figma-videos-production-sig.figma.com/video/TEAM/896522863236370506/3afba27e333b1cc06ce8fcf3c3805e171b073637?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LRbsXd5q~EZKynaYICwnYDpHFs36GljeyQSmNrRqSS9eQ3rDOZFhmXTBZejDwPNeuAumJSLIRsT6wwDpwii2k8McQV~uXmn5AEPEcjLXmo38yt7cHJz0-nkf13RB5Tu5gI9aolG6x4MsslQR4DWaH3cA~me9hOA68kWF32K4T0voV3wMLjQ5EpjAk466lZCiUStfMkEUVu1Q5gUReW3Kgo5ltvcp7Ufupk-PjLb31JpIszsgBK~siNxJVr44brrYE2GFzs57Nz1ExXyMXMnoTpbMlvS3RaIRZnoHGWyVQWuZ5fb~anxlcDSBE5CDm10RnzCa7u2pDxKcC7~cX2hWFw__'
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			</Box>

			{/* Overlay to Darken the Video */}
			<Box
				position='absolute'
				top='0'
				left='0'
				width='100%'
				height='100%'
				bg='rgba(0, 0, 0, 0.7)'
				zIndex='0'
			/>

			{/* Header Content */}
			<WidthWrapper>
				<Flex
					direction='column'
					py='48px'
					align='center'
					justify='flex-end'
					height='100%'
					color='brand.textLight'
					zIndex='1'
					position='relative'>
					<Flex
						position='absolute'
						top='50%'
						transform='translateY(-50%)'
						left='10%'
						flexDir='column'
						textAlign='start'
						align='start'
						w='50%'
						gap='16px'>
						<Text fontSize='24px'>
							Sztuka w synergii z człowiekiem i technologią.
						</Text>
						<Text fontWeight='500' fontSize='94px' lineHeight='94px' mb='8px'>
							Aether Art Foundation
						</Text>
						<CTAButton
							variant='filled'
							bgColor='brand.bgLight'
							color='brand.textDark'>
							Weź udział w konkursie
						</CTAButton>
					</Flex>
					<Flex
						position='absolute'
						bottom='48px'
						left='0'
						align='center'
						justify='space-between'
						w='100%'>
						<Flex gap='8px' flexDir='column' align='start'>
							<Text
								fontWeight='300'
								fontSize='14px'
								letterSpacing='2px'
								color='brand.textSecondary'>
								01 APR - 31 JUN 2025
							</Text>
							<Text fontSize='30px'>Art Competition 2025</Text>
						</Flex>
						<Flex gap='8px' flexDir='column' align='start'>
							<Flex w='100%' justify='space-between' align='center'>
								<Text
									fontWeight='300'
									fontSize='14px'
									letterSpacing='2px'
									color='brand.textSecondary'>
									Termin przyjęcia prac
								</Text>
								<Flex cursor='pointer' align='center'>
									<Text fontSize='14px' textDecoration='underline'>
										Zapisz się
									</Text>
									<ArrowLineUpRightIcon />
								</Flex>
							</Flex>
							<Countdown />
						</Flex>
					</Flex>
				</Flex>
			</WidthWrapper>
		</Box>
	);
};

export default Header;
