# Weather-Journal App Project

## Overview

This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions

1) Install NodeJS (windows)

 [Refer here for installation](www.phoenixnap.com/kb/)
 
 install-node-js-npm-on-windows


2) Install Express,body parser, cors and node-fetch

        `npm install express --save`

        `npm i body-parser`

        `npm i cors`

        'npm i node_fetch'

3)Go to [https://openweathermap.org/current](openweatherapi) and sign up.You will be getting an apiKey.Create a file named apikey.js inside website folder and update with the code 

`export const apiKey = 'your ApiKey';`

#### Functionalities ####

When the user enters a location and a few personal information,it will be saved in server and weather details for that location will be fetched from openweathermap.All these datas together will be displayed in home(index.html)page.

