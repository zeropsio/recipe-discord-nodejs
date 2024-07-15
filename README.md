# Zerops x Discord.js

Discord.js is a powerful Node.js module that allows you to interact with the Discord API very easily.  This is the most bare-bones example of [Discord.js](https://zerops.io) bot running on Zerops with a single ping command.

![remix](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/svg/cover-discordjs.svg)

<br/>

## Deploy to Zerops

You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-discordjs/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

<br/>

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/green/deploy-button.svg)](https://app.zerops.io/recipe/discordjs)

<br/>

## Recipe features
A Node.js version of latest Discord.js running on a load balanced **Zerops Node.js** service.

<br/>

## Production vs. development
This recipe is ready for production as is, and will scale horizontally by adding more containers in case of high traffic surges. If you want to achieve the highest baseline reliability and resiliace, start with at least two containers (add `minContainers: 2` in recipe YAML in the `bot` service section, or change the minimum containers in "Automatic Scaling configuration" section of service detail).

<br/>

## Changes made over the default installation
If you want to modify your existing Discord.js bot to efficiently run on Zerops, there are no changes needed in the codebase on top of the standard installation, just add [zerops.yml](https://github.com/zeropsio/recipe-remix-nodejs/blob/main/zerops.yml) to your repository.

<br/>
<br/>

Need help setting your project up? Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).