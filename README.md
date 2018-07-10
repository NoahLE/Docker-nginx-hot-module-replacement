# Reverse Proxy using nginx, Docker, webpack-dev-server, and hot-module-replacement

This is an almost working project. The last step to getting this working is getting the websock connection to correctly connect to the `webpack-dev-server`.

## Installation

1. Install yarn, node, and Docker
2. `cd` into the project root and run `docker-compose -f docker-compose.yml up --build`
3. Open your browser and go to `http://localhost`
4. Open the console and look at the web traffic

## Clues

* You can run a working copy of webpack-dev-server locally by running `yarn hot`
* The `app-webapp` container is correctly serving the HMR requests, `nginx` is where the requests are failing
* Open the console in your browser and see that the `XHR` requests are failing
* You can build a working copy of nginx using the [jwilder/nginx-proxy](https://github.com/jwilder/nginx-proxy) image. I made working copy in [this repo](https://github.com/NoahLE/Docker-nginx-webpack-HMR).