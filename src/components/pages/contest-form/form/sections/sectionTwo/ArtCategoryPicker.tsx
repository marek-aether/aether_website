import { Flex } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { ArtCategoryFE, ContestApplicationFE } from '../../../types_fe';

export const ArtCategoryPicker = () => {
	const formik = useFormikContext<ContestApplicationFE>();

	const handlePick = (val: ArtCategoryFE) => {
		formik.setFieldValue('artwork.category', val);
	};

	return (
		<Flex gap='8px'>
			<Flex
				p='12px 32px'
				borderRadius='90px'
				onClick={() => handlePick('painting')}
				bg={
					formik.values.artwork.category === 'painting'
						? 'brand.bgDark'
						: 'brand.bgLight'
				}
				color={
					formik.values.artwork.category === 'painting'
						? 'brand.textLight'
						: 'brand.textDark'
				}
				border={
					formik.values.artwork.category === 'painting'
						? ''
						: '1px solid #E5E5E5'
				}
				cursor='pointer'>
				Malarstwo
			</Flex>
			<Flex
				p='12px 32px'
				borderRadius='90px'
				onClick={() => handlePick('graphics')}
				bg={
					formik.values.artwork.category === 'graphics'
						? 'brand.bgDark'
						: 'brand.bgLight'
				}
				color={
					formik.values.artwork.category === 'graphics'
						? 'brand.textLight'
						: 'brand.textDark'
				}
				border={
					formik.values.artwork.category === 'graphics'
						? ''
						: '1px solid #E5E5E5'
				}
				cursor='pointer'>
				Grafika
			</Flex>
			<Flex
				p='12px 32px'
				borderRadius='90px'
				onClick={() => handlePick('mixed')}
				bg={
					formik.values.artwork.category === 'mixed'
						? 'brand.bgDark'
						: 'brand.bgLight'
				}
				color={
					formik.values.artwork.category === 'mixed'
						? 'brand.textLight'
						: 'brand.textDark'
				}
				border={
					formik.values.artwork.category === 'mixed' ? '' : '1px solid #E5E5E5'
				}
				cursor='pointer'>
				Technika mieszana/własna
			</Flex>
		</Flex>
	);
};
