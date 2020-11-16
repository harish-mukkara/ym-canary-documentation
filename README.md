# Canary Documentation

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Node

Install [Node](https://nodejs.org/en/) and setup the local node environment

## Clone Repository

Clone this repositoty using the following command

```console
git clone https://github.com/NitinNithilesh/ym-canary-documentation.git
```

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment Website

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

## Push Code to Repository

```console
git add -A
git commit -m "<Commit Message>"
git push
```

These commands helps you to push the updated code to this repository
