import { Flex, Text } from '@chakra-ui/react';
import SponsorSection from './sponsorSection';
import { SponsorTile } from './sponsorSection/SponsorTile';

const sponsors = {
	golden: [
		<SponsorTile
			key={'golden-1'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'golden-2'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'golden-3'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
	],
	silver: [
		<SponsorTile
			key={'silver-1'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'silver-2'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
	],
	bronze: [
		<SponsorTile
			key={'bronze-1'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'bronze-2'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'bronze-3'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'bronze-4'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'bronze-5'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'bronze-6'}
			imageUrl='/static/bg2.png'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
	],
};

const Sponsors = () => {
	return (
		<Flex flexDir='column' gap='60px'>
			<Flex flexDir='column'>
				<Text fontSize='42px' fontWeight='500'>
					Nasi hojni sponsorzy
				</Text>
				<Text fontSize='18px' fontWeight='500' w='75%'>
					Serdecznie dziękujemy następującym Sponsorom, którzy hojnie wsparli
					Aether Art Foundation. Ich wkład ma kluczowe znaczenie dla naszej
					działalności i napędza innowacje w świecie sztuki.
				</Text>
			</Flex>
			<SponsorSection heading='Złoci Sponsorzy' children={sponsors.golden} />
			<SponsorSection heading='Srebrni Sponsorzy' children={sponsors.silver} />
			<SponsorSection heading='Brazowi Sponsorzy' children={sponsors.bronze} />
		</Flex>
	);
};

export default Sponsors;
