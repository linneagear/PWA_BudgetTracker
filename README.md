# Online/Offline Budget Tracker

## Description

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

This app adds functionality to our existing Budget Tracker application to allow for offline access and functionality.

The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.

## User Story
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling.

## Usage

To use this application, run `npm install` once cloned to gather all dependencies. 
Then in the terminal, type `npm start` to start the app. Should link you to localhost:3000, or whichever port that has been chosen.

Deployed link is [here](https://aqueous-thicket-75974.herokuapp.com/).

To use offline access, user can enter transactions like normal, but entries are added to the pending IndexedDB transaction database. The service worker is still running and activated which allows for this offline access.

![IndexedDB](/public/assets/images/offline.JPG)

Once back online, those pending transactions are added to user's saved data.

![updated](/public/assets/images/updated.JPG)

User may have to refresh a couple times to see these changes.

## Issues

I tried using webpack.config.json, babel, and adding a bundle file but was unsuccessful. In the future I'd like to come back to this homework and redo but with those added features.
