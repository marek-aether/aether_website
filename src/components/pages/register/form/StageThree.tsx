import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Checkbox } from '../../../ui/checkbox';
import { CTAButton } from '../../../common/buttons/CTAButton';
import { useFormikContext } from 'formik';
import { UserSchema } from '../../../../services/api/types_fe';

export const StageThree = () => {
	const formik = useFormikContext<Partial<UserSchema>>();

	return (
		<Flex flexDir='column' gap='32px' w='100%'>
			<Flex flexDir='column' gap='16px'>
				<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
					Zgoda marketingowa na xxxxx
				</Text>
				<Checkbox alignItems='start'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
					mollis vulputate lorem cursus rutrum. Integer quis mi eget ante cursus
					faucibus. Interdum et malesuada fames ac ante ipsum primis in
					faucibus. Donec fringilla euismod diam vel dignissim. Suspendisse
					feugiat ullamcorper efficitur.
				</Checkbox>
			</Flex>
			<Flex flexDir='column' gap='16px'>
				<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
					Zgoda marketingowa na xxxxx
				</Text>
				<Checkbox alignItems='start'>
					Donec sed finibus lorem, id dapibus augue. Praesent sodales congue
					scelerisque. Aliquam tincidunt enim vitae aliquet eleifend. Mauris
					neque magna, suscipit ut aliquam eu, commodo vel odio. Etiam mollis
					ligula ut nisi commodo ornare. Maecenas nec augue est. Proin molestie
					mi ex, in mollis ex cursus vitae. In ex magna, feugiat vel tincidunt
					nec, ultrices non ante. Curabitur vehicula tristique enim sit amet
					mollis. Nunc ante augue, lacinia vel tristique ut, volutpat vitae
					diam. Duis viverra eros justo. Nam libero sapien, rutrum in viverra a,
					sagittis vel metus. Donec tincidunt semper ultricies. Cras eget dolor
					hendrerit ligula tempor tempor id eget elit. Aliquam tincidunt mi
					nisi.
					<br />
					<br />
					In hac habitasse platea dictumst. Pellentesque habitant morbi
					tristique senectus et netus et malesuada fames ac turpis egestas. Orci
					varius natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et
					ultrices posuere cubilia curae; Pellentesque egestas tellus felis, nec
					varius tortor iaculis a. Phasellus rutrum libero eu tristique
					venenatis. Cras vitae condimentum justo. Phasellus rhoncus ornare
					sodales. Praesent urna elit, faucibus in venenatis eu, euismod nec
					arcu. Quisque cursus viverra elit vitae luctus. Vivamus dignissim
					tellus aliquam ligula placerat, vitae luctus augue porttitor. Nulla
					pharetra purus neque, nec sodales nisl tempor dapibus. Mauris et est
					orci. Cras hendrerit tincidunt risus, sit amet pulvinar quam. Nullam
					et quam orci. Duis interdum arcu quis sem sagittis fermentum.
				</Checkbox>
			</Flex>
			<Flex flexDir='column' gap='16px'>
				<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
					Zgoda marketingowa na xxxxx
				</Text>
				<Checkbox alignItems='start'>
					Proin molestie mi ex, in mollis ex cursus vitae. In ex magna, feugiat
					vel tincidunt nec, ultrices non ante. Curabitur vehicula tristique
					enim sit amet mollis.
				</Checkbox>
			</Flex>
			<CTAButton
				variant='filled'
				type='submit'
				disabled={!formik.isValid}
				onClick={formik.handleSubmit}>
				Zapisz i kontynuuj
			</CTAButton>
		</Flex>
	);
};
