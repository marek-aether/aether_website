import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Checkbox } from '../../../ui/checkbox';
import { FormInput } from './FormInput';
import { useFormikContext } from 'formik';
import { UserSchema } from '../../../../services/api/types_fe';
import { CTAButton } from '../../../common/buttons/CTAButton';

export const StageTwo = () => {
	const formik = useFormikContext<Partial<UserSchema>>();

	return (
		<Flex flexDir='column' gap='40px' w='100%' align='start'>
			<Flex flexDir='column' gap='20px' w='100%'>
				<Text fontSize='23px' fontWeight='500'>
					Jesteś artystą?
				</Text>
				<Checkbox
					id='isArtist'
					name='isArtist'
					checked={formik.values.isArtist}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}>
					Jestem artystą
				</Checkbox>
			</Flex>
			<Flex flexDir='column' gap='20px' w='100%'>
				<FormInput
					id='portfolioUrl'
					name='portfolioUrl'
					text='Link Twojego portfolio'
					placeholder='https://www.yourlink.com/'
					errorText={
						formik.touched.portfolioUrl ? formik.errors.portfolioUrl : undefined
					}
					value={formik.values.portfolioUrl}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<FormInput
					id='instagramUrl'
					name='instagramUrl'
					text='Instagram'
					placeholder='Wprowadź link do Instagrama'
					errorText={
						formik.touched.instagramUrl ? formik.errors.instagramUrl : undefined
					}
					value={formik.values.instagramUrl}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<FormInput
					id='twitterUrl'
					name='twitterUrl'
					text='Twitter'
					placeholder='Wprowadź link do Twittera'
					errorText={
						formik.touched.twitterUrl ? formik.errors.twitterUrl : undefined
					}
					value={formik.values.twitterUrl}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<FormInput
					id='facebookUrl'
					name='facebookUrl'
					text='Facebook'
					placeholder='Wprowadź link do Facebooka'
					errorText={
						formik.touched.facebookUrl ? formik.errors.facebookUrl : undefined
					}
					value={formik.values.facebookUrl}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
			</Flex>
			<Flex gap='20px' flexDir='column' w='100%'>
				<Text fontSize='23px' fontWeight='500'>
					Jesteś zainteresowany/a:
				</Text>
				<Flex gap='28px'>
					<Checkbox
						id='contest'
						name='interestedList'
						checked={formik.values.interestedList?.includes('contest')}
						onBlur={formik.handleBlur}
						onChange={(e) =>
							formik.setFieldValue('interestedList', [
								...formik.values.interestedList!,
								e.target && 'contest',
							])
						}>
						Konkurs Aether Art
					</Checkbox>
					<Checkbox
						id='exhibitions'
						name='interestedList'
						checked={formik.values.interestedList?.includes('exhibitions')}
						onBlur={formik.handleBlur}
						onChange={(e) =>
							formik.setFieldValue('interestedList', [
								...formik.values.interestedList!,
								e.target && 'exhibitions',
							])
						}>
						Wystawy
					</Checkbox>
					<Checkbox
						id='events'
						name='interestedList'
						checked={formik.values.interestedList?.includes('events')}
						onBlur={formik.handleBlur}
						onChange={(e) =>
							formik.setFieldValue('interestedList', [
								...formik.values.interestedList!,
								e.target && 'events',
							])
						}>
						Wydarzenia
					</Checkbox>
					<Checkbox
						id='technologies'
						name='interestedList'
						checked={formik.values.interestedList?.includes('technologies')}
						onBlur={formik.handleBlur}
						onChange={(e) =>
							formik.setFieldValue('interestedList', [
								...formik.values.interestedList!,
								e.target && 'technologies',
							])
						}>
						Nowe Technologie w Sztuce
					</Checkbox>
					<Checkbox
						id='investing'
						name='interestedList'
						checked={formik.values.interestedList?.includes('investing')}
						onBlur={formik.handleBlur}
						onChange={(e) =>
							formik.setFieldValue('interestedList', [
								...formik.values.interestedList!,
								e.target && 'investing',
							])
						}>
						Zakup Dzieł Sztuki
					</Checkbox>
				</Flex>
			</Flex>
			<CTAButton
				variant='filled'
				type='submit'
				disabled={!formik.isValid}
				onClick={() => {
					formik.handleSubmit();
				}}>
				Zapisz i kontynuuj
			</CTAButton>
		</Flex>
	);
};
