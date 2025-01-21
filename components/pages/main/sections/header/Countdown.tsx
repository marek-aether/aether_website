'use client';

import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface ITime {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

const timeDifference = new Date('2025-07-31').getTime() - new Date().getTime();
const initDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
const initHours = Math.floor(timeDifference / 1000 / 60 / 60) % 60;
const initMinutes = Math.floor(timeDifference / 1000 / 60) % 60;
const initSeconds = Math.floor(timeDifference / 1000) % 60;

const initTime = {
	days: initDays,
	hours: initHours,
	minutes: initMinutes,
	seconds: initSeconds,
};

export const Countdown = () => {
	const [time, setTime] = useState<ITime>(initTime);

	const countdown = (time: ITime) => {
		const { days, hours, minutes, seconds } = time;

		if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
			return time;
		}

		const newSeconds = seconds - 1 < 0 ? 59 : seconds - 1;
		const newMinutes =
			newSeconds == 59 ? (minutes - 1 < 0 ? 59 : minutes - 1) : minutes;
		const newHours =
			newMinutes == 59 && newSeconds == 59
				? hours - 1 < 0
					? 23
					: hours - 1
				: hours;
		const newDays =
			newHours == 23 && newMinutes == 59 && newSeconds == 59 ? days - 1 : days;

		return {
			seconds: newSeconds,
			minutes: newMinutes,
			hours: newHours,
			days: newDays,
		};
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => countdown(prevTime));
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<Flex align='center' gap='24px'>
			<Flex flexDir='column' align='center'>
				<Text fontSize='32px'>{time.days}</Text>
				<Text fontSize='9px' color='#8D9AAE'>
					Days
				</Text>
			</Flex>
			<Text fontSize='37px'>:</Text>
			<Flex flexDir='column' align='center'>
				<Text fontSize='32px'>{time.hours}</Text>
				<Text fontSize='9px' color='#8D9AAE'>
					Hours
				</Text>
			</Flex>
			<Text fontSize='37px'>:</Text>
			<Flex flexDir='column' align='center'>
				<Text fontSize='32px'>{time.minutes}</Text>
				<Text fontSize='9px' color='#8D9AAE'>
					Minutes
				</Text>
			</Flex>
			<Text fontSize='37px'>:</Text>
			<Flex flexDir='column' align='center'>
				<Text fontSize='32px'>{time.seconds}</Text>
				<Text fontSize='9px' color='#8D9AAE'>
					Seconds
				</Text>
			</Flex>
		</Flex>
	);
};
