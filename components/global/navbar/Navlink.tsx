import { Link } from '@chakra-ui/react';
import React, { FC } from 'react';

export interface INavlink {
	textColor: string;
	href: string;
	text: string;
}

export const Navlink: FC<INavlink> = ({ textColor, href, text }) => {
	return (
		<Link href={href} fontWeight='500' fontSize='12px' color={textColor}>
			{text}
		</Link>
	);
};
