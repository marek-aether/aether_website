import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { CTAButton } from '../../../../common/buttons/CTAButton';
import { WidthWrapper } from '../../../../common/wrappers/widthWrapper';

const Symbiose = () => {
	return (
		<WidthWrapper>
			<Flex w='100%' flexDir='column' pt='100px' pb='48px' textAlign='start'>
				<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
					SZTUKA I TECHNOLOGIA:
				</Text>
				<Text fontSize='62px' fontWeight='500' lineHeight='100%'>
					Harmonijna symbioza
				</Text>
			</Flex>
			<Grid
				templateColumns='1fr 1fr'
				gap='100px'
				justifyItems='start'
				textAlign='start'
				pb='100px'>
				<GridItem>
					<Flex flexDir='column' gap='16px'>
						<Text fontSize='24px' fontWeight='500'>
							W Aether Art Foundation otwieramy Artystom nowe możliwości przy
							pomocy najnowszych technologii. Wierząc, że synergia ludzkiej
							kreatywności i najnowszych technologii przyniesie rewolucyjne
							zmiany w świecie sztuki.
						</Text>
						<Text fontSize='24px' fontWeight='500'>
							Rozwijamy projekty technologiczne
						</Text>
						<Text fontSize='16px'>
							Blockchain nadający cyfrowe certyfikaty prawdziwym dziełom sztuki
							- gwarantując ich oryginalność, akt własności i dostęp do
							rozwiązań nowoczesnego handlu internetowego.
						</Text>
					</Flex>
				</GridItem>
				<GridItem>
					<Flex flexDir='column' gap='32px' align='start'>
						<Image
							w='100%'
							aspectRatio='21/9'
							objectFit='cover'
							src='https://s3-alpha-sig.figma.com/img/49ed/9411/25b8ba02ec0d942a4d5649fc13c7d896?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I41sxCQgRrbiQd004cEJyw9QRmBh0XBi8r~jIeLY99tx~QDj2G5DGx9AlM2epQI3h1SJ0YVw9zfX8zVm97UMvXuNzn8YbWv1Wvo0do6twIP9A5J4wMbewRa8jBy-J78ePotrfAMipYwb~Ks4aVyjsm12mjrbIt~keMetZpwAxmByhPNBQyevWFYMCiS3wjMV7MKwagcPmvq4VoFuSlxh1S5mWs7s3axqbfvLtYI0gk2OF3d4-w0jGS0H~qs6nIdum-tOMtyvF17j6Y0ylpfRUCe2zhY8GK1TJt5ZazNF-YemMCwFqp234nQ6JU~egQ6pnCLazA9BlYJQ1vfRwGK0~g__'
						/>
						<Flex flexDir='column' gap='24px'>
							<Text fontSize='24px' fontWeight='500'>
								AI - służący do potwierdzania autentyczności dzieła, wyceniający
								dzieło sztuki oraz pośredniczący w jego ofertowaniu na
								ogólnoświatowym rynku.
							</Text>
							<Grid templateColumns='1fr 1fr' justifyItems='start' gap='20px'>
								<Text fontSize='16px'>
									Technologie służące do dziś rządom i korporacjom stają się
									narzędziem w społeczności artystów i obywateli. Rozwój w tym
									kierunku pozwoli zadbać o rozwój i popularyzację artystów w
									zmieniającym się świecie.
								</Text>
								<Text fontSize='16px'>
									Przyszłość post-work-society gdzie każdy zawód zostaje
									systemowo zastępowany przez roboty i AI, zostawi przestrzeń
									dla karier kreatywnych - już dzisiaj stwórzmy ją razem.
								</Text>
							</Grid>
						</Flex>
						<CTAButton variant='outlined'>Dowiedz się więcej</CTAButton>
					</Flex>
				</GridItem>
			</Grid>
		</WidthWrapper>
	);
};

export default Symbiose;
