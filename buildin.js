const url = require("url")

const hostname = "jsonplaceholder.typicode.com";

const path = "/todos/50";

const urlObj = {
    protocol: 'https',
    hostname: hostname,
    port: 8080,
    pathname: path
}

const urlString = url.format(urlObj)
console.log(urlString)