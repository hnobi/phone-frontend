
## Phones_Requests - 
An Application for showing phone details based on type of requests


## Some Features

## Requirements

- Node Enviroment
- Package Manager (NPM or Yarn)
- Git
- Browser

## Local Setup Guide

- Node environment should be setup on machine
- Clone the repo with the following command `git clone https://github.com/phone-frontend.git`
- Install `create-react-app` globally using `npm install create-react-app -g`
- Run `npm install` to install all project dependencies
- On your local machine Run `npm start` to start the server and visit `http://localhost:3000` in your browser


## Technologies

- [NODE](https://nodejs.org/)
- [ES6](http://es6-features.org/)
- [REACT](https://reactjs.org/)
- [SCSS](https://sass-lang.com/)
## Coding Style

- Airbnb style guide

## Language

- Javascript

## Overview

I used a loosely-coupled react architecture design to make it easy for the application to scale. 
The components are independable on one another and all the application logic are done
in a center component ```app.js ```. The center component is also responsible for state management. I used this component to maintain my state changes instead of using Reduce or ContextApi because the application is fetching data from one endpoint.

I also make use of SCSS and BEM for better CSS structure, in order for CSS to follow the Html structure.
It provides benefits of nesting selectors 




## Author
 Hammed
