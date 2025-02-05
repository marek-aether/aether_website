import { Flex, Grid, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BlogItem } from './BlogItem';
import { WidthWrapper } from '../../../../common/wrappers/widthWrapper';
import { ArrowLineUpRightIcon } from '../../../../common/icons/ArrowLineUpRightIcon';

const Blog = () => {
	return (
		<Flex py='100px' bg='brand.bgSecondary'>
			<WidthWrapper>
				<Flex flexDir='column' align='center' gap='8px'>
					<Text fontSize='16px' color='brand.textSecondary'>
						BLOG
					</Text>
					<Text fontSize='62px' fontWeight='500'>
						Co nowego w Aether Art?
					</Text>
					<Link href='#blog'>
						<Flex align='center' gap='4px'>
							<Text
								fontSize='14px'
								color='brand.primary'
								textDecoration='underline'>
								Zobacz wszystkie aktualności
							</Text>
							<ArrowLineUpRightIcon color='brand.primary' underline={false} />
						</Flex>
					</Link>
				</Flex>
				<Grid templateColumns='1fr 1fr 1fr' gap='24px' mt='80px'>
					<BlogItem
						date='16 styczeń 2025'
						title='TACT nomme Manon Genest à titre de cheffe de la direction'
					/>
					<BlogItem
						date='16 styczeń 2025'
						title='TACT nomme Manon Genest à titre de cheffe de la direction'
					/>
					<BlogItem
						date='16 styczeń 2025'
						title='TACT nomme Manon Genest à titre de cheffe de la direction'
					/>
				</Grid>
			</WidthWrapper>
		</Flex>
	);
};

export default Blog;
