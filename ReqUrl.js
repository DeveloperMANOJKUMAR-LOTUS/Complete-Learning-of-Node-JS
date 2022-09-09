const http = require("http")

const serve = http.createServer((req,res) => {
    // console.log("Hello Everyone")
    if(req.url == "/") return homepage(req,res)

    if(req.url == "/home") return homepage(req,res)

    if(req.url == "/login") return loginPage(req,res)
    
})

function homepage(req,res){
    res.setHeader('content-type','text/html')
    res.write("<h6>This is a home Page ... </h6>")
}

function loginPage(req,res){
    res.setHeader('content-type', 'text/html')
    res.write("<h4>Login Page</h6>")
}

serve.listen(4000)