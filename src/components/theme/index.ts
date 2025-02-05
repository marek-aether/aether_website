import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
	theme: {
		semanticTokens: {
			colors: {
				brand: {
					primary: { value: '#7B0323' },
					textLight: { value: 'white' },
					textDark: { value: 'black' },
					textSecondary: { value: '#8D9AAE' },
					bgLight: { value: 'white' },
					bgDark: { value: 'black' },
					bgSecondary: { value: '#F3F3F3' },
				},
			},
		},
	},
});

export const system = createSystem(defaultConfig, config);
