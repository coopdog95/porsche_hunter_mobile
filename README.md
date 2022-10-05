# Porsche Hunter

### Created by Cooper Timmerman

#### Overview:

A mobile app that allows users to sign up and upload their Porsche 'Hunts'! Each hunt has a title, description, location, and a list of cars, with model, trims, and images attached to each car. Users can edit and delete their hunts as the please as well.

#### Usage:

Download the `Expo Go` app for iOS, and [click here from your device](exp://exp.host/@cooper.timmerman/porsche_hunter_mobile?release-channel=default). From a browser, visit the [app's page](https://expo.dev/@cooper.timmerman/porsche_hunter_mobile?serviceType=classic&distribution=expo-go) and scan the QR code. Either option will automatically open the app using the `Expo Go` app.

#### Tech Specs:

- Created using React Native v0.69 & Expo v46.
- Node.js backend + Postgres database hosted on Heroku
- AWS S3 Bucket used for storing images

#### Running Locally

- Use node version >= 14 (`$ nvm use 14` if using nvm)
- Clone this repo & [the backend repo](https://github.com/coopdog95/porsche_hunter)
- `$ npm install` on both
- `$ npm run server` on the backend
- `$ npm start` on the frontend
- Once the frontend server is running, scan the QR code that appears in the terminal to open the mobile app using `Expo Go`
