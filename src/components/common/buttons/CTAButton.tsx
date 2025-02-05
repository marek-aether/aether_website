import { Button } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	variant: 'filled' | 'outlined';
	disabled?: boolean;
	isLoading?: boolean;
	bgColor?: string;
	color?: string;
	type?: 'button' | 'submit' | 'reset';
	w?: string;
	onClick?: () => void;
}

export const CTAButton: FC<IProps> = ({
	children,
	variant,
	disabled,
	isLoading,
	bgColor,
	color,
	type,
	w,
	onClick,
}) => {
	const border = variant === 'filled' ? '' : '1px solid #7B0323';
	const bg = variant === 'filled' ? bgColor || 'brand.primary' : 'transparent';
	const textColor =
		variant === 'filled'
			? color || 'brand.textLight'
			: color || 'brand.textDark';

	return (
		<Button
			border={border}
			borderRadius='100px'
			color={textColor}
			bg={bg}
			type={type}
			disabled={disabled}
			loading={isLoading}
			w={w}
			p='24px 32px'
			onClick={onClick}>
			{children}
		</Button>
	);
};
