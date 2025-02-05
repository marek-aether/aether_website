import {
	createListCollection,
	Flex,
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
	Text,
} from '@chakra-ui/react';
import { FC } from 'react';

interface IProps {
	text: string;
	errorText: string | undefined;
	options: { label: string; value: string }[];
	onChange?: (e: any) => void;
	onBlur?: (e: any) => void;
	value?: string;
	id?: string;
	name?: string;
	w?: string;
}

const CustomSelect: FC<IProps> = ({
	text,
	errorText,
	options,
	onChange,
	onBlur,
	value,
	id,
	name,
	w,
}) => {
	const collection = createListCollection({
		items: options,
	});

	return (
		<Flex flexDir='column' gap='8px' w={w}>
			<Text fontSize='16px' fontWeight='500' color='brand.textSecondary'>
				{text}
			</Text>
			<SelectRoot
				collection={collection}
				id={id}
				name={name}
				value={[value || '']}
				onBlur={onBlur}
				position='relative'>
				<SelectTrigger>
					<SelectValueText />
				</SelectTrigger>
				<SelectContent
					position='absolute'
					w='100%'
					top='40px'
					bg='brand.bgLight'>
					{collection.items.map((option) => (
						<SelectItem
							_hover={{ bg: 'rgba(0, 0, 0, 0.1)' }}
							item={option}
							key={option.value}
							onClick={() => onChange!(option.label)}>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectRoot>
			{errorText && (
				<Text fontSize='12px' color='red'>
					{errorText}
				</Text>
			)}
		</Flex>
	);
};

export default CustomSelect;
