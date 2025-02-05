import { PaymentStatus } from '../../../services/api/types_fe';

export type ArtCategoryFE = 'painting' | 'graphics' | 'mixed';

export type ContestApplicationFE = {
	firstName: string;
	lastName: string;
	birthDate: string;
	artwork: {
		title: string;
		category: ArtCategoryFE;
		technique: string;
		size: {
			width: string;
			length: string;
			height: string;
		};
		description: string;
		value: string;
		isAuthor: boolean;
		image: string | null;
	};
	consents: {
		regulations: boolean;
		personalData: boolean;
		image: boolean;
	};
	paymentStatus: PaymentStatus;
};
