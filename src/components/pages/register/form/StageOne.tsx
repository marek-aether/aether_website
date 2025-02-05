import { Flex, Text } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { UserSchema } from '../../../../services/api/types_fe';
import { CTAButton } from '../../../common/buttons/CTAButton';
import CustomSelect from '../../../common/select';
import { FormInput } from './FormInput';

export const StageOne = () => {
	const formik = useFormikContext<Partial<UserSchema>>();

	return (
		<Flex flexDir='column' gap='84px' w='100%' align='start'>
			<Flex flexDir='column' gap='28px' w='100%'>
				<Flex gap='16px'>
					<FormInput
						id='firstName'
						name='firstName'
						text='Imię'
						w='33%'
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
						w='33%'
						errorText={
							formik.touched.lastName ? formik.errors.lastName : undefined
						}
						value={formik.values.lastName}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					<FormInput
						id='birthDate'
						name='birthDate'
						text='Data urodzenia'
						type='date'
						w='33%'
						errorText={
							formik.touched.birthDate ? formik.errors.birthDate : undefined
						}
						value={formik.values.birthDate}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
				</Flex>
				<Flex gap='16px' w='100%'>
					<FormInput
						id='username'
						name='username'
						text='Nazwa używana w Aether Art'
						w='33%'
						errorText={
							formik.touched.username ? formik.errors.username : undefined
						}
						value={formik.values.username}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					<FormInput
						id='artisticNickname'
						name='artisticNickname'
						text='Pseudonim artystyczny'
						w='33%'
						errorText={
							formik.touched.artisticNickname
								? formik.errors.artisticNickname
								: undefined
						}
						value={formik.values.artisticNickname}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
					/>
					<CustomSelect
						id='citizenship'
						name='citizenship'
						text='Obywatelstwo'
						w='33%'
						errorText={
							formik.touched.citizenship ? formik.errors.citizenship : undefined
						}
						value={formik.values.citizenship}
						onBlur={formik.handleBlur}
						onChange={(val) => formik.setFieldValue('citizenship', val)}
						options={[
							{ label: 'Polish', value: 'Polish' },
							{ label: 'American', value: 'American' },
							{ label: 'German', value: 'German' },
							{ label: 'French', value: 'French' },
						]}
					/>
				</Flex>
			</Flex>
			<Flex flexDir='column' gap='32px' w='100%'>
				<Text fontSize='23px' fontWeight='500'>
					Dane adresowe i kontaktowe
				</Text>
				<Flex flexDir='column' gap='28px'>
					<Flex gap='16px'>
						<FormInput
							id='address'
							name='address'
							text='Ulica i numer domu/mieszkania'
							w='100%'
							errorText={
								formik.touched.address ? formik.errors.address : undefined
							}
							value={formik.values.address}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
						/>
					</Flex>
					<Flex gap='16px'>
						<FormInput
							id='postalCode'
							name='postalCode'
							text='Kod pocztowy'
							w='33%'
							errorText={
								formik.touched.postalCode ? formik.errors.postalCode : undefined
							}
							value={formik.values.postalCode}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
						/>
						<FormInput
							id='city'
							name='city'
							text='Miasto'
							w='33%'
							errorText={formik.touched.city ? formik.errors.city : undefined}
							value={formik.values.city}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
						/>
						<CustomSelect
							id='country'
							name='country'
							text='Kraj'
							w='33%'
							errorText={
								formik.touched.country ? formik.errors.country : undefined
							}
							value={formik.values.country}
							onBlur={formik.handleBlur}
							onChange={(val) => formik.setFieldValue('country', val)}
							options={[
								{ label: 'Poland', value: 'Poland' },
								{ label: 'USA', value: 'USA' },
								{ label: 'Germany', value: 'Germany' },
								{ label: 'France', value: 'France' },
							]}
						/>
					</Flex>
					<Flex gap='16px'>
						<FormInput
							id='phoneNumber'
							name='phoneNumber'
							text='Numer telefonu'
							w='33%'
							errorText={
								formik.touched.phoneNumber
									? formik.errors.phoneNumber
									: undefined
							}
							value={formik.values.phoneNumber}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
						/>
						<FormInput
							id='email'
							name='email'
							text='Adres email'
							w='66%'
							errorText={formik.touched.email ? formik.errors.email : undefined}
							value={formik.values.email}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
						/>
					</Flex>
				</Flex>
			</Flex>
			<CTAButton
				variant='filled'
				type='submit'
				disabled={!formik.isValid}
				onClick={() => {
					formik.handleSubmit();
					// update({ ...formik.values });
				}}>
				Zapisz i kontynuuj
			</CTAButton>
		</Flex>
	);
};
