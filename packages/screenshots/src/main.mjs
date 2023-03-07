import puppeteer from "puppeteer";
import { takeScreenshotForDate } from "./utils.mjs";
import { listDates, parseDate } from "@screenshots/utils";
import Config from "@screenshots/config";

async function main(startDate) {
  // Obtengo la fecha actual, que será la última captura de pantalla
  const today = new Date();
  // Genero la lista de fechas desde la fecha inicial a la fecha actual
  const dates = listDates(startDate, today);

  // Arranco el navegador
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: Config.screenshots.width,
      height: Config.screenshots.height,
    },
  });
  // Para cada fecha de la lista, realizar una captura de pantall
  for (var i = 0; i < dates.length; i++) {
    await takeScreenshotForDate(browser, dates[i]);
  }
  // Cerrar el navegador
  await browser.close();

  return parseDate(startDate).dash;
}

export default main;
