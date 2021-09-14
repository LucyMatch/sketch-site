# Sketch Site
****

Currently local development of p5.js sketches

* not using p5 /or react-p5 modules - just static script cdn
* however would like to try both integrations out within this app

Current set up:

* a ```/sketches``` folder in ```/root``` holds all p5.js sketches in raw form
* a settings.json file in ```/src/server/settings/sketch_list.json``` lists all sketches, whether they are active (to be displayed), what their status, title and id are
* on loading the react app this list is retrieved and stored in the redux store
* a simple bottom nav lists all "active" sketches
* selecting a sketch will redirect to ```/sketches/{sketch-id}```
* this loads the "Sketch" component that dynamically loads the sketch file selected based of the url slug
* current "loading" of the sketch is done using a custom hook found at ```/src/client/hooks/useScript```. this hook appends the script to the dom

Why this approach?

* I would like to retain p5 sketches in raw form rather than tying to component / and or using react wrapper to create p5 components
* this creates a good local dev environment - while making it easy to host sketches I'd like to share

Bugs / issues / concerns / todos :

* when loading the sketch page - we get a weird sizing when appending the script
* need a redirect on refresh / or a wait? when you reload the page at a slug of /sketches/id we get an error as the store hasnt been populated with sketches yet
* auto redirect to random sketch on home load

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

This is a React x Redux WebApp running on Node Express Server

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
