import { stat } from "fs/promises";
import { parseDate } from "@screenshots/utils";

export async function fileExists(filename) {
  try {
    await stat(filename);
    return true;
  } catch {
    return false;
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Toma la captura de pantalla del navegador a partir de una fecha
 * @param {*} browser
 * @param {*} date
 * @param {*} verbose
 * @returns
 */
export async function takeScreenshotForDate(browser, date, verbose = true) {
  // Crear la fecha en formato texto
  const parsedDate = parseDate(date);
  // Definir dónde se va a generar la imagen
  const { pathname: path } = new URL(
    `../../video/public/${parsedDate.dash}.jpg`,
    import.meta.url
  );
  // Evitar que se genere una imagen que ya existe
  const exists = await fileExists(path);
  if (exists) {
    return;
  }

  // Abrir pestaña de navegador
  const page = await browser.newPage();
  if (verbose) {
    console.log(`\t${parsedDate.dash}`);
  }
  // Ir a la página que queremos hacer la captura
  const orthographic = "-58.05,18.56,702";
  await page.goto(
    `https://earth.nullschool.net/#${parsedDate.slash}/2300Z/ocean/surface/currents/orthographic=${orthographic}`
  );
  // Esperar a que cargue la página
  await sleep(1000);
  // Crear la captura de pantalla y guardarla en la ruta definida
  await page.screenshot({
    path,
  });
  // Cerrar la pestaña del navegador
  await page.close();
}
