import { Flex, Image, Link, Text } from '@chakra-ui/react';
import { AetherArtFooterLogo } from '../../common/icons/AetherArtFooterLogo';
import Sponsors from './Sponsors';
import { Newsletter } from './Newsletter';
import { FooterLinks } from './FooterLinks';
import { WidthWrapper } from '../../common/wrappers/widthWrapper';

const brandLogos = [
	<Image
		key={1}
		src='https://s3-alpha-sig.figma.com/img/7441/1022/84af7b588829244ee35308bad03202f2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iUFEJop8rMuFr~FSWVU6IrOlDVPqEaP3SQF5eu-0IZZUE0F5dFJ6VsACTRLyXFOGTrN1dwnBq3lYzgORLNaOW4X5KChcdGV805BxjXa-aISC2Kpz0NrtEROPyDeCE4grtDotd5iJLxpkyzG826YA72xDb-tpnvzRCJmSy8FsQUzrVmBD1HigNooS2zrqhoMS5jfkiFVJ9AXbFIC5Eu4lDqhlMwdhtHeI8-YXJKhFUfofp8qCF7AE~t8vfuQZ2MG2fot1M7Txqe2Brjvx8Gog3pHGnY9eHBWWjTHOAbexHxlgOGnZreuNe0Yw6FUOdDXlnuM6buX6rSzTZrSd-999Sw__'
		alt=''
		w='120px'
		role='presentation'
	/>,

	<Image
		key={2}
		src='https://s3-alpha-sig.figma.com/img/8e55/7a4d/5749c4ddf7221a17dc40602847f13325?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hyAQccaB3QXK3q3Xhn2kqW5vu1QQ2rHaymksIFjr9bktlMDb~zmfzrDAMFnY-NhPKPr-0yoscZTaKFJA-IXy4~7Qubi~wlXVT3w89YB8rQwrCnSJ7s9Z2M~1J1E~YABqVbgi~gO-eRmYeh0OZ9xWAnv3BHjd8vegYmK6rx~ob4rZcVInrUQOXJTNCE73mvFtobahQSK7qTzpWVUdwbLDrLOU5euNN7ZQRykCrCtSAa0S~wLZeMJY6tihQ1FSqNcF8Sx4DUqVYB833t7MOQUjvIL61GdJ3dd8uhSi0mPvf94goijlxHAkRcCYWIcnmOEmTEiqf7cLQAz4XDuhUZWAnA__'
		alt=''
		h='60px'
		role='presentation'
	/>,

	<Image
		key={3}
		src='https://s3-alpha-sig.figma.com/img/f70d/4db3/e9e853eedc6c1be58f0241db346ce9f8?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OHGIrS1DJrngWdPgMHf-38NTS71SKpCQV1FLn7XOR0XQI5-WVOf8kUbpK5sUbpblx-6LS5VN4ZRfowNlMXred5I8B7Mb5Cf~Vxu4vB5ijKd6E34QUcQEAbrGyqqZp6oeA3WXhY-1ACJiwlA~Yh7I7iLf4GafWJZX-JHRBHuIzJb9r1FddTJ3cGjeQrAlk04KD~XTKYhDEJHeZKI9vGLcriVQNHmnozEqu-pHomn2TaQHEw1OfMaBryiRyXS-BCa4jdWp9BWnh7zvWjyZw3mQdMSWw0vwxdBK0w1RZuDlwjXYAy3KN3XP15kxno8v0VAsv~wH2wULdaFaN560VtWuCA__'
		alt=''
		h='60px'
		role='presentation'
	/>,

	<Image
		key={4}
		src='https://s3-alpha-sig.figma.com/img/d41b/44dd/0c4c36884c3eac6ba9d59d96d193611b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7vZiA-OQGZ2ee7DSo1ods6VUQb6oc2l5LvtwoxP7oUlm7btLfpH~UUyR7qf7H5T1gtKsp8VmaLLs78wqAOYySe9XFFynPHQkeZPDPQEcPknbtl4F140s1fT90k5xoS8xkNA~ASe9i5U96OuiVZ11WfRJ-EnL7mz7JYw7HX2l4Hbcm4~FVMZQdIPckKBMkWg0KzZOFe8HPkhWNCJA80BGzpJ0D0hxBAG3E9T4lGzWkE8oQmE7pjjcONgPjjjcId9xCdYep6KAVdxqAw3K68q1auAfY8xdPKFi0a4~WTsj-fOpOyYHCl5sfXg16WyCEBTZUEY2xLmJb0MFL5b3K~AgA__'
		alt=''
		h='60px'
		role='presentation'
	/>,

	<Image
		key={5}
		src='https://s3-alpha-sig.figma.com/img/5c68/d79c/61d4b85052f58eb6552f6a58e45df96a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DW46Ke2QX~bxvmomK9R1JXkUXLwSXXD8TQyi~0OTpuBJk3-L-I-bgUR46SSIvlJUSQDIaCSZEJdDqVXodYHQ99rBhhgBcq8crjW8MUwgXCoH2yNtD8KW7DGh8GEdNjDvCbYTQot6eWIO09mhyjfyyGjKPsj16L0tZaX1ysJvbxXQaRxN8yg0yGQOXyTNoQbjPtan0axAlkBdENVmXZnsaDr7OtuMjnGYQRaxS4-oOA2xtdDAW1f58rA8wVOf8FMr0~LPbtxTwxpZt6LcGf9fNzPwnYXR2ndznJ3Gkrejc5b8TKnQqR44x4pqfSW0~Ev01ZipqNTGWkAABnDlRzybAw__'
		alt=''
		h='60px'
		role='presentation'
	/>,

	<Image
		key={6}
		src='https://s3-alpha-sig.figma.com/img/123c/0acd/fc89929120caa2471d6f258b945fa874?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BN1oZg2V2FAVEL5mAmYWx1Lj4HX-vTF0ZMsAXhkRsiRT27Vlscjkdxj20Web42PDXBRRs9N3OViWr2fbvYFmMw0TWDPM5fI9hNXBmvfgD5X-VQuM2q9wK7x2zKsuxNwhjFSbuUKAZMYvSOhJ5A8u353KXKVmI~TUHjWF40ROMLQMnWK4HkVKeIWzuH1EiU4TmtJM-wtf3CqIn8-88LkmZgjkecXUEkEm6zuEqLkG9oNA72vC1RogJVkI~dw3brKZ6DQdYsuh~bL9SvvGhXOG18PYL7wbVyY2zhbRhh3BfwMJPbbKbiYC~9Q0lZBMU6Fd5vfo0gxj4SlAfGOtjyGLFg__'
		alt=''
		h='60px'
		role='presentation'
	/>,

	<Image
		key={7}
		src='https://s3-alpha-sig.figma.com/img/1021/6d92/a0d32f8a0c6f6244cca80f7009c30769?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ml9MtCO4IHiNEfVH0UKAwtFWxaY9a0wxsGlNlSJx-IQ1sES7FP1OGJuqX78iuEFMmbCUl2m~QT7iriU8OA9SyP9ek5CuMRnrjw5CC0KrrcKU34oHhURdP2DcMBBUItarLd5F5NAviMN74zqJjRYx2wTC3hFlinQG-2Kre0rssgBF0h13L4xugEID6CR2yO9QTIs48sjvOm-ticUAzbyYyyPwgTuJzELzIwO1qH~R-InMXupd1NeKZSu7etywtpXpHhbiYRIElD06lATI6ZzdvjDtCH7ll9gYRFfLiP1arQA8kVf5BakZgIO9R3I-AqVXndQ~pNMztiFjwDL~l-VKAQ__'
		alt=''
		h='60px'
		role='presentation'
	/>,
];

const Footer = () => {
	return (
		<Flex
			bg='linear-gradient(180deg, #000000 64.16%, #7B0323 100%)'
			position='relative'
			flexDir='column'
			color='brand.textLight'>
			<Sponsors logos={brandLogos} />
			<WidthWrapper>
				<Newsletter />
				<FooterLinks />
				<Flex
					flexDir='column'
					gap='12px'
					zIndex='10'
					mt='52px'
					pb='240px'
					borderBottom='1px solid rgba(255, 255, 255, 0.1)'>
					<Link href='' fontWeight='700' textDecoration='underline'>
						CONTACT@AETHERART.COM
					</Link>
					<Text fontSize='10px' fontWeight='600' color='#373737' w='30%'>
						* Ze względu na dużą ilość korespondencji, czas odpowiedzi na
						Państwa wiadomość może wynieść do 3 dni roboczych. Dokładamy
						wszelkich starań, aby odpowiadać tak szybko, jak to możliwe.
						Dziękujemy za cierpliwość.
					</Text>
				</Flex>
				<Flex
					align='center'
					justify='space-between'
					zIndex='10'
					pt='36px'
					pb='120px'
					fontSize='16px'>
					<Text>
						© {new Date().getFullYear()} Aether Art Foundation. Wszelkie prawa
						zastrzeżone.
					</Text>
					<Flex align='center' gap='40px' opacity='0.5'>
						<Link href='#' _hover={{ textDecoration: 'underline' }}>
							Polityka prywatności
						</Link>
						<Link href='#' _hover={{ textDecoration: 'underline' }}>
							Regulamin
						</Link>
					</Flex>
				</Flex>
			</WidthWrapper>
			<AetherArtFooterLogo
				position='absolute'
				bottom='60px'
				left='50%'
				w='90vw'
				transform='translate(-50%)'
				zIndex='0'
			/>
		</Flex>
	);
};

export default Footer;
