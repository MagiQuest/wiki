# MagiQuest Fandom Wiki Mirror
[![Deploy to GitHub Pages](https://github.com/MagiQuest/wiki-mirror/actions/workflows/deploy.yml/badge.svg)](https://github.com/MagiQuest/wiki-mirror/actions/workflows/deploy.yml) | [![Test deployment](https://github.com/MagiQuest/wiki-mirror/actions/workflows/test-deploy.yml/badge.svg)](https://github.com/MagiQuest/wiki-mirror/actions/workflows/test-deploy.yml)

> [!Warning]
> This website is in very early access and is to show the possibility of a Fandom alternative to the MagiQuest community. For the full wiki, go to [magiquest.fandom.com](https://magiquest.fandom.com)!

## Repo Setup

As of v0.6.0, when commits are made, they're immediately pushed to the ["dev" branch](https://github.com/MagiQuest/wiki/tree/dev). Commits are only pushed to ["main" branch](https://github.com/MagiQuest/wiki/tree/main) when a new version is available. Commits pushed to main are then ran through a workflow to see if they build properly, and if they pass are then pushed to the ["gh-pages" branch](https://github.com/MagiQuest/wiki/tree/gh-pages). This is where the site is built and made live.