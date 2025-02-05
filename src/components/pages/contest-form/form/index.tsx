import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SectionOne } from './sections/SectionOne';
import { Formik } from 'formik';
import { useUser } from '../../../../store/userStore';
import { ContestApplicationFE } from '../types_fe';
import * as Yup from 'yup';
import { SectionTwo } from './sections/sectionTwo/SectionTwo';
import { Payment } from './sections/Payment';
import { FileUpload } from './sections/FileUpload';
import { Consents } from './sections/Consents';

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'First name must be at least 2 characters')
		.max(50, 'First name must be at most 50 characters')
		.required('First name is required'),

	lastName: Yup.string()
		.min(2, 'Last name must be at least 2 characters')
		.max(50, 'Last name must be at most 50 characters')
		.required('Last name is required'),

	birthDate: Yup.date()
		.max(new Date(), 'Date cannot be in the future')
		.required('Date is required'),

	artwork: Yup.object().shape({
		title: Yup.string()
			.required('Title is required')
			.min(2, 'Title must be at least 2 characters')
			.max(50, 'Title must be at most 50 characters'),

		category: Yup.string().required('Category is required'),

		technique: Yup.string()
			.required('Technique is required')
			.min(2, 'Art technique must be at least 2 characters')
			.max(25, 'Art technique must be at most 25 characters'),

		size: Yup.object().shape({
			width: Yup.number()
				.typeError('Width must be a number')
				.positive('Width must be positive')
				.max(200, 'Width must be at most 200cm')
				.required('Width is required'),
			length: Yup.number()
				.typeError('Length must be a number')
				.positive('Length must be positive')
				.max(200, 'Length must be at most 200cm')
				.required('Length is required'),
			height: Yup.number()
				.typeError('Height must be a number')
				.positive('Height must be positive')
				.max(15, 'Width must be at most 15cm')
				.required('Height is required'),
		}),

		description: Yup.string()
			.required('Description is required')
			.min(10, 'Description must be at least 10 characters')
			.max(50, 'Description must be at most 50 characters'),

		value: Yup.number()
			.typeError('Value must be a number')
			.positive('Value must be positive')
			.max(1500, 'Value must be at most $1500')
			.required('Value is required'),

		isAuthor: Yup.boolean()
			.oneOf([true], 'Author confirmation is required')
			.required('Author confirmation is required'),

		// image: Yup.mixed()
		// 	.required('Image is required')
		// 	.test('fileType', 'Only image files are allowed', (value: any) => {
		// 		if (!value) return false;
		// 		return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
		// 	}),
	}),

	consents: Yup.object().shape({
		regulations: Yup.boolean()
			.oneOf([true], 'You must accept the regulations')
			.required('Regulations consent is required'),

		personalData: Yup.boolean()
			.oneOf([true], 'You must consent to personal data processing')
			.required('Personal data consent is required'),

		image: Yup.boolean()
			.oneOf([true], 'You must consent to image processing')
			.required('Image consent is required'),
	}),
});

const ContestForm = () => {
	const { user } = useUser();
	const [initialValues, setInitialValues] = useState<ContestApplicationFE>({
		firstName: (user && user.firstName) || '',
		lastName: (user && user.lastName) || '',
		birthDate: (user && user.birthDate) || '',
		artwork: {
			title: '',
			category: 'painting',
			technique: '',
			size: {
				width: '',
				length: '',
				height: '',
			},
			description: '',
			value: '',
			isAuthor: false,
			image: null,
		},
		consents: {
			regulations: false,
			personalData: false,
			image: false,
		},
		paymentStatus: 'pending',
	});

	useEffect(() => {
		setInitialValues({
			firstName: (user && user.firstName) || '',
			lastName: (user && user.lastName) || '',
			birthDate: (user && user.birthDate) || '',
			artwork: {
				title: '',
				category: 'painting',
				technique: '',
				size: {
					width: '',
					length: '',
					height: '',
				},
				description: '',
				value: '',
				isAuthor: false,
				image: null,
			},
			consents: {
				regulations: false,
				personalData: false,
				image: false,
			},
			paymentStatus: 'pending',
		});
	}, [user]);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={() => {}}>
			<Flex flexDir='column' gap='60px' w='100%'>
				<SectionOne />
				<Box h='1px' bg='#D1D1D1' w='100%' />
				<SectionTwo />
				<Box h='1px' bg='#D1D1D1' w='100%' />
				<FileUpload />
				<Box h='1px' bg='#D1D1D1' w='100%' />
				<Payment />
				<Box h='1px' bg='#D1D1D1' w='100%' />
				<Consents />
			</Flex>
		</Formik>
	);
};

export default ContestForm;
