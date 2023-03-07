import React from 'react';
import {
	AbsoluteFill,
	Img,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import './fonts.css';

const fontFamily = 'Inter';

const absContainer: React.CSSProperties = {
	backgroundColor: 'black',
};

const sloganStyle: React.CSSProperties = {
	fontFamily,
	position: 'absolute',
	bottom: 58,
	left: 100,
	fontSize: 36,
	lineHeight: 1.1,
	fontWeight: 700,
	textAlign: 'right',
	whiteSpace: 'pre',
	color: 'white',
};

function addLeadingZero(num: number) {
	let numString = num.toString();
	if (num < 10) {
		numString = '0' + numString;
	}
	return numString;
}

export const WavesImg: React.FC<{imgPerSecond: number; dates: Date[]}> = ({
	imgPerSecond,
	dates,
}) => {
	const frame = useCurrentFrame();
	const cfg = useVideoConfig();
	const i = Math.floor((frame / cfg.fps) * imgPerSecond) + 1;
	const date = dates[i];
	if (date) {
		const d = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
		const url = d.join('-');
		return (
			<AbsoluteFill style={absContainer}>
				<Img src={staticFile(`${url}.jpg`)} />
				<p style={sloganStyle}>
					{url
						.split('-')
						.map((n) => parseInt(n, 10))
						.map(addLeadingZero)
						.reverse()
						.join('/')}
				</p>
			</AbsoluteFill>
		);
	}
	return <AbsoluteFill style={absContainer} />;
};
