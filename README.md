# Douro UI

Douro UI is a Design System for all Metyis projects and partners.

### What´s Inside

This project has a design system to all Metyis projects, including components, utils, icons, etc..
Each package has its own `package.json` file and defines its dependencies, having full autonomy to publish a new version into the registry when needed. Click on each package link below to find instructions on how to install, configure and use each of them.

[**@douro-ui/components**](packages/components)

- List of components to be used in Metyis projects

[**@douro-ui/svg-icons**](packages/svg-icons)

- List of icons to be used in all Metyis project

### Storybook

To execute story just run on the terminal `yarn storybook` and it will be opened in port 6006.

### Git Practices

It's mandatory to send only one commit per Pull Request following the best guidelines from [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) with body description on the commit so the CHANGELOG could be properly feeded with good description.

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Publish

For managing a publish action you will need to create a personal access token in GitHub with write/read scope for packages.
To do so, please follow this guide and create your own: [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

This monorepo uses [Lerna](https://lerna.js.org/) to deal with versioning and publishing.
We configured independent mode so Lerna will look into the commit to check what version will be defined: Major, Minor or Patch.
To enable this automaticaly you will need to follow the guidelines from [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/). For example, a new feature will lunch a new minor version (0.0.0 -> 0.1.0) but a fix will publish a patch (0.0.0 -> 0.0.1).

All the versions are stored in GitHub Packages, so to install in some project you will need to setup that registry in the `.npmrc`.

If you need to update something and don't want to publish a new version just add the following to the commit `[skip ci]`.

### Maintainers

- [Arthur Marques](https://github.com/Arthurmqz)
- [Diogo Soares](https://github.com/vzdiogo)
- [Gabriel Santos](https://github.com/GabrielSt)
- [Hugo Freitas](https://github.com/HugoFreitasGIT)
- [Jéssica Carvalho](https://github.com/jessywork)
- [João Ramalho Costa](https://github.com/joaoprcosta)
- [Junior Oliveira](https://github.com/JuniorDiasOliveira)
