import { Flex, Image, Text } from '@chakra-ui/react';
import { AetherArtFooterLogo } from '../../common/icons/AetherArtFooterLogo';
import { WidthWrapper } from '../../common/wrappers/widthWrapper';
import { Newsletter } from './Newsletter';
import Sponsors from './Sponsors';

const brandLogos = [
	<Image
		key={1}
		src='/static/sponsor1.png'
		alt=''
		w='120px'
		role='presentation'
	/>,

	<Image
		key={2}
		src='/static/sponsor2.png'
		alt=''
		h='60px'
		role='presentation'
	/>,

	<Image
		key={3}
		src='/static/sponsor3.png'
		alt=''
		h='60px'
		role='presentation'
	/>,

	<Image
		key={4}
		src='/static/sponsor4.png'
		alt=''
		h='60px'
		role='presentation'
	/>,

	<Image
		key={5}
		src='/static/sponsor5.png'
		alt=''
		w='120px'
		role='presentation'
	/>,

	<Image
		key={6}
		src='/static/sponsor6.png'
		alt=''
		h='60px'
		role='presentation'
	/>,

	<Image
		key={7}
		src='/static/sponsor7.png'
		alt=''
		h='60px'
		role='presentation'
	/>,
];

const Footer = () => {
	return (
		<Flex
			bg='linear-gradient(180deg, #000000 64.16%, #7B0323 100%)'
			position='relative'
			flexDir='column'
			color='brand.textLight'>
			<Sponsors logos={brandLogos} />
			<WidthWrapper>
				<Newsletter />
				{/* <FooterLinks />
				<Flex
					flexDir='column'
					gap='12px'
					zIndex='10'
					mt='52px'
					pb='240px'
					borderBottom='1px solid rgba(255, 255, 255, 0.1)'>
					<Link href='' fontWeight='700' textDecoration='underline'>
						CONTACT@AETHERART.COM
					</Link>
					<Text fontSize='10px' fontWeight='600' color='#373737' w='30%'>
						* Ze względu na dużą ilość korespondencji, czas odpowiedzi na
						Państwa wiadomość może wynieść do 3 dni roboczych. Dokładamy
						wszelkich starań, aby odpowiadać tak szybko, jak to możliwe.
						Dziękujemy za cierpliwość.
					</Text>
				</Flex> */}
				<Flex
					align='center'
					justify='space-between'
					zIndex='10'
					pt='36px'
					pb='120px'
					fontSize='16px'>
					<Text>
						© {new Date().getFullYear()} Aether Art. All rights reserved.
					</Text>
					{/* <Flex align='center' gap='40px' opacity='0.5'>
						<Link href='#' _hover={{ textDecoration: 'underline' }}>
							Polityka prywatności
						</Link>
						<Link href='#' _hover={{ textDecoration: 'underline' }}>
							Regulamin
						</Link>
					</Flex> */}
				</Flex>
			</WidthWrapper>
			<AetherArtFooterLogo
				position='absolute'
				bottom='60px'
				left='50%'
				w='90vw'
				transform='translate(-50%)'
				zIndex='0'
			/>
		</Flex>
	);
};

export default Footer;
