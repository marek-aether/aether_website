import React from 'react';
import {
	FileUploadDropzone,
	FileUploadList,
	FileUploadRoot,
} from '../../../../ui/file-upload';
import { ContestFormSection } from './ContestFormSection';
import { ContestApplicationFE } from '../../types_fe';
import { useFormikContext } from 'formik';
import { Flex, Text } from '@chakra-ui/react';

export const FileUpload = () => {
	const formik = useFormikContext<ContestApplicationFE>();

	const leftSectionContent = (
		<Flex
			display='inline'
			color='brand.textSecondary'
			fontSize='16px'
			fontWeight='500'>
			Maksymalny rozmiar pliku:&nbsp;<Text color='brand.textDark'>20 mb</Text>
			Dopuszczalne formaty:&nbsp;
			<Text color='brand.textDark'>JPG, PNG, TIF, PDF, EPS</Text>
		</Flex>
	);

	return (
		<ContestFormSection
			leftSectionTitle='Załącz pliku z pracą konkursową'
			leftSectionContent={leftSectionContent}>
			<FileUploadRoot
				w='100%'
				alignItems='stretch'
				accept={['image/png']}
				maxFiles={3}
				color='brand.textDark'
				name='artwork.image'
				id='artwork.image'
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}>
				<FileUploadDropzone
					bgColor='#7B03230D'
					label='Drag and drop here to upload'
					borderColor='brand.primary'
					description='.png, .jpg up to 5MB'
				/>
				<FileUploadList bg='#7B03230D' />
			</FileUploadRoot>
		</ContestFormSection>
	);
};
