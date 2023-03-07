# Screenshots

Automatización de capturas de pantalla y generación de vídeo.

## What's inside?

### Apps and Packages

- `config`: Parámetros de configuración de las capturas de pantalla y generación de vídeo
- `screenshots`: Programa que genera las capturas de pantalla
- `utils`: Funciones que se utilizan en varias partes de los programas
- `video`: Programa que genera un vídeo a partir de las capturas de pantalla

## Instalación

### Requisitos

- [Node](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/)

### Build

Lo primero es instalar todas las dependencias de los programas

```
yarn install
```

Una vez instaladas, puedes ajustar la configuración del proyecto desde el paquete `config`

## Scripts

Para generar las capturas de pantalla se ejecuta el comando:

```
yarn scrape
```

Para generar el vídeo se ejecuta el comando:

```
yarn render
```
