import { Icon } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IProps {
	color?: string;
	size?: string;
}

export const XIcon: FC<IProps> = ({ color, size }) => {
	return (
		<Icon w={size} h={size}>
			<svg
				width={size || '10px'}
				height={size || '9px'}
				viewBox='0 0 10 9'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M9 0.5L1 8.5' stroke={color || 'white'} />
				<path d='M1 0.5L9 8.5' stroke={color || 'white'} />
			</svg>
		</Icon>
	);
};
