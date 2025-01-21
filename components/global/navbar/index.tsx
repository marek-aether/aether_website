'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { XIcon } from '../../common/icons/xIcon';
import { WidthWrapper } from '../../common/wrappers/widthWrapper';
import { INavlink, Navlink } from './Navlink';

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolling(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const bgColor = scrolling ? 'white' : 'transparent';
	const textColor = scrolling ? 'black' : 'white';
	const boxShadow = scrolling ? 'md' : 'none';

	const navlinks: INavlink[] = [
		{ textColor: textColor, href: '#', text: 'Art Competition 2025' },
		{ textColor: textColor, href: '#about', text: 'About' },
		{ textColor: textColor, href: '#blog', text: 'Blog' },
		{ textColor: textColor, href: '#faq', text: 'FAQ' },
	];

	return (
		<Box
			position='fixed'
			top='0'
			width='100%'
			zIndex='1000'
			bg={bgColor}
			boxShadow={boxShadow}
			color={textColor}
			transition='background-color 0.3s ease, box-shadow 0.3s ease'>
			<WidthWrapper>
				<Flex as='nav' align='center' justify='space-between' p='4'>
					<Text fontSize='xl' fontWeight='bold'>
						AetherArt
					</Text>
					<Flex gap='45px' align='center'>
						<Flex gap='32px' align='center'>
							{navlinks.map((navlink) => (
								<Navlink
									key={navlink.href}
									textColor={navlink.textColor}
									href={navlink.href}
									text={navlink.text}
								/>
							))}
						</Flex>
						<Box w='4px' h='4px' borderRadius='50%' bgColor='#8D9AAE' />
						<Flex gap='25px' align='center'>
							<Navlink textColor={textColor} href='#login' text='LOG IN' />
							<Box
								w='1px'
								h='26px'
								border='0.5px solid #8D9AAE'
								transform='rotate(30deg)'
							/>
							<Flex gap='12px' align='center' cursor='pointer'>
								<XIcon color={textColor} size='12px' />
								<Text fontWeight='500' fontSize='12px' color={textColor}>
									EN
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</WidthWrapper>
		</Box>
	);
};

export default Navbar;
