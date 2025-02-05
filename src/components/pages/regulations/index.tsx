import { Flex, List, Text } from '@chakra-ui/react';
import React from 'react';

const Regulations = () => {
	return (
		<Flex flexDir='column' gap='32px'>
			<Flex flexDir='column' gap='8px' fontSize='14px'>
				<Text fontWeight='500'>§1 Postanowienia Ogólne</Text>
				<List.Root as='ol' _marker={{ color: 'black' }}>
					<List.Item _marker={{ color: 'inherit' }}>
						Organizatorem konkursu Aether Art Competition 2025, zwanego dalej
						„Konkursem”, jest Aether Art Foundation z siedzibą w Warszawie,
						zwana dalej „Organizatorem”.
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Konkurs ma charakter międzynarodowy i jest skierowany do artystów
						tworzących w dziedzinie malarstwa i grafiki, bez względu na ich
						wiek, wykształcenie czy przynależność do organizacji artystycznych.
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Celem Konkursu jest odkrywanie i promowanie utalentowanych artystów
						z całego świata, prezentacja ich dzieł szerokiej publiczności oraz
						wspieranie ich rozwoju artystycznego.
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Konkurs promuje ideę synergii sztuki i technologii, zachęcając do
						eksplorowania nowych form wyrazu artystycznego i wykorzystywania
						innowacyjnych narzędzi w procesie twórczym.
					</List.Item>
				</List.Root>
			</Flex>
			<Flex flexDir='column' gap='8px' fontSize='14px'>
				<Text fontWeight='500'>§1 Warunki uczestnictwa</Text>
				<List.Root as='ol' _marker={{ color: 'black' }}>
					<List.Item _marker={{ color: 'inherit' }}>
						W Konkursie mogą brać udział wszyscy artyści, którzy ukończyli 18
						lat.
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Każdy uczestnik może zgłosić do Konkursu dowolną liczbę prac, przy
						czym każda praca musi zostać zgłoszona osobno i wymaga uiszczenia
						osobnej opłaty wpisowej.
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Do Konkursu przyjmowane są prace z dziedziny:
						<List.Root ml='16px'>
							<List.Item>
								Malarstwa: techniki olejne, akrylowe oraz techniki mieszane z
								dominacją malarstwa.
							</List.Item>
							<List.Item>
								Grafiki: grafika warsztatowa (np. akwaforta, akwatinta,
								litografia, drzeworyt).
							</List.Item>
						</List.Root>
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Dopuszczalne są prace o maksymalnych wymiarach 200 cm x 200 cm.
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Zgłaszane prace muszą być oryginalnymi dziełami uczestnika, do
						których posiada on pełnię praw autorskich.
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Prace nie mogą być kopiami dzieł innych artystów, ani pracami
						powstałymi w ramach tutoriali.
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Prace, które w całości lub w znacznej części, zostały wygenerowane
						za pomocą oprogramowania opartego na sztucznej inteligencji, nie są
						dopuszczane do konkursu. Artyści mogą jednak wykorzystywać narzędzia
						AI w procesie twórczym, o ile ich wkład pozostaje dominujący i
						kluczowy dla ostatecznego kształtu dzieła.
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Zgłoszenia należy dokonać poprzez formularz zgłoszeniowy dostępny na
						stronie internetowej aetherart.com w terminie od 1 kwietnia 2025 r.
						do 30 czerwca 2025 r.
					</List.Item>
					<List.Item _marker={{ color: 'inherit' }}>
						Zgłoszenie do Konkursu jest równoznaczne z akceptacją niniejszego
						Regulaminu.
					</List.Item>
				</List.Root>
			</Flex>
		</Flex>
	);
};

export default Regulations;
