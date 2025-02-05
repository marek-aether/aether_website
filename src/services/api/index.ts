import { createContestApplication } from './endpoints/createContestApplication';
import { login } from './endpoints/login';
import { register } from './endpoints/register';
import { updateUser } from './endpoints/updateUser';

export const aetherArtApi = {
	login,
	register,

	updateUser,

	createContestApplication,
};
