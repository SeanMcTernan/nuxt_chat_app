# Nuxt + Netlify AI Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://app.netlify.com/sites/next-dev-starter/deploys)

This is a [Nuxt.js](https://nuxt.com/) v3 project bootstrapped with [`create nuxt`](https://github.com/nuxt/cli) and set up to be instantly deployed to [Netlify](https://url.netlify.com/SyTBPVamO)!

This project is a simple chat app that give you the option to deploy either [Anthropics Claude Sonnet](https://www.anthropic.com/claude) or [OpenAI's GPT-4o Mini](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/). It is a very minimal site that includes 2 server functions that call the models depending on what environment variable you set. 

With Netlify, you'll have access to features like [Branch Deploys](https://docs.netlify.com/site-deploys/overview/#branches-and-deploys) and [Deploy Previews](https://docs.netlify.com/deploy-preview/), so we encourage you to deploy this, modify it, learn and have fun!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/SeanMcTernan/nuxt_chat_app&utm_source=github&utm_medium=nuxt-chat-app&utm_campaign=solutions-engineering)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Table of Contents:

- [Getting Started](#getting-started)
- [Installation options](#installation-options)
- [Testing](#testing)
  - [Included Default Testing](#included-default-testing)
  - [Removing Renovate](#removing-renovate)

## Getting Started

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

First, run the development server:
If you have the [Netlify CLI](https://github.com/netlify/cli) installed, you can run:

```bash
netlify dev
```

If you don't have the [Netlify CLI](https://github.com/netlify/cli) installed, you can run:

```bash
npm run dev
# or
yarn dev
```

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/index.vue`. The page auto-updates as you edit the file.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/SeanMcTernan/nuxt_chat_app&utm_source=github&utm_medium=nuxt-chat-template&utm_campaign=solutions-engineering)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/SeanMcTernan/nuxt_chat_app.git`
2. Navigate to the directory and run `npm install`
3. Run `npm run dev`
4. Make your changes

## App Images

The application using OpenAIs GPT 4o-Mini

![Nuxt Chat App With OpenAI](https://images.contentstack.io/v3/assets/blt5e93e46bee7dad91/blt126186d633b3f891/67ec5c075ea260b63ecd4fe7/Screenshot_2025-04-01_at_16.48.08.png)

The application using Anthropic's Claude 3.7 Sonnet

![Nuxt Chat App With Anthropic](https://images.contentstack.io/v3/assets/blt5e93e46bee7dad91/blt727db09fa59f1ed1/67ec5c07deb0561ad8b03415/Screenshot_2025-04-01_at_16.49.29.png)
