<h1 align="center">
     Amazon Clone
</h1>

## Description

The goal is to add all features of Amazon to this Amazon Clone.

### Table of Contents
 
- [Tech Stack](#tech-stack)  
- [Setup and Run](#setup-run)  
  - [Setup local repo](#setup-repo)  
  - [Setup Firebase credentials](#setup-firebase)  
  - [Run app](#run-app)  
  - [Build app](#build-app) 
- [Contribute](#contributing)   
- [Project Structure](#projectstructure)   
- [Reference Links](#reflinks)

<a id="tech-stack"></a>
## Tech Stack

* JavaScript
* [ReactJS](https://reactjs.org/)

<a id="setup-run"></a>
## Setup and Run

<a id="setup-repo"></a>
### Setup local repo
Let's setup the project on your local machine.

### 0. Prerequisites
* Install [Node.js](http://nodejs.org)

### 1. Fork repo
Fork this repo to your GitHub account  

### 2. Clone repo
Clone the forked repo to your local machine
```bash
git clone https://github.com/<YOUR-GITHUB-USERNAME>/amazon-clone.git
```
Navigate to project directory
```bash
cd amazon-clone
```

### 3. Install Dependencies
```bash
npm install or npm i
```

<a id="setup-firebase"></a>
### 4. Setup firebase for development (optional)

A firebase account is already created, but you will not have the access to it.

- To use your own firebase instance, create a new firebase project using [firebase console](https://console.firebase.google.com/).
- After creating a project, go to [project settings](https://console.firebase.google.com/project/_/settings/general/).
- In project settings of your newly created project there will be a section called 'Your Apps' which says 'There are no apps in your project, Select a platform to get started.' 
- Click on the 'WebApp' Icon, then it will ask to register a new App.

![](https://i.ibb.co/8dhZXVJ/Firebaseapp.png)

- In the 2nd step of app registration, firebase will provide to you the firebase credentials of your app.
- Now change it in project with your firebase credentials.

Your application setup is successfully completed!
<a id="run-app"></a>
### Running the app

```bash
# development
$ npm run start
```
<a id="build-app"></a>
### Build Setup

- After doing changes, Run the command `npm run build` to build the app for production to the `build` folder.

```bash
# build for production
npm run build
```
<a id="contributing"></a>
### Contribute

- You can contribute to the project, just make sure it has no conflicts and it works fine before creating the pull request.

<a id="projectstructure"></a>
## Project Structure

    .
    ├── build                   # Compiled files
    │   ├── ...
    │   ├── assets              # assets for the website
    │   ├── components          # components of the website
    │   ├── pages               # pages of the website
    |   ├── index.js            # starting point
    │   └── ...
    └── ...

<a id="reflinks"></a>
### Reference Links

- React Documentation: https://reactjs.org/
- React Router: https://reactrouter.com/web/guides/quick-start

