interface VideoConfig {
  ips: number;
}
interface DatesConfig {
  start: string;
  end: string;
}

interface ScreenshotsConfig {
  width: number;
  height: number;
}

interface Config {
  video: VideoConfig;
  screenshots: ScreenshotsConfig;
  dates: DatesConfig;
}

declare const obj: Config;

export default obj;
