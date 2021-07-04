[![Build](https://github.com/TeasdaleP/location-searching/actions/workflows/push.yml/badge.svg)](https://github.com/TeasdaleP/location-searching/actions/workflows/push.yml)

# Searching Places

## How does it work? 

When running the application, you will need to select a contenanent using the dropdown provided. You will then be asked to select a country from the next dropdown and once a country is selected you will be shown details of the country you have choosen.

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## CI 

This application has been linked with Github actions for commits to master only.

## Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `npm run test:coverage` to execute the unit tests and be provided a code coverage report

![image](https://user-images.githubusercontent.com/34505340/124370334-67262b00-dc6e-11eb-9c53-3ffce7f6ff76.png)

## CSS Structure

The SCSS is strucutred using a BEM methodology but using a kebab-case naming structure to help with readability. There is also an imported Google Font used within the root styles .scss sheet which also holds the variable styles.

## Improving this Application

If I had moe time to improve this application, i would look to do the following... 

* Include the current weather for the country selected using [Weather API](https://api.weatherapi.com);
* Include integration tests to verify the data being collected more thoroughly
* Include a HTTP interceptor to handle response status more effectively
* Include another CI workflow for Pull Requests 
