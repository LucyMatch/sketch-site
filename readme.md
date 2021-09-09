# Sketch Site
****

Currently local development of p5.js sketches

* both p5 & react-p5 are installed
* currently using only p5 raw 

* this is a basic react app - redux may be integrated later if we start to deal with data

****

install supporting modules
```npm install```

start development environment
```npm run dev```

build production
```npm run build```

run production
```npm run start```

****

Router using : `react-router-dom`


****
Webpack

    / Module bundler - bundles js for browser usage
    / webpack.config.js handles configuration of babel, node-sass, webpack-dev-server

babel

    / keeps code in latest v of JS
    / Converts our JSX to JS

node-Sass

    / converts our scss into css
    / javascript linked css
    / include reference in main client.js to main.scss

webpack-dev-server

    / runs development server with live reload & proxy URL

Express

    / express server
    / serving static client end
    / available for api calls

nodemon

    / for running server end .js live reload

concurrently

    / npm module allows for multiple npm calls at once - used in package.json to create run commands

****