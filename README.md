# Typescript Unit Testing

typescript project with unit test

## Add Typescript to the Project

Installing the TypeScript Compiler

```bash
npm install -g typescript
```

Verify installation

```bash
tsc -v
```

use npm to initiate a new project

```bash
npm init -y
```

Adding TypeScript to the Project

```bash
npm install typescript --save-dev
```

## Installing the Testing Tools

adding Jest as a development dependency

```bash
npm install jest --save-dev
```

```bash
npm install ts-jest --save-dev
```
```bash
npm install @types/jest --save-dev
```

create an additional file called “jest.config.js”

```typescript
// jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
  }
```

## Running Test

```bash
npm test
```
