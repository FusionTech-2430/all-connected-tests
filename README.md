## ![Logo](https://github.com/FusionTech-2430/.github/blob/main/profile/Banner2.png?raw=true)

# all-connected-tests

Este repositorio está diseñado para realizar pruebas **End-to-End (E2E)** en el proyecto **[all-connected-app](https://github.com/FusionTech-2430/all-connected-app)**. Utilizamos **[Cypress](https://www.cypress.io/)** junto con **[Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor)** para escribir las pruebas en un formato BDD (Behavior-Driven Development), proporcionando una mejor claridad y legibilidad a los escenarios de prueba.

## Stack Tecnológico

**[Node.js](https://nodejs.org/)**

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Logo" width="50" />

| Versión `20.17.0` - Entorno de ejecución para JavaScript en el servidor.

**[Cypress](https://www.cypress.io/)**

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" alt="Logo" width="50" />

| Versión `13.15.0` - Framework de pruebas E2E.

**[TypeScript](https://www.typescriptlang.org/)**

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Logo" width="50" />

| Versión `5.6.2` - Lenguaje de programación que añade tipos a JavaScript.

**[Prettier](https://prettier.io/)**

<img src="https://i.pinimg.com/originals/9f/fc/f2/9ffcf282613324a0c7dee0dfafc90e34.png" alt="Logo" width="50" />

| Versión `3.3.3` - Formateador de código para mantener un estilo consistente.

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg" alt="Logo" width="50" />

**[@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)**

| Versión `21.0.0` - Integración de Cucumber con Cypress para pruebas BDD.

**[@bahmutov/cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor)**

| Versión `2.2.3` - Preprocesador para utilizar ESBuild con Cypress.

## Instalación

Para empezar a trabajar con este proyecto, sigue los siguientes pasos:

1. Clona el repositorio en tu entorno local.

```bash
  git clone https://github.com/FusionTech-2430/all-connected-app.git
```

2. Ve al directorio del proyecto

```bash
  cd all-connected-app
```

3. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
4. Instala las dependencias del proyecto ejecutando el siguiente comando en la raíz del repositorio:

```bash
npm install
```

## Estructura del Proyecto

Aquí tienes la sección actualizada con la mención de que la carpeta `.vscode` no está incluida en el repositorio:

## Estructura del Proyecto

La estructura principal del repositorio es la siguiente:

```bash
📦 all-connected-tests
┣ 📂 .vscode  # (No incluida en el repositorio)
┃ ┗ 📜 settings.json
┣ 📂 cypress
┃ ┣ 📂 e2e
┃ ┃ ┣ 📂 features
┃ ┃ ┗ 📂 step_definitions
┃ ┣ 📂 fixtures
┃ ┗ 📂 support
┃ ┃ ┣ 📜 commands.ts
┃ ┃ ┗ 📜 e2e.ts
┣ 📜 .prettierrc
┣ 📜 cypress.config.ts
┣ 📜 package-lock.json
┣ 📜 package.json
┣ 📜 README.md
┗ 📜 tsconfig.json
```

### Explicación de la Estructura

- **`.vscode`**: Esta carpeta no está incluida en el repositorio, pero contiene la configuración recomendada para el entorno de desarrollo en Visual Studio Code, facilitando la configuración del editor para trabajar con el proyecto.
- **`cypress`**: Esta carpeta es el núcleo de las pruebas E2E y se divide en varias subcarpetas:

  - **`e2e`**: Contiene los escenarios de prueba.
    - **`features`**: Aquí se encuentran los archivos `.feature` que describen los diferentes escenarios de prueba en un formato legible.
    - **`step_definitions`**: Incluye los archivos `.step.ts` que implementan la lógica de las pruebas definidas en los archivos de características.
  - **`fixtures`**: Contiene datos predefinidos que se pueden utilizar en las pruebas para simular respuestas o estados.
  - **`support`**: Aquí se definen comportamientos y comandos personalizados que se utilizan en las pruebas.
    - **`commands.ts`**: Permite la definición de comandos personalizados que pueden ser reutilizados a lo largo de las pruebas.
    - **`e2e.ts`**: Archivos que configuran comportamientos globales para las pruebas E2E.

- **`.prettierrc`**: Archivo de configuración para Prettier, que se utiliza para formatear el código automáticamente.

- **`cypress.config.ts`**: Archivo de configuración de Cypress que define la configuración y opciones globales para las pruebas.

- **`package-lock.json` y `package.json`**: Archivos que gestionan las dependencias del proyecto, asegurando que las versiones de las librerías utilizadas sean coherentes y compatibles.

- **`README.md`**: Documento que proporciona información sobre el proyecto, incluyendo su propósito, instalación y uso.

- **`tsconfig.json`**: Archivo de configuración de TypeScript que especifica las opciones de compilación y el entorno de desarrollo para el proyecto TypeScript.

## Configuración de Visual Studio Code

Para un uso correcto de **Cucumber** dentro del entorno de desarrollo **Visual Studio Code**, es necesario instalar la extensión **[alexkrechik.cucumberautocomplete](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)**.

### Configuración recomendada

Se recomienda crear la carpeta `.vscode` en la raíz del proyecto y agregar el archivo `settings.json` con la siguiente configuración:

```json
{
  // Configuración de Cucumber
  "cucumberautocomplete.steps": ["cypress/e2e/step_definitions/**/*.ts"],
  "cucumberautocomplete.syncfeatures": "test/features/**/*.feature",
  "cucumberautocomplete.strictGherkinCompletion": true,

  "editor.quickSuggestions": {
    "comments": false,
    "strings": true,
    "other": true
  }
}
```

Esta configuración permite una correcta autocompletación y sincronización de los archivos `.feature` con sus definiciones de pasos correspondientes en los archivos `.ts`.

## Variables de Entorno

El archivo `cypress.env.json` es utilizado para configurar las variables de entorno. **Este archivo no es proporcionado debido a restricciones de privacidad de la empresa.** Es necesario que cada desarrollador o equipo cree su propio archivo `cypress.env.json` según sea necesario.

El archivo debe ubicarse en la raíz del proyecto y su estructura puede ser similar a la siguiente:

```json
{
  "baseUrl": "https://example.com",
  "apiKey": "your-api-key"
}
```

## Ejecución de Pruebas

Para ejecutar las pruebas E2E, puedes utilizar los siguientes comandos:

- **Abrir la interfaz de Cypress:**

```bash
npx cypress open
```

- **Ejecutar las pruebas en modo headless:**

```bash
npx cypress run
```

## Autores

- **Stiven Ortiz Noreña** - [StiivenOrtiz](https://github.com/StiivenOrtiz)  
  _Líder QA en FussionTech_

- **Carlos Santiago Rojas Calderon** - [carlosantiagorojas](https://github.com/carlosantiagorojas)  
  _QA Team_

---
