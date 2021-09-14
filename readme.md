# Sketch Site
****

this branch is just the basic react x redux structure with basic routing

@TODO:
* tidy this up 
    * make references to "sketches" more general -> i.e. "data"
    * add data norming in so we have object format not array 
* create it's own repo - good app starting place

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
