const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((res, req)=>{
    if(req.url === '/'){
        res.end('<h1>Home Page</h2>');
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`Server is running on port ${PORT}...`));
