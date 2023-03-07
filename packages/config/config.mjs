import { parseDate } from "@screenshots/utils";

const today = parseDate(new Date());

const config = {
  video: {
    ips: 8,
  },
  screenshots: {
    width: 1920,
    height: 1080,
  },
  dates: {
    start: "2020-02-01",
    end: today.dash,
  },
};

export default config;
