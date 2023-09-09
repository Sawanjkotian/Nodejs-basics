const fs = require('fs');
const server = require('http').createServer();


server.on("request", (req, res)=> {

    //Solution 1: Will read the complete file to the memory and then display it
    /*fs.ReadStream('test-file.txt', (err, data)=>{
        if(err) console.log(err);
        res.end(data);
    });*/

    //solution 2:
    // const readable = fs.createReadStream('./test-file.txt');
    // readable.on('data', chunk =>{
    //     res.write(chunk);
    // });
    // readable.on('end', ()=>{
    //     res.end();
    // });
    // readable.on('error', err =>{
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found!');
    // });

    //Solution: 3

    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    //readable source.pipe(writable destination)

});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening.........');
});