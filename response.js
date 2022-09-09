const http = require("http")

const serve = http.createServer((req,res) => {
    // console.log("Hello Everyone")

    res.setHeader('content-type', 'application/json')
    res.write("Hello This is a node js practice ..")
})

serve.listen(4000)