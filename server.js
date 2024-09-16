const http = require("http")
const fs = require("fs")
const path = require("path")

// const homePage = fs.readFileSync(path.join(__dirname, "index.html")).toString();
// const homePageScript = fs.readFileSync(path.join(__dirname, "index.js")).toString();
// const homePageStyle = fs.readFileSync(path.join(__dirname, "style.css")).toString();

const server = http.createServer(async (req, res) => {

    if (req.url === "/" || req.url === "/index.html") {

        // var homePage;

        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {

            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end({
                    code: err.code,
                    name: err.name,
                    message: err.message
                })
            }

            // homePage = data;


            res.writeHead(200, { 'Content-Type': 'text/html' });
            // res.end(homePage)
            res.end(data.toString())
        })
    }


    if (req.url === "/index.js") {

        // var homePageScript;

        fs.readFile(path.join(__dirname, "index.js"), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end({
                    code: err.code,
                    name: err.name,
                    message: err.message
                })
            }

            // homePageScript = data;

            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            // res.end(homePageScript)
            res.end(data.toString())
        })
    }

    if (req.url === "/style.css") {

        // var homePageStyle;

        fs.readFile(path.join(__dirname, "style.css"), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end({
                    code: err.code,
                    name: err.name,
                    message: err.message
                })
            }


            // homePageStyle = data
            res.writeHead(200, { 'Content-Type': 'text/css' });
            // res.end(homePageStyle)
            res.end(data.toString())

        })
    }
})

server.listen(3000, () => console.log("Listening on 3000"))

