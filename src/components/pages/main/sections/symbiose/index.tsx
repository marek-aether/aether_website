import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { CTAButton } from '../../../../common/buttons/CTAButton';
import { WidthWrapper } from '../../../../common/wrappers/widthWrapper';

const Symbiose = () => {
	return (
		<WidthWrapper>
			<Flex w='100%' flexDir='column' pt='100px' pb='48px' textAlign='start'>
				<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
					Art and Technology:
				</Text>
				<Text fontSize='62px' fontWeight='500' lineHeight='100%'>
					Harmonious Symbiosis
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
							At Aether Art, we open up new possibilities for Artists with the
							help of the latest technologies. Believing that the synergy of
							human creativity and the latest technologies will bring
							revolutionary changes to the art world.
						</Text>
						<Text fontSize='24px' fontWeight='500'>
							We are developing technological projects:
						</Text>
						<Text fontSize='16px'>
							Blockchain giving digital certificates to real works of art -
							guaranteeing their originality, act of ownership and access to
							modern e-commerce solutions.
						</Text>
					</Flex>
				</GridItem>
				<GridItem>
					<Flex flexDir='column' gap='32px' align='start'>
						<Image
							w='100%'
							aspectRatio='21/9'
							objectFit='cover'
							src='/static/bg2.png'
						/>
						<Flex flexDir='column' gap='24px'>
							<Text fontSize='24px' fontWeight='500'>
								AI used to confirm the authenticity of a work of art, valuing
								the artwork and mediating its bidding on the global market.
							</Text>
							<Grid templateColumns='1fr 1fr' justifyItems='start' gap='20px'>
								<Text fontSize='16px'>
									Technologies still serving governments and corporations today
									are becoming a tool in the artist and citizen community.
									Developing in this direction will ensure the development and
									popularisation of artists in a changing world.
								</Text>
								<Text fontSize='16px'>
									A post-work-society future where every profession is being
									systematically replaced by robots and AI will leave space for
									creative careers - let's create it together today.
								</Text>
							</Grid>
						</Flex>
						<CTAButton variant='outlined'>Learn more</CTAButton>
					</Flex>
				</GridItem>
			</Grid>
		</WidthWrapper>
	);
};

export default Symbiose;
