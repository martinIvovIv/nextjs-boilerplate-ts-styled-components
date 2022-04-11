### Add you readme here; Example

# Stripped down boilerplate template of nextjs project; includes:

1. [Styled-components](#stled-components)
2. [Typescript](#typescript)
3. [Jest testing](#jest-testing-libraries)
4. [Eslint, prettier and husky](#configured-eslint--prettier-and-husky-hooks)
5. [vscode recommended extentions](#recommended-vscode-extentions)
6. [Empty example files](#example-env-and-npmrc-files)

## Stled-components

Styled components with babel as compiler.
Using SWC with styled components is still an experimental option but if you want to use it, remove .babelrc and uncomment " styledComponents: true " in the next.config file
related changes:

- [custom \_document](https://nextjs.org/docs/advanced-features/custom-document)
- custom .babelrc file

## Typescript

Configured typescript with related helper npm packages

## Jest testing libraries

Configured jest with related helper npm packages
setupTests.ts needs to be configured by you

## Configured eslint + prettier and husky hooks

together with ignore files and related scripts

## recommended vscode extentions

eslint
prettier
dotevn and todo-tree quality of life extentions

## example .env and .npmrc files

Empty files for which you have to provide the examples

## npm check

[Package used for interactively checking the dependencies](https://www.npmjs.com/package/npm-check). \
Use `npm run npm-up` to use.

## Possible future additions:

- ImageOptim-CLI package for image optimization
- .editorconfig file and related extention
- PlopJs for consistency between teams
  https://dev.to/vikirobles/how-to-generate-automatically-components-pages-hooks-on-your-code-with-plopjs-54k8
- overriding deprecated transitory dependencies via npm's overrides option
