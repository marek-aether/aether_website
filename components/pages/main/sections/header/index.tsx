import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { WidthWrapper } from '../../../../common/wrappers/widthWrapper';
import { Countdown } from './Countdown';
import { ArrowLineUpRight } from '../../../../common/icons/ArrowLineUpRight';

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
				objectFit='cover'
				zIndex='0'>
				<video
					autoPlay
					loop
					muted
					playsInline
					src='https://s3-figma-videos-production-sig.figma.com/video/TEAM/896522863236370506/3afba27e333b1cc06ce8fcf3c3805e171b073637?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n5sHKggv9auIshpiK9maB4XIewcCJEZZze5Y24dybC9P8yzihQxcX-zC4~Wc5ZSw9PEmSKXLIDNWBfseTFs9QTvuv-YiEPiNBNrLNtI7p0WSrh6hOPjscn~g0gtlGEcHDjIjAQHR~cAF899D7xEM5UFqjqT0E6rX14J~nPUm4iJ0FqlVfY0YCgKAIVzLZEFJnv3JtXv5Ex9o6D2Ay4pxG~XoWrxxkNvJqDLXubkxm7tlPdccORjZnkc2mG8-r3nznBWziPmgsHFZlbFvglT6FYRKEIKNv13jo303E73TM-hIb0LT7iGtKRtS-nAdAIOtyDeIWXggxtExuAT-LtHI5Q__'
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
					color='white'
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
						<Text fontWeight='500' fontSize='94px' lineHeight='94px'>
							Aether Art Foundation
						</Text>
						<Button fontSize='14px' p='24px 32px' borderRadius='100px' mt='8px'>
							Weź udział w konkursie
						</Button>
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
								color='#8D9AAE'>
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
									color='#8D9AAE'>
									Termin przyjęcia prac
								</Text>
								<Flex cursor='pointer' align='center'>
									<Text fontSize='14px' textDecoration='underline'>
										Zapisz się
									</Text>
									<ArrowLineUpRight />
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
