# This project is a template to build a react fullstack application

## in the future, will create this app by cli！

## project directory
├─public  
└─src  
　　├─client  
　　│  ├─common  
　　│  │  ├─assets  
　　│  │  │  └─img  
　　│  │  ├─components  
　　│  │  │  ├─atoms  
　　│  │  │  ├─molecules  
　　│  │  │  └─organisms  
　　│  │  ├─config  
　　│  │  ├─i18n  
　　│  │  │  └─locales  
　　│  │  └─utils  
　　│  └─components  
　　│      ├─errPage  
　　│      │  ├─page  
　　│      │  └─template  
　　│      └─example　　　　//demo  
　　│          ├─page  
　　│          ├─redux  
　　│          │  ├─actions  
　　│          │  ├─reducers  
　　│          │  └─saga  
　　│          └─template  
　　│              ├─ButtonWithRedux  
　　│              ├─ButtonWithSaga  
　　│              ├─LinkWithRouter  
　　│              └─TypographyWithI18n  
　　│      └─example_pleaseRenameit　　　　//standardized template  
　　│          ├─page  
　　│          ├─redux  
　　│          │  ├─actions  
　　│          │  ├─reducers  
　　│          │  └─saga  
　　│          └─template  
　　└─services  
　　　　├─api  
　　　　└─config  

## how to use it?
- step1: clone this project
- step2: rename this project
- step3: yarn intsall　　
- step4: add your components in src->client->components
- step5: add router with your components in src->client->config->routerList.tsx
- step6: yarn start (all creact-react-app scripts can be used)
(in step3 if you get a ERR:UNABLE_TO_VERIFY_LEAF_SIGNATURE, then you need to run this in terminal: yarn config set strict-ssl false)
## design pattern:  Atomic Design

## installed-lists
-   "@material-ui/core": "^4.7.1",
-   "@material-ui/icons": "^4.5.1",
-   "axios": "^0.19.0",
-   "react": "^16.12.0",
-   "react-dom": "^16.12.0",
-   "react-router": "^5.1.2",
-   "react-scripts": "3.3.0",
-   "redux": "^4.0.4",
-   "redux-saga": "^1.1.3",
-   "typescript": "^3.7.3"
-   "tslint": "^5.20.1"
-   "typescript-fsa": "^3.0.0",
-   "typescript-fsa-reducers": "^1.2.1",
-   "typescript-fsa-redux-saga": "^2.0.0"
-   "redux-persist": "^6.0.0",
-   "react-swipeable-views": "^0.13.3",
-   "i18next": "^19.0.1",
-   "react-i18next": "^11.2.5",
-   "react-lazyload": "^2.6.5",


## Available Scripts
The project is expand from create-react-app
So, in  directory, you can run:

### 
yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
