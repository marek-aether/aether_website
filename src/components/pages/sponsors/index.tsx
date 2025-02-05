import { Flex, Text } from '@chakra-ui/react';
import SponsorSection from './sponsorSection';
import { SponsorTile } from './sponsorSection/SponsorTile';

const sponsors = {
	golden: [
		<SponsorTile
			key={'golden-1'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'golden-2'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'golden-3'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
	],
	silver: [
		<SponsorTile
			key={'silver-1'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'silver-2'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
	],
	bronze: [
		<SponsorTile
			key={'bronze-1'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'bronze-2'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'bronze-3'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'bronze-4'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'bronze-5'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
			name='Pełna nazwa organizacji sponsorującej.'
			description='Krótki, 1-2 zdaniowy opis sponsora i jego wsparcia (jeśli jest to pożądane). Może podkreślać wzajemne korzyści płynące ze sponsoringu.'
		/>,
		<SponsorTile
			key={'bronze-6'}
			imageUrl='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
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
