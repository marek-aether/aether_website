import { Icon } from '@chakra-ui/react';
import React, { FC } from 'react';

interface IProps {
	color?: string;
	underline?: boolean;
}

export const ArrowLineUpRightIcon: FC<IProps> = ({ color, underline }) => {
	return (
		<Icon>
			<svg
				width='18'
				height='18'
				viewBox='0 0 18 18'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g clipPath='url(#clip0_26_73)'>
					{underline && (
						<path
							d='M2.8125 15.1875H15.1875'
							stroke={color || 'white'}
							strokeWidth='1.4'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					)}
					<path
						d='M5.625 11.8125L13.5 3.9375'
						stroke={color || 'white'}
						strokeWidth='1.4'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M6.75 3.9375H13.5V10.6875'
						stroke={color || 'white'}
						strokeWidth='1.4'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</g>
				<defs>
					<clipPath id='clip0_26_73'>
						<rect width='18' height='18' fill={color || 'white'} />
					</clipPath>
				</defs>
			</svg>
		</Icon>
	);
};
