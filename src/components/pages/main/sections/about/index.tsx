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
							We discover new horizons in art
						</Text>
						<Text fontSize='16px'>
							Aether Art is an innovative organisation that connects the world
							of art with the latest technologies. We believe that art and
							technology can coexist in harmony, inspiring each other and
							opening up new possibilities for creators and audiences.
							<br />
							<br />
							Our mission is to support artists, promote contemporary art and
							open up new possibilities in the digital age. We organise an
							international competition for painters and printmakers with a
							prize pool of EUR 125 000, as well as exhibitions, education and
							research activities.
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
							<Text color='brand.textSecondary'>Prize pool</Text>
							<Text fontSize='62px' fontWeight='500' lineHeight='100%'>
								125,000 EUR
							</Text>
							<Text marginTop='16px'>
								We are organizing an inclusive international competition for
								painters and graphic artists from Europe with a prize pool of
								125,000 EUR.
							</Text>
						</Flex>
						<Flex align='center' gap='8px'>
							<CTAButton variant='filled'>Apply Now</CTAButton>
							<CTAButton variant='outlined'>Learn more</CTAButton>
						</Flex>
					</Flex>
				</GridItem>
			</Grid>
		</WidthWrapper>
	);
};

export default About;
