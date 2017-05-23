## i2x Challenge

## Deployment instructions

- clone repo
- cd into directory from terminal and run `npm install` assuming you have node installed
- To run locally:
  - use terminal and from root directory of repo run `npm start`. This will run webpack dev server that allows for hot reloading
  - use terminal and from root directory of repo run `npm run prod`. This will run express server locally on localhost:8080. Will be using express server running off of the build files in /public.
- To make edits to build directory, make necessary changes and then run `npm run build`.
