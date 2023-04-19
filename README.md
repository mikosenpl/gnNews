# Solution created by Michał Kikoła
Web application with news from around the world.



## Table of contents

* [General info](#general-info)
* [Start using Docker](#start-using-docker)
* [Development server](#development-server)
* [Structure](#structure)
* [Configure files](#configure-files)
* [Environment](#environment)
* [Available Scripts](#available-scripts)

## General info
This project was created using technologies such as React.js with Typescript, Redux, Axios, Styled Component, React Query, React Testing Library and many more.

![smarphone-nav](https://user-images.githubusercontent.com/76049970/230508101-d90682c6-837d-4d58-bf8a-620a013f2c2d.png)
![smarphone-front](https://user-images.githubusercontent.com/76049970/230508106-812c4b9f-8675-42bc-83bc-de114bae1971.png)
![smarphone-news](https://user-images.githubusercontent.com/76049970/230508114-0318e8e3-ddcf-44b6-b01d-b9631103f1bd.png)
![smarphone-end](https://user-images.githubusercontent.com/76049970/230508120-aeb61855-05ed-474e-bf79-decb9b26b048.png)

https://user-images.githubusercontent.com/76049970/230508134-e5227e28-67c8-4bd3-a3cd-309388d032a8.mp4

#### Versions:
Node : v18.12.0
React : 18.2.0
React-router-dom : 6.8.2

## Start using Docker

#### Run the developer server:

```bash
# start client and server
docker compose -f docker-compose.dev.yml up
# start client and server in background
docker compose -f docker-compose.dev.yml up -d
```

## Structure

```bash
├───public - all public files, such as pictures and icons.
├───src
│   ├───common
│   │   ├───api - Configuration files, for example, for axios.
│   │   ├───assets - multimedia files such as photos, translate resources etc.
│   │   ├───├───styles - theme, and global styles for application
│   │   ├───components - collection of components, i.e. functions that return a specific part of the application
│   │   ├───constants - helpers, const types
│   │   ├───enums - enumeration types
│   │   ├───mocks - simulated, examples object
│   │   ├───models - business logic representation
│   │   ├───providers - context files
│   │   ├───queries - backend queries
│   │   ├───store - store from redux
│   │   └───utils - static methods
│   └───pages - main application files, subpages
```

## Configure files

* package.json - This file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM
* tsconfig.json - Typescript configuration

## Environment

##### One file for environment variables:

* `.env.development` - env.local variables when no .env.local file is created locally. For development

##### Detailed environmental variables:: 

* `REACT_APP_API_URL` - backend address
* `REACT_APP_API_KEY` = api key for backend


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
