# github-bot

> A GitHub App built with [Probot](https://github.com/probot/probot)

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

---

## Introduction

This repo is a Probot-based GitHub App, built to automate various tasks within a specified GitHub repo.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> app
```

---

## License

This repo is licensed under an MIT license. A copy of the license is also provided.

[contributors-shield]: https://img.shields.io/github/contributors/jordandarlington/github-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/jordandarlington
[forks-shield]: https://img.shields.io/github/forks/jordandarlington/github-bot.svg?style=for-the-badge
[forks-url]: https://github.com/jordandarlington/github-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/jordandarlington/github-bot.svg?style=for-the-badge
[stars-url]: https://github.com/jordandarlington/github-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/jordandarlington/github-bot.svg?style=for-the-badge
[issues-url]: https://github.com/jordandarlington/github-bot/issues
[license-shield]: https://img.shields.io/github/license/jordandarlington/github-bot.svg?style=for-the-badge
[license-url]: https://github.com/jordandarlington/github-bot/blob/main/LICENSE