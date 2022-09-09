const http = require("http")

const serve = http.createServer((req,res) => {
    // console.log("Hello Everyone")

    res.setHeader('content-type', 'text/html')
    res.write("<h1>Hello NOde JS</h1>")
})

serve.listen(4000)