# Reverse Proxy using nginx, Docker, webpack-dev-server, and hot-module-replacement

This is a sandbox which contains two containers, a simple Vue web application which is served via `webpack-dev-server` and an `nginx` reverse-proxy server. This application supports hot-module-replacement!

## Installation

1. Install yarn, node, and Docker
2. `cd` into the project root and run `docker-compose -f docker-compose.yml up --build`
3. Open your browser and go to `http://localhost`. Then, open the console and look at the web traffic

## Helpful links

* [webpack config - devServer](https://webpack.js.org/configuration/dev-server/)
* [webpack - hot module replacement](https://webpack.js.org/guides/hot-module-replacement/)
* [nginx - proxy_pass](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass)
* [jwilder/reverse-proxy](https://github.com/jwilder/nginx-proxy)