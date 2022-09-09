const http = require("http")

const serve = http.createServer((req,res) => {
    console.log("Hello Everyone")
})

serve.listen(4000)