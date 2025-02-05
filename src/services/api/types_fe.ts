export type Interests =
	| 'contest'
	| 'exhibitions'
	| 'events'
	| 'technologies'
	| 'investing';

export type PaymentStatus = 'pending' | 'complete';

export type UserSchema = {
	_id: string;
	email?: string;
	firstName?: string;
	lastName?: string;
	birthDate?: string;
	username?: string;
	artisticNickname?: string;
	citizenship?: string;
	address?: string;
	postalCode?: string;
	city?: string;
	country?: string;
	phoneNumber?: string;
	isArtist?: boolean;
	portfolioUrl?: string;
	instagramUrl?: string;
	twitterUrl?: string;
	facebookUrl?: string;
	interestedList?: Interests[];
	paymentPrice?: number;
};
