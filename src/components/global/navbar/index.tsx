'use client';

import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUser } from '../../../store/userStore';
import { WidthWrapper } from '../../common/wrappers/widthWrapper';
import { INavlink, Navlink } from './Navlink';

const Navbar = () => {
	const path = usePathname();

	const [scrolling, setScrolling] = useState(false);

	const { user } = useUser();

	useEffect(() => {
		const handleScroll = () => {
			setScrolling(window.scrollY > 30);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const bgColor = scrolling ? 'brand.bgLight' : 'transparent';
	const textColor =
		path !== '/login' && path !== '/' ? 'black' : scrolling ? 'black' : 'white';
	const boxShadow = scrolling ? '0px 12px 12px 0px #0000000D;' : 'none';
	const padding = scrolling ? '18px 36px' : '18px 0';

	const navlinks: INavlink[] = [
		{ textColor: textColor, href: '#', text: 'Art Competition 2025' },
		{ textColor: textColor, href: '#about', text: 'About' },
		// { textColor: textColor, href: '#blog', text: 'Blog' },
		// { textColor: textColor, href: '#faq', text: 'FAQ' },
	];

	return (
		<WidthWrapper>
			<Box
				position='fixed'
				top='20px'
				maxW='1300px'
				w='100%'
				mx='auto'
				zIndex='1000'
				bg={bgColor}
				boxShadow={boxShadow}
				color={textColor}
				transition='all 0.3s ease, box-shadow 0.3s ease'
				borderRadius='40px'>
				<Flex
					as='nav'
					align='center'
					justify='space-between'
					p={padding}
					transition='all 0.3s ease, box-shadow 0.3s ease'>
					<Link href='/'>
						{/* <AetherArtLogo width='140px' color={textColor} /> */}
						<Image
							src='/static/logo.png'
							width={200}
							height={60}
							alt='AetherArt'
						/>
					</Link>
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
						{/* <Box
							w='4px'
							h='4px'
							borderRadius='50%'
							bgColor='brand.textSecondary'
						/> */}
						{/* <Flex gap='25px' align='center'>
							<Login color={textColor} />
							{user && (
								<Text
									fontSize='12px'
									color={textColor}
									cursor='pointer'
									onClick={() => {}}>
									{user.email}
								</Text>
							)}
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
						</Flex> */}
					</Flex>
				</Flex>
			</Box>
		</WidthWrapper>
	);
};

export default Navbar;
