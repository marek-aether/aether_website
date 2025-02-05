import { Flex, Text } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { FormInput } from '../../../register/form/FormInput';
import { ContestFormSection } from './ContestFormSection';
import { ContestApplicationFE } from '../../types_fe';

export const SectionOne = () => {
	const formik = useFormikContext<ContestApplicationFE>();

	const leftSectionContent = (
		<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
			Lorem iplsum, dolores menepseh amet dis dolores amet dis dolor.
		</Text>
	);
	return (
		<ContestFormSection
			leftSectionTitle='Dane personalne artysty'
			leftSectionContent={leftSectionContent}>
			<Flex flexDir='column' gap='40px'>
				<Flex gap='24px'>
					<FormInput
						id='firstName'
						name='firstName'
						text='Imię'
						w='50%'
						errorText={
							formik.touched.firstName ? formik.errors.firstName : undefined
						}
						value={formik.values.firstName}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					<FormInput
						id='lastName'
						name='lastName'
						text='Nazwisko'
						w='50%'
						errorText={
							formik.touched.lastName ? formik.errors.lastName : undefined
						}
						value={formik.values.lastName}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
				</Flex>
				<FormInput
					id='birthDate'
					name='birthDate'
					text='Data urodzenia'
					type='date'
					w='100%'
					errorText={
						formik.touched.birthDate ? formik.errors.birthDate : undefined
					}
					value={formik.values.birthDate}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
			</Flex>
		</ContestFormSection>
	);
};
