'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { aetherArtApi } from '../../../../services/api';
import { UserSchema } from '../../../../services/api/types_fe';
import { useUser } from '../../../../store/userStore';
import { WidthWrapper } from '../../../common/wrappers/widthWrapper';
import { StageFour } from './StageFour';
import { StageOne } from './StageOne';
import { StageThree } from './StageThree';
import { StageTwo } from './StageTwo';

interface IProps {
	stage: number;
	setStage: Dispatch<SetStateAction<number>>;
}

const validationSchema = Yup.object({
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

	username: Yup.string()
		.min(3, 'Username must be at least 3 characters')
		.max(30, 'Username must be at most 30 characters')
		.matches(
			/^[a-zA-Z0-9_]+$/,
			'Username can only contain letters, numbers, and underscores'
		)
		.required('Username is required'),

	artisticNickname: Yup.string()
		.max(50, 'Artistic nickname must be at most 50 characters')
		.notRequired(),

	citizenship: Yup.string()
		.min(2, 'Citizenship must be at least 2 characters')
		.max(50, 'Citizenship must be at most 50 characters')
		.required('Citizenship is required'),

	address: Yup.string()
		.min(5, 'Address must be at least 5 characters')
		.max(100, 'Address must be at most 100 characters')
		.required('Address is required'),

	postalCode: Yup.string()
		.matches(/^\d{2}-\d{3}$/, 'Invalid postal code format (e.g., 12-345)')
		.required('Postal code is required'),

	city: Yup.string()
		.min(2, 'City must be at least 2 characters')
		.max(50, 'City must be at most 50 characters')
		.required('City is required'),

	country: Yup.string()
		.min(2, 'Country must be at least 2 characters')
		.max(50, 'Country must be at most 50 characters')
		.required('Country is required'),

	phoneNumber: Yup.string()
		.matches(/^\+?\d{7,15}$/, 'Invalid phone number format')
		.required('Phone number is required'),

	email: Yup.string()
		.email('Invalid email format')
		.required('Email is required'),

	portfolioUrl: Yup.string().url('Invalid URL format'),
	instagramUrl: Yup.string().url('Invalid URL format'),
	twitterUrl: Yup.string().url('Invalid URL format'),
	facebookUrl: Yup.string().url('Invalid URL format'),
});

const Form: FC<IProps> = ({ stage, setStage }) => {
	const { user } = useUser();

	const initialValues: Partial<UserSchema> = {
		firstName: '',
		lastName: '',
		birthDate: '',
		username: '',
		artisticNickname: '',
		citizenship: '',
		address: '',
		postalCode: '',
		city: '',
		country: '',
		phoneNumber: '',
		portfolioUrl: '',
		instagramUrl: '',
		twitterUrl: '',
		facebookUrl: '',
		isArtist: false,
		interestedList: [],
		email: (user && user.email) || '',
	};

	const handleSubmit = async (values: Partial<UserSchema>) => {
		if ([0, 1, 2].includes(stage)) {
			const success = await updateUser(values);
			if (success) setStage((prev) => (prev === 3 ? 3 : prev + 1));
		}

		if (stage === 3) router.push('/login');
	};

	const [component, setComponent] = useState(<StageOne />);

	const router = useRouter();

	const updateUser = async (values: Partial<UserSchema>) => {
		const userId = user?._id;

		if (!userId) {
			router.push('/login');
			return;
		}

		const resp = await aetherArtApi.updateUser(userId, values);

		if (!resp._id) return;

		return true;
	};

	useEffect(() => {
		switch (stage) {
			case 0:
				setComponent(<StageOne />);
				break;
			case 1:
				setComponent(<StageTwo />);
				break;
			case 2:
				setComponent(<StageThree />);
				break;
			case 3:
				setComponent(<StageFour />);
				break;
			default:
				setComponent(<StageOne />);
				break;
		}
	}, [stage]);

	return (
		<WidthWrapper>
			<Flex flexDir='column' gap='56px' w='75%' align='start'>
				{stage !== 3 && (
					<Flex align='center' gap='16px' w='100%'>
						<Flex flexDir='column' gap='8px' w='33%'>
							<Text fontSize='16px' fontWeight='500'>
								1. Podstawowe dane
							</Text>
							<Box
								w='100%'
								h='6px'
								bgColor={stage === 0 ? 'brand.primary' : '#DBDBDB'}
								onClick={() => setStage(0)}
								cursor='pointer'
							/>
						</Flex>
						<Flex flexDir='column' gap='8px' w='33%'>
							<Text fontSize='16px' fontWeight='500'>
								2. Opcjonalne informacje
							</Text>
							<Box
								w='100%'
								h='6px'
								bgColor={stage === 1 ? 'brand.primary' : '#DBDBDB'}
								onClick={() => setStage(1)}
								cursor='pointer'
							/>
						</Flex>
						<Flex flexDir='column' gap='8px' w='33%'>
							<Text fontSize='16px' fontWeight='500'>
								3. Zgody marketingowe
							</Text>
							<Box
								w='100%'
								h='6px'
								bgColor={stage === 2 ? 'brand.primary' : '#DBDBDB'}
								onClick={() => setStage(2)}
								cursor='pointer'
							/>
						</Flex>
					</Flex>
				)}
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values) => handleSubmit(values)}
					w='100%'>
					{component}
				</Formik>
			</Flex>
		</WidthWrapper>
	);
};

export default Form;
