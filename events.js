
const EventEmitter = require('events');

const http = require('http');

class Sales extends EventEmitter {
    constructor(){
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('There is a new sale!');
});

myEmitter.on('newSale', () => {
    console.log('Customer Name: Sawan');
});

myEmitter.on('newSale', stock => {
    console.log(`The Customer has ${stock}`);
});

myEmitter.emit('newSale', 9);


//===================================================================

const server = http.createServer();

server.on('request', (req, res)=>{
    console.log('Request recieved');
    console.log(req.url);
    res.end('Request recieved!');
});

server.on('request', (req, res)=>{
    console.log('Another request!');
});

server.on('close', ()=>{
    console.log('Server closed');
})

////server.listen(8000, '127.0.0.1', ()=>{
    //console.log('Waiting for request...');
//});