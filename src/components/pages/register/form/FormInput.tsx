import { Flex, Input, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IProps {
	text: string;
	errorText: string | undefined;
	placeholder?: string;
	onChange?: (e: any) => void;
	onBlur?: (e: any) => void;
	value?: string;
	type?: string;
	id?: string;
	name?: string;
	w?: string;
	h?: string;
}

export const FormInput: FC<IProps> = ({
	text,
	errorText,
	placeholder,
	onChange,
	onBlur,
	value,
	id,
	name,
	type,
	w,
	h,
}) => {
	return (
		<Flex flexDir='column' gap='8px' w={w}>
			<Text fontSize='16px' fontWeight='500' color='#868686'>
				{text}
			</Text>
			<Input
				type={type}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				placeholder={placeholder}
				id={id}
				h={h}
				name={name}
				borderColor={errorText ? 'red' : ''}
			/>
			{errorText && (
				<Text fontSize='12px' color='red'>
					{errorText}
				</Text>
			)}
		</Flex>
	);
};
