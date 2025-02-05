import { Flex, Link, Text } from '@chakra-ui/react';
import { AetherArtLogo } from '../../common/icons/AetherArtLogo';
import { ArrowLineUpRightIcon } from '../../common/icons/ArrowLineUpRightIcon';

export const FooterLinks = () => {
	return (
		<Flex justify='space-between' pt='60px' zIndex='10'>
			<Flex flexDir='column' justify='space-between'>
				<AetherArtLogo />
				<Text fontSize='16px' fontWeight='500'>
					39/2 WARSZAWSKA
					<br />
					01-224 Warszawa
				</Text>
			</Flex>
			<Flex flexDir='column' gap='24px'>
				<Link href='#' _hover={{ textDecoration: 'underline' }}>
					Strona główna
				</Link>
				<Link href='#' _hover={{ textDecoration: 'underline' }}>
					Blog
				</Link>
				<Link href='#' _hover={{ textDecoration: 'underline' }}>
					Sztuka w Erze Cyfrowej
				</Link>
				<Link href='#' _hover={{ textDecoration: 'underline' }}>
					Aether Art Foundation
				</Link>
			</Flex>
			<Flex flexDir='column' gap='24px'>
				<Link href='#' _hover={{ textDecoration: 'underline' }}>
					Projekty
				</Link>
				<Link href='#' _hover={{ textDecoration: 'underline' }}>
					Art Competition 2025
				</Link>
				<Link href='#' _hover={{ textDecoration: 'underline' }}>
					Partnerzy i sponsorzy
				</Link>
			</Flex>
			<Flex flexDir='column' gap='24px'>
				<Link
					href='#'
					_hover={{ textDecoration: 'underline' }}
					display='flex'
					justifyContent='space-between'
					gap='40px'>
					Instagram
					<ArrowLineUpRightIcon color='brand.primary' />
				</Link>
				<Link
					href='#'
					_hover={{ textDecoration: 'underline' }}
					display='flex'
					justifyContent='space-between'>
					Linkedin
					<ArrowLineUpRightIcon color='brand.primary' />
				</Link>
				<Link
					href='#'
					_hover={{ textDecoration: 'underline' }}
					display='flex'
					justifyContent='space-between'>
					Twitter
					<ArrowLineUpRightIcon color='brand.primary' />
				</Link>
			</Flex>
		</Flex>
	);
};
