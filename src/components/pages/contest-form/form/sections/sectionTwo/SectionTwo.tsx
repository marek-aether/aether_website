import React from 'react';
import { ContestFormSection } from '../ContestFormSection';
import { Flex, Text, Textarea } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { ContestApplicationFE } from '../../../types_fe';
import { FormInput } from '../../../../register/form/FormInput';
import { Checkbox } from '../../../../../ui/checkbox';
import { ArtCategoryPicker } from './ArtCategoryPicker';

export const SectionTwo = () => {
	const formik = useFormikContext<ContestApplicationFE>();

	const leftSectionContent = (
		<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
			Lorem iplsum, dolores menepseh.Lorem iplsum, dolores menepseh.Lorem
			iplsum, dolores menepseh.Lorem iplsum, dolores menepseh.
		</Text>
	);

	return (
		<ContestFormSection
			leftSectionTitle='Informacje o zgłaszanej pracy'
			leftSectionContent={leftSectionContent}>
			<Flex flexDir='column' gap='28px'>
				<FormInput
					id='artwork.title'
					name='artwork.title'
					placeholder='Dokładny tytuł zgłaszanego dzieła'
					text='Tytuł pracy'
					w='100%'
					errorText={
						formik.touched?.artwork?.title && formik.errors.artwork?.title
							? formik.errors.artwork!.title
							: undefined
					}
					value={formik.values.artwork.title}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<Flex flexDir='column' gap='8px'>
					<Text fontSize='16px' fontWeight='500' color='#868686'>
						Wybierz kategorię swojej pracy
					</Text>
					<ArtCategoryPicker />
				</Flex>
				<FormInput
					id='artwork.technique'
					name='artwork.technique'
					placeholder='Opis techniki, w jakiej praca została wykonana (np. olej na płótnie, linoryt)'
					text='Technika wykonania'
					w='100%'
					errorText={
						formik.touched?.artwork?.technique &&
						formik.errors.artwork?.technique
							? formik.errors.artwork!.technique
							: undefined
					}
					value={formik.values.artwork.technique}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<Flex gap='8px'>
					<FormInput
						id='artwork.size.width'
						name='artwork.size.width'
						placeholder='max 200cm'
						text='Szerokość'
						w='33%'
						errorText={
							formik.touched?.artwork?.size?.width &&
							formik.errors.artwork?.size &&
							formik.errors.artwork?.size.width
								? formik.errors.artwork!.size!.width
								: undefined
						}
						value={formik.values.artwork.size.width}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					<FormInput
						id='artwork.size.length'
						name='artwork.size.length'
						placeholder='max 200cm'
						text='Długość'
						w='33%'
						errorText={
							formik.touched?.artwork?.size?.length &&
							formik.errors.artwork?.size &&
							formik.errors.artwork?.size.length
								? formik.errors.artwork!.size!.length
								: undefined
						}
						value={formik.values.artwork.size.length}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					<FormInput
						id='artwork.size.height'
						name='artwork.size.height'
						placeholder='max 15cm'
						text='Wysokość'
						w='33%'
						errorText={
							formik.touched?.artwork?.size?.height &&
							formik.errors.artwork?.size &&
							formik.errors.artwork?.size.height
								? formik.errors.artwork!.size!.height
								: undefined
						}
						value={formik.values.artwork.size.height}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
				</Flex>
				<Flex flexDir='column' gap='8px'>
					<Text fontSize='16px' fontWeight='500' color='#868686'>
						Krótki opis pracy
					</Text>
					<Textarea
						id='artwork.description'
						name='artwork.description'
						h='96px'
						placeholder='Kilka zdań o koncepcji, inspiracji lub przesłaniu dzieła'
						w='100%'
						value={formik.values.artwork.description}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					{formik.touched?.artwork?.description &&
						formik.errors.artwork?.description && (
							<Text fontSize='12px' color='red'>
								{formik.errors.artwork.description}
							</Text>
						)}
				</Flex>
				<FormInput
					id='artwork.value'
					name='artwork.value'
					text='Wycena twojej pracy (maksymalna wartość $1500)'
					placeholder='Wprowadź wartość w USD'
					w='100%'
					errorText={
						formik.touched?.artwork?.value && formik.errors.artwork?.value
							? formik.errors.artwork!.value
							: undefined
					}
					value={formik.values.artwork.value}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<Flex flexDir='column' gap='4px'>
					<Checkbox
						id='artwork.isAuthor'
						name='artwork.isAuthor'
						checked={formik.values.artwork.isAuthor || false}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}>
						Potwierdzam, że jestem autorem pracy i posiadam do niej pełne prawa
						autorskie.
					</Checkbox>
					{formik.touched?.artwork?.isAuthor &&
						formik.errors.artwork?.isAuthor && (
							<Text fontSize='12px' color='red'>
								{formik.errors.artwork.isAuthor}
							</Text>
						)}
				</Flex>
			</Flex>
		</ContestFormSection>
	);
};
