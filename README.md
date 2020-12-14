![Build](https://github.com/m0rtadelo/snake-ts/workflows/Build/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=m0rtadelo_snake-ts&metric=alert_status)](https://sonarcloud.io/dashboard?id=m0rtadelo_snake-ts)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=m0rtadelo_snake-ts&metric=coverage)](https://sonarcloud.io/dashboard?id=m0rtadelo_snake-ts)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=m0rtadelo_snake-ts&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=m0rtadelo_snake-ts)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=m0rtadelo_snake-ts&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=m0rtadelo_snake-ts)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=m0rtadelo_snake-ts&metric=security_rating)](https://sonarcloud.io/dashboard?id=m0rtadelo_snake-ts)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=m0rtadelo_snake-ts&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=m0rtadelo_snake-ts)

# Snake

A classic Snake game in Typescript. Use the arrow keys of the keyboard to move the snake and get all the fruits. Caution with your body and the limits of the game terrain!

> This is a Typescript version of the same game implemented with Javascript in https://github.com/m0rtadelo/snake

This project uses a Github Actions named `Build` to have a CI pipeline that runs on every change on master:
* installs dependencies
* runs tests
* builds the project using webpack
* publish the build into github pages
* runs and uploads sonarcloud metrics

>The pipeline will stop if some error happens

That workflow avoids the need for a local use of `install`, `build`, `test`, etc. even a code editor (you can edit directly in github and the changes will be tested, builded, published and scanned by sonar). 
## Installation

This is a Typescript project, you must install the dependencies and build the solution to be used in a browser.

`npm i`

## Gameplay

Available on:
https://m0rtadelo.github.io/snake-ts/

## Tests

This project has tests. Run the next command to test app:

`npm test`

## Build

This project has to be build before publish. Run the next command to build app:

`npm build`

## Credits

ricard.figuls@gmail.com