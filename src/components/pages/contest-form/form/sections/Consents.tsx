import React from 'react';
import { ContestFormSection } from './ContestFormSection';
import { Flex, Text } from '@chakra-ui/react';
import { Checkbox } from '../../../../ui/checkbox';
import { ContestApplicationFE } from '../../types_fe';
import { useFormikContext } from 'formik';
import Link from 'next/link';
import { CTAButton } from '../../../../common/buttons/CTAButton';
import { aetherArtApi } from '../../../../../services/api';
import { useRouter } from 'next/navigation';
import { useUser } from '../../../../../store/userStore';
import { toaster } from '../../../../ui/toaster';

export const Consents = () => {
	const formik = useFormikContext<ContestApplicationFE>();

	const router = useRouter();

	const { user } = useUser();

	const leftSectionContent = (
		<Text fontSize='16px' color='brand.textSecondary'>
			Niezbędne zgody bez których nie można zgłosić swojej pracy w konkursie
			“Aether art”.
		</Text>
	);

	const handleSubmit = async () => {
		const userId = user?._id;

		if (!userId) {
			router.push('/login');
			return;
		}

		const paymentPrice = (user && user.paymentPrice) || 100;
		const paymentStatus = formik.values.paymentStatus || 'pending';

		const resp = await aetherArtApi.createContestApplication(userId, {
			...formik.values,
			paymentPrice,
			paymentStatus,
		});

		if (resp.length === 0) return;

		toaster.create({
			title: 'Application successfully submitted',
			type: 'success',
		});
		router.push('/');
	};

	return (
		<ContestFormSection
			leftSectionTitle='Zgody i oświadczenia'
			leftSectionContent={leftSectionContent}>
			<Flex flexDir='column' gap='32px' mb='64px'>
				<Flex flexDir='column' gap='4px'>
					<Text fontSize='16px' color='#868686' fontWeight='500'>
						Akceptacja Regulaminu Konkursu
					</Text>
					<Checkbox
						alignItems='start'
						id='consents.regulations'
						name='consents.regulations'
						checked={formik.values.consents.regulations || false}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}>
						<Flex display='inline'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
							mollis vulputate lorem cursus rutrum. Integer quis mi eget ante
							cursus faucibus. Interdum et malesuada fames ac ante ipsum primis
							in faucibus. Donec fringilla euismod diam vel dignissim.
							Suspendisse feugiat ullamcorper efficitur.&nbsp;
							<Link href='/regulations'>
								<Text color='brand.primary' fontWeight='700'>
									Regulamin konkursu
								</Text>
							</Link>
						</Flex>
					</Checkbox>
					{formik.touched?.consents?.regulations &&
						formik.errors.consents?.regulations && (
							<Text fontSize='12px' color='red'>
								{formik.errors.consents.regulations}
							</Text>
						)}
				</Flex>
				<Flex flexDir='column' gap='4px'>
					<Text fontSize='16px' color='#868686' fontWeight='500'>
						Zgoda na Przetwarzanie Danych Osobowych
					</Text>
					<Checkbox
						alignItems='start'
						id='consents.personalData'
						name='consents.personalData'
						checked={formik.values.consents.personalData || false}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}>
						Donec sed finibus lorem, id dapibus augue. Praesent sodales congue
						scelerisque. Aliquam tincidunt enim vitae aliquet eleifend. Mauris
						neque magna, suscipit ut aliquam eu, commodo vel odio. Etiam mollis
						ligula ut nisi commodo ornare. Maecenas nec augue est. Proin
						molestie mi ex, in mollis ex cursus vitae. In ex magna, feugiat vel
						tincidunt nec, ultrices non ante. Curabitur vehicula tristique enim
						sit amet mollis. Nunc ante augue, lacinia vel tristique ut, volutpat
						vitae diam. Duis viverra eros justo. Nam libero sapien, rutrum in
						viverra a, sagittis vel metus. Donec tincidunt semper ultricies.
						Cras eget dolor hendrerit ligula tempor tempor id eget elit. Aliquam
						tincidunt mi nisi.
						<br />
						<br />
						In hac habitasse platea dictumst. Pellentesque habitant morbi
						tristique senectus et netus et malesuada fames ac turpis egestas.
						Orci varius natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus
						orci luctus et ultrices posuere cubilia curae; Pellentesque egestas
						tellus felis, nec varius tortor iaculis a. Phasellus rutrum libero
						eu tristique venenatis. Cras vitae condimentum justo. Phasellus
						rhoncus ornare sodales. Praesent urna elit, faucibus in venenatis
						eu, euismod nec arcu. Quisque cursus viverra elit vitae luctus.
						Vivamus dignissim tellus aliquam ligula placerat, vitae luctus augue
						porttitor. Nulla pharetra purus neque, nec sodales nisl tempor
						dapibus. Mauris et est orci. Cras hendrerit tincidunt risus, sit
						amet pulvinar quam. Nullam et quam orci. Duis interdum arcu quis sem
						sagittis fermentum.
					</Checkbox>
					{formik.touched?.consents?.personalData &&
						formik.errors.consents?.personalData && (
							<Text fontSize='12px' color='red'>
								{formik.errors.consents.personalData}
							</Text>
						)}
				</Flex>
				<Flex flexDir='column' gap='4px'>
					<Text fontSize='16px' color='#868686' fontWeight='500'>
						Zgoda na Wykorzystanie Wizerunku Pracy
					</Text>
					<Checkbox
						alignItems='start'
						id='consents.image'
						name='consents.image'
						checked={formik.values.consents.image || false}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}>
						Proin molestie mi ex, in mollis ex cursus vitae. In ex magna,
						feugiat vel tincidunt nec, ultrices non ante. Curabitur vehicula
						tristique enim sit amet mollis.
					</Checkbox>
					{formik.touched?.consents?.image && formik.errors.consents?.image && (
						<Text fontSize='12px' color='red'>
							{formik.errors.consents.image}
						</Text>
					)}
				</Flex>
				<CTAButton
					variant='filled'
					disabled={!formik.isValid}
					onClick={handleSubmit}>
					Wyślij zgłoszenie
				</CTAButton>
			</Flex>
		</ContestFormSection>
	);
};
