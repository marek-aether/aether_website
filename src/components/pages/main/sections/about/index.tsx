import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { CTAButton } from '../../../../common/buttons/CTAButton';
import { AetherArtPlusIcon } from '../../../../common/icons/AetherArtPlusIcon';
import { WidthWrapper } from '../../../../common/wrappers/widthWrapper';

const About = () => {
	return (
		<WidthWrapper>
			<Grid templateColumns='1fr 1fr' py='100px' gap='100px'>
				<GridItem justifySelf='start'>
					<Flex flexDir='column' gap='40px' textAlign='start'>
						<AetherArtPlusIcon height='125px' width='100px' />
						<Text fontSize='62px' fontWeight='500' lineHeight='100%' mt='-40px'>
							Odkrywamy nowe horyzonty w sztuce
						</Text>
						<Text fontSize='16px'>
							Aether Art Foundation to innowacyjna organizacja, która łączy
							świat sztuki z najnowszymi technologiami. Wierzymy, że sztuka i
							technologia mogą współistnieć w harmonii, wzajemnie się inspirując
							i otwierając nowe możliwości dla twórców i odbiorców.
							<br />
							<br />
							Naszą misją jest wspieranie artystów, promowanie sztuki
							współczesne, otwieranie nowych możliwości w erze cyfrowej.
						</Text>
					</Flex>
				</GridItem>
				<GridItem justifySelf='center' alignSelf='center' maxW='75%'>
					<Flex flexDir='column' gap='32px'>
						<Flex
							flexDir='column'
							textAlign='start'
							fontSize='16px'
							fontWeight='500'>
							<Text color='brand.textSecondary'>NAGRODA GŁÓWNA</Text>
							<Text fontSize='62px' fontWeight='500' lineHeight='100%'>
								300,000 USD
							</Text>
							<Text marginTop='16px'>
								Organizujemy prestiżowy, międzynarodowy konkurs dla malarzy i
								grafików z pulą nagród 300,000 USD, a także prowadzimy
								działalność wystawie
							</Text>
						</Flex>
						<Flex align='center' gap='8px'>
							<CTAButton variant='filled'>Przycisk CTA</CTAButton>
							<CTAButton variant='outlined'>Dowiedz się więcej</CTAButton>
						</Flex>
					</Flex>
				</GridItem>
			</Grid>
		</WidthWrapper>
	);
};

export default About;
