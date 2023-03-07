import {Composition} from 'remotion';
import {listDates} from '@screenshots/utils';
import config from '@screenshots/config';
import {WavesImg} from './WavesImg';

const FPS = 30;
const IMAGES_PER_SECOND = config.video.ips ?? 4;

export const RemotionRoot: React.FC = () => {
	const dates = listDates(
		new Date(config?.dates?.start),
		new Date(config?.dates?.end)
	);
	return (
		<>
			<Composition
				id="WavesImg"
				component={WavesImg}
				width={1920}
				height={1080}
				fps={FPS}
				durationInFrames={Math.round((FPS * dates.length) / IMAGES_PER_SECOND)}
				defaultProps={{
					imgPerSecond: IMAGES_PER_SECOND,
					dates,
				}}
			/>
		</>
	);
};
